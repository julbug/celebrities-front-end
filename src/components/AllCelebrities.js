import React from 'react'

export default function AllCelebrities({theCelebrities, fetchCelebrities}) {

    console.log(typeof theCelebrities)

    const listOfCelebrities = theCelebrities.map((eachCelebrity)=>{

        return(<div key={eachCelebrity._id} className="celebrity-list-item">
            {/* <Link to={"/locations/"+eachCelebrity._id}> */}
            <h3>{eachCelebrity.name}</h3>
            <p>{eachCelebrity.occupation}, {eachCelebrity.catchPhrase}</p>
            {/* </Link> */}
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
