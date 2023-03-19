const movieDataBaseKey = "79a50b21902c8d9bd27a20543dc2f4c5";
// You tube API key : https://console.cloud.google.com/apis/credentials?project=projectone-376623
const youTubeKey = "AIzaSyAIiJIzXXZuhC176V9ed3Vso1B3NU-CdQ8";

const submitButtonEl = document.querySelector("#submit");
const leaveReviewButtonEl = document.querySelector("#review");
const searchTermEl = document.querySelector("#name");


fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=" + movieDataBaseKey)
    .then(response => response.json())
    .then(trendingMovies => {
        console.log(trendingMovies);

        let movieTitle = "";
        let posterLink = "";
        
        for (let i = 0; i < 6; i++) {
            movieTitle = trendingMovies.results[i].title;
            console.log(movieTitle);
            posterLink = "https://image.tmdb.org/t/p/original/" + trendingMovies.results[i].poster_path;
            console.log(posterLink);
        }
    });
    
submitButtonEl.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Button Click");
    let searchTerm = searchTermEl.value;
    console.log(searchTerm);
    fetch("https://api.themoviedb.org/3/search/person?api_key=" + movieDataBaseKey + "&language=en-US&query=" + searchTerm + "&page=1&include_adult=false")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // let actorName = "";
        // let actorPicture = "";
        // let knownFor1 = "";
        // let knownFor2 = "";
        // let knownFor3 = "";

        // for (let i = 0; i < array.length; i++) {
        //     const element = array[i];
            
        // }
        
    })
    
})

// THIS PART ISN'T WORKING 
leaveReviewButtonEl.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Button Click");
    fetch("https://api.themoviedb.org/3/authentication/guest_session/new?api_key=" + movieDataBaseKey)
    .then(response => response.json())
    .then(guestSession => {
        console.log(guestSession.guest_session_id);
        let guestSessionId = guestSession.guest_session_id;
        fetch("https://api.themoviedb.org/3/movie/745/rating?api_key=" + movieDataBaseKey + "&guest_session_id=" + guestSessionId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "value": 8.5
            }),
        })
        .then(response => response.json())
        .then(newData => {
        console.log(newData);     
        
        
    })
})
    
})
    
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=none&maxResults=1&order=viewCount&q=Sandra%20Bullock&videoType=any&key=" + youTubeKey)
.then(response => response.json())
.then(data => {
    console.log(data);
});
