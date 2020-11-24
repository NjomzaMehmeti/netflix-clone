import React, {useState, useEffect} from 'react'
import axios from './axios';
import  './Row.css';
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'


const base_url = 'https://image.tmdb.org/t/p/original/';
function Row({title, fetchURL, isLargeRow}) {

    const [movies, setMovies] = useState([]);
    const [trailerURL,setTrailerURL] = useState('')

    useEffect(() => {
       
        async function fetchData(){
            const request = await axios.get(fetchURL);
             setMovies(request.data.results)
            return request;
        }
      

       fetchData();
    }, [fetchURL])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleClick = (el) => {
        console.log(el)
        if (trailerURL){
            setTrailerURL('')
        } else {
            movieTrailer(el?.name || el?.title || el?.original_name || '').then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get('v'))
            }).catch((error) => console.log('catch block ' + error))
        }
    }
    console.log(trailerURL)

    

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters' >
                {movies.map(el=>(
                    <img className={`row__poster ${isLargeRow && 'row__posterLarge'}`} onClick={() => handleClick(el)} key={el.id} src={isLargeRow ? base_url + el.poster_path : base_url + el.backdrop_path} alt={el.name}></img>
                  ))}
            </div>
            {trailerURL && <Youtube videoId={trailerURL} opts= {opts} />}

        </div>
    )
}

export default Row

