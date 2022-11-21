import "../App.css";
import axios from "axios"
import {useState} from 'react';

export default function EditCelebrity({celebrity, stopEditing, fetchCelebrities}){
    
    const endEdit = () =>{
        stopEditing()
    }


    const [formState, setFormState] = useState(celebrity);

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }


    const submitForm = () =>{
        axios.post("http://localhost:3000/celebrities/edit/"+celebrity._id, {
            name: formState.name,
            occupation: formState.occupation,
            catchPhrase: formState.catchPhrase,
        }).then((response)=>{

            fetchCelebrities();


        }).catch((err)=>{
            console.log(err)
        })
    }


    return(
        <div> 
           <div>
            <p><button onClick={endEdit}>X</button></p>

            <div>
            Name:
            <input value={formState.name} onChange={(e)=>{updateInput(e, "name")}} />
            </div>
            

            <p>Occupation: 
                <input value={formState.occupation} onChange={(e)=>{updateInput(e, "occupation")}}/>
            </p>
            
            
            <div>
            Catch Phrase:
                <input value={formState.catchPhrase} onChange={(e)=>{updateInput(e, "catchPhrase")}}/>
            </div>
            
    
            </div>

            <button onClick={submitForm}>Submit</button>
        </div>
    )
}