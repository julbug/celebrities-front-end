import React from 'react'
import {Link} from "react-router-dom";

export default function AllMovies({theMovies, fetchMovies}) {

    console.log(typeof theMovies)

    const listOfMovies = theMovies.map((eachMovies)=>{

        return(<div key={eachMovies._id} className="movie-list-item">
            <Link to={"/AllMovies/"+eachMovies._id}>
            <h3>{eachMovies.title}</h3>
            {/* <p>{eachMovies.genre}, {eachMovies.plot}</p> */}
            </Link>
            {/* <button onClick={()=>{deleteCelebrity(eachMovies._id)}}>Delete This Celebrity</button> */}
            </div>)

    })


return(
    <div className="list-movies-container">
       <h1>Movies</h1>
       {listOfMovies}       
    </div>
    )
}

