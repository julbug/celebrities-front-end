import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import EditMovie from './EditMovie';



export default function MoviesDetails({fetchMovies, theUser}){
    const {id} = useParams();
    console.log(id);

    const [editing, setEditing] = useState(false);

    const edit = () =>{
        setEditing(true);
    }

    const stopEditing = () =>{
        setEditing(false);
    }

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
        <div className='movie-list-component'>
        <div key={theMovie}>

        {editing && <EditMovie fetchMovies={fetchMovies} stopEditing={setEditing} movie={theMovie} />}
       
       {!editing && <div>
        <p><button onClick={edit}>edit</button></p>
        
            <h3>{theMovie.title}</h3>
                <p>{theMovie.genre}</p>
                <p>{theMovie.plot}</p>
                {theMovie.cast && theMovie.cast.map((castMembers) => {
                    return(
                        <div>
                            <p>{castMembers.name}</p>
                        </div>
                    )
                })}

                </div>}
            </div>
            </div>
            
    )
}
