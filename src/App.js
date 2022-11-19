import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react';
import AllCelebrities from './components/AllCelebrities';
import AllMovies from './components/AllMovies';
import CelebritiesDetails from './components/CelebritiesDetails';
import {Link, Route, Routes} from "react-router-dom"



function App() {

const [theCelebrities, setTheCelebrities] = useState([]);
const [theMovies, setTheMovies] = useState([]);


const fetchCelebrities = () => {
  //axios is a library that fetches info from any api
  axios.get('http://localhost:3000/celebrities') //fetches info from this website
  .then((celebritiesFromDb) => { //then it takes said info that it grabbed
    console.log({celebritiesFromDb}) //print info onto screen
    setTheCelebrities(celebritiesFromDb.data.celebrities);
  })
  .catch((err) => {
    console.log(err)
  });
  }
  
  
  const fetchMovies = () => {
  axios.get('http://localhost:3000/movies')
  .then((moviesFromDb) => {
    console.log({moviesFromDb})
    setTheMovies(moviesFromDb.data);
  })
  .catch((err) => {
    console.log(err)
  });
  }


useEffect(() => {
  fetchMovies();
}, []);

useEffect(() => {
  fetchCelebrities();
}, []);


console.log(theCelebrities);
console.log(theMovies);

  return (
    <div className="App">
    <AllCelebrities theCelebrities={theCelebrities} fetchCelebrities={fetchCelebrities}/>
    <AllMovies theMovies={theMovies} fetchMovies={fetchMovies}/>

    
    <Routes>
    <Route path="/AllCelebrities/:id" element = {<CelebritiesDetails />} />
    </Routes>
    </div>
  );
}

export default App;
