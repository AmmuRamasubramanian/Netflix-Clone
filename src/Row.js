import React, {useEffect, useState} from 'react'
import axios from './axios';
import './Row.css';
// import Youtube from "react-youtube";
// import movieTrailer from "movie-trailer";

const base_url="https://image.tmdb.org/t/p/original/"

function Row({Title, fetchUrl, bigRow}) {
  const [movies,setMovies]=useState([]);

  //to run this code only once the row is loaded.
  useEffect(()=>{
    
    async function fetchData(){
        const request=await axios.get(fetchUrl);
        //Example of the request:https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
        // console.log(request.data.results);
        setMovies(request.data.results);
        return request;
    }

    fetchData();
  },[fetchUrl]);

  // const opts = {
  //   height: "390",
  //   width: "99%",
  //   playerVars: {
  //     autoplay: 0,
  //   }
  // }

  // const handleClick=(movie)=>{
  //   if (trailerUrl){
  //     setTrailerUrl("");
  //   }else{
  //     movieTrailer(movie?.name||"")
  //     .then((url)=>{
  //       const urlParams = new URLSearchParams(new URL(url).search);
  //       setTrailerUrl(urlParams.get('v'));
  //     }

  //     ).catch((error)=>console.log(error));
  //   }
  // };

//console.table(movies);

  return (
    <div className='row'>
      <h2>{Title}</h2>
      {/* to print several posters of movie */}
      <div className='row_posters'>
        {movies.map((movie)=>(
            <img key={movie.id} className={`row_poster ${bigRow && "row_posterLarge"}`}
            src={`${base_url}${bigRow? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}/>
        ))}

      </div>
    </div>
  )
}

export default Row;
