import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';



export default function CelebritiesDetails(){
    const {id} = useParams();
    const [theCelebrity, setTheCelebrity] = useState({});
   
    const fetchCelebrityDetails = ()=>{
        axios.get("http://localhost:3000/celebrities"+id)
        .then((response)=>{
            setTheCelebrity(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        fetchCelebrityDetails();
    },[])


    return(
        <div className='celebrities-list-component'>
            <div className='celebrity-list'>
            <h3>{theCelebrity.name}</h3>
                <p>{theCelebrity.occupation}</p>
                <p>{theCelebrity.catchPhrase}</p>-
            </div>
            
        </div>
    )
}