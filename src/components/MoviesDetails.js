import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';



export default function MoviesDetails(){
    const {id} = useParams();
    // console.log(id);

    const [theMovie, setTheMovie] = useState({});
   
    const fetchMovieDetails = ()=>{
        axios.get("http://localhost:3000/movies/"+id)
        .then((response)=>{
            console.log(response);
            setTheMovie(response.data.movie);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
      fetchMovieDetails();
    },[id])

    console.log(theMovie);
    return(
        <div className='movies-list-component'>
            <div className='movie-list'>
            <h3>{theMovie.title}</h3>
                <p>{theMovie.genre}</p>
                <p>{theMovie.plot}</p>
                <p>{theMovie.cast}</p>
            </div>
            
        </div>
    )
}
