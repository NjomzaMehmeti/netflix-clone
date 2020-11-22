import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests'
import './Banner.css'

const base_url = 'https://image.tmdb.org/t/p/original/';
function Banner() {

    const [movie , setMovie] = useState([]);

    useEffect(() => {
         
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
             setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)])
             
            return request;
        }
    
       fetchData();

        
    }, [])

    function truncate(str, max) {
        return str?.length > max ? str.substr(0, max-1) + '…' : str;
      }

    console.log(movie)
    
    return (
       <header className='banner'
       style={{
        backgroundSize:'cover',
        backgroundImage:`url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition:'center center'
       }}
       >
           
           <div className='banner__contents'>
                   <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                   <div className='banner__buttons'>
                   <button className='banner__button'>Play</button>
                   <button className='banner__button'>My List</button>
                   </div>
             <h1 className='banner__description'>{truncate(movie?.overview,150)}</h1>
           </div>
               <div className='banner--fadeBottom' />
       </header>
    )
}

export default Banner
