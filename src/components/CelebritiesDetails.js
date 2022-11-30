import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import EditCelebrity from "./EditCelebrity";




export default function CelebritiesDetails({fetchCelebrities, theUser}){
    const {id} = useParams();
    // console.log(id, "hishdf");

    const [editing, setEditing] = useState(false);

    const edit = () =>{
        setEditing(true);
    }

    const stopEditing = () =>{
        setEditing(false);
    }

    const [theCelebrity, setTheCelebrity] = useState({});
   
    const fetchCelebrityDetails = ()=>{
        axios.get("http://localhost:3000/celebrities/"+id)
        .then((response)=>{
            console.log(response);
            setTheCelebrity(response.data.celebrity);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        fetchCelebrityDetails();
    },[id])

    console.log(theCelebrity);
    return(
        <div className='celebrities-list-component'>
    
            {editing && <EditCelebrity fetchCelebrities={fetchCelebrities} stopEditing={setEditing} celebrity={theCelebrity} />}
       
            {!editing && <div>
            <p><button onClick={edit}>edit</button></p>
                <h3>{theCelebrity.name}</h3>
                <p>{theCelebrity.occupation}</p>
                <p>{theCelebrity.catchPhrase}</p>
            </div>}
            </div>
        
    )
}