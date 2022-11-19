import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";


export default function CreateCelebrity(props){
    const navigate = useNavigate();


    const [formState, setFormState] = useState({
        name: "",
        occupation: "",
        catchPhrase: "",
    
    })

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const submitForm = () =>{
        axios.post("http://localhost:3000/celebrities/create", {
            name: formState.name,
            occupation: formState.occupation,
            catchPhrase: formState.catchPhrase,
        
        })
        .then((response)=>{
            console.log(response);
            props.fetchCelebrities();
            navigate("/celebrities");
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div>
            <div>
                Name:
                <input type="text" value={formState.name} onChange={(e)=>{updateInput(e,"name")}} />
            </div>
            <div>
                Occupation:
                <input type="text" value={formState.occupation} onChange={(e)=>{updateInput(e,"occupation")}} />
            </div>
            <div>
                Catch Phrase:
                <input type="text" value={formState.catchPhrase} onChange={(e)=>{updateInput(e,"catchPhrase")}} />
            </div>
          
            <button onClick={submitForm}>submit</button>
        </div>
    )

}