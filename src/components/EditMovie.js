import "../App.css";
import axios from "axios"
import {useState} from 'react';

export default function EditMovie({movie, stopEditing, fetchMovies}){
    
    const endEdit = () =>{
        stopEditing()
    }


    const [formState, setFormState] = useState(movie);

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }


    const submitForm = () =>{
        axios.post("http://localhost:3000/movies/"+movie._id, {
            title: formState.name,
            genre: formState.genre,
            plot: formState.plot,
            cast: formState.cast,
        }).then((response)=>{

            fetchMovies();


        }).catch((err)=>{
            console.log(err)
        })
    }


    return(
        <div> 
           <div>
            <p><button onClick={endEdit}>X</button></p>

            <div>
            Title:
            <input value={formState.title} onChange={(e)=>{updateInput(e, "title")}} />
            </div>
            

            <p>Genre: 
                <input value={formState.genre} onChange={(e)=>{updateInput(e, "genre")}}/>
            </p>
            
            
            <div>
            Plot:
                <input value={formState.plot} onChange={(e)=>{updateInput(e, "plot")}}/>
            </div>

            <p>Cast: 
                <input value={formState.cast} onChange={(e)=>{updateInput(e, "cast")}}/>
            </p>
            
    
            </div>

            <button onClick={submitForm}>Submit</button>
        </div>
    )
}