import axios from "axios";
import SearchForm from "./components/SearchForm";

const movieDataBaseKey = "79a50b21902c8d9bd27a20543dc2f4c5";
// You tube API key : https://console.cloud.google.com/apis/credentials?project=projectone-376623
const youTubeKey = "AIzaSyAIiJIzXXZuhC176V9ed3Vso1B3NU-CdQ8";

let movieTitle = "";
let moviePoster = "";
let rateMovie = "";


function TrendingMovies(props) {
  
  
    return (
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=" + movieDataBaseKey)
        .then(function (trending) {
          // handle success
          console.log("MovieDB",trending);
          for (let i = 0; i < 6; i++) {
            movieTitle = trending.data
            
            
          };
        })
    );
};

// previous search link https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=none&maxResults=1&order=viewCount&q=Sandra%20Bullock&videoType=any&key=

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=Gravity%20official%20movie%20trailer&videoType=any&key=[YOUR_API_KEY] HTTP/1.1

// let movieTitle = "";
// let actorName = document.querySelector("#searchForm");

// fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=" + movieTitle + "20official%20movie%20trailer&videoType=any&key=" + youTubeKey)
// return (.then(response => response.json())
// .then(data => {
//     console.log("Youtube",data);
// });
// )

// export default TrendingMovies

