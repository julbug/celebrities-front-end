import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import {useState, useEffect} from 'react';
import CreateCelebrity from './CreateCelebrity';
import DeleteCelebrity from './DeleteCelebrity';

export default function AllCelebrities({theCelebrities}) {

    // console.log(typeof theCelebrities)

    const [celebrities, setCelebrities] = useState([]);

    const fetchCelebrities = ()=>{
        axios.get("http://localhost:3000/celebrities")
        .then((response)=>{
            console.log(response);
            setCelebrities(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        fetchCelebrities();
    }, [])


    const listOfCelebrities = theCelebrities.map((eachCelebrity)=>{

        return(<div key={eachCelebrity._id} className="celebrity-list-item">
            <Link to={"/celebrities/"+eachCelebrity._id}>
            <h3>{eachCelebrity.name}</h3>
            </Link>
            <button onClick={()=>{DeleteCelebrity(eachCelebrity._id)}}>Delete This Celebrity</button>
            </div>)
          

    })


return(
    <div className="list-celebrities-container">
    <h1>Celebrities</h1>
       {listOfCelebrities}
       <p><Link to="/celebrities/create">Add Celebrity</Link></p>
    </div>
)
}
