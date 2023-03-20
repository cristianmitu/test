import React from "react"
import YouTube from "react-youtube";
import SearchForm from "./../components/SearchForm"
import Trending from "./../components/Trending"

function Home() {
    return (
        <div>
            {/* <h2>Search for your favourite actor</h2> */}
            <SearchForm />
            {/* <YouTube/> */}
            <Trending />
        </div>
    )
}

export default Home;