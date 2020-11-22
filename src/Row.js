import React, {useState, useEffect} from 'react'
import axios from './axios';
import  './Row.css';


const base_url = 'https://image.tmdb.org/t/p/original/';
function Row({title, fetchURL, isLargeRow}) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
       
        async function fetchData(){
            const request = await axios.get(fetchURL);
             setMovies(request.data.results)
             console.log(movies)
            return request;
        }
      

       fetchData();
    }, [fetchURL])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters' >
                {movies.map(el=>(
                    <img className={isLargeRow ? 'row__posterLarge' + ' row__poster': 'row__poster'} key={el.id} src={isLargeRow ? base_url + el.poster_path : base_url + el.backdrop_path} alt={el.name}></img>
                  ))}
            </div>
        </div>
    )
}

export default Row

