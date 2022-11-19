import React from 'react'
import {Link} from "react-router-dom";

export default function AllCelebrities({theCelebrities, fetchCelebrities}) {

    // console.log(typeof theCelebrities)

    const listOfCelebrities = theCelebrities.map((eachCelebrity)=>{

        return(<div key={eachCelebrity._id} className="celebrity-list-item">
            <Link to={"/celebrities/"+eachCelebrity._id}>
            <h3>{eachCelebrity.name}</h3>
            </Link>
            {/* <p>{eachCelebrity.occupation}, {eachCelebrity.catchPhrase}</p> */}
            {/* <button onClick={()=>{deleteCelebrity(eachCelebrity._id)}}>Delete This Celebrity</button> */}
            </div>)

    })


return(
    <div className="list-celebrities-container">
    <h1>Celebrities</h1>
       {listOfCelebrities}
    </div>
)
}
