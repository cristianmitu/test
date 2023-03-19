import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";

const youTubeKey = "AIzaSyAIiJIzXXZuhC176V9ed3Vso1B3NU-CdQ8";
const VideoPlayer = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${youTubeKey}`
        );
        setVideoData(response.data.items[0]);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [videoId]);

  if (error) {
    return <div>There was an error: {error.message}</div>;
  }

  if (!videoData) {
    return <div>Loading...</div>;
  }

  const { snippet } = videoData;
  const opts = {
    height: "390",
    width: "640",
  };

  return (
    <div>
      <h2>{snippet.title}</h2>
      <YouTube videoId={videoId} opts={opts} />
      <p>{snippet.description}</p>
    </div>
  );
};

export default VideoPlayer;