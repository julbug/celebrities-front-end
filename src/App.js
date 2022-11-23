// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react';
import AllCelebrities from './components/AllCelebrities';
import AllMovies from './components/AllMovies';
import CelebritiesDetails from './components/CelebritiesDetails';
import MoviesDetails from './components/MoviesDetails';
import CreateCelebrity from './components/CreateCelebrity';
import CreateMovie from './components/CreateMovie';
import EditCelebrity from './components/EditCelebrity';
import {Link, Route, Routes} from "react-router-dom"



function App() {

const [theCelebrities, setTheCelebrities] = useState([]);
const [theMovies, setTheMovies] = useState([]);


const fetchCelebrities = () => {
  //axios is a library that fetches info from any api
  axios.get('http://localhost:3000/celebrities') //fetches info from this website
  .then((celebritiesFromDb) => { //then it takes said info that it grabbed
    // console.log({celebritiesFromDb}) //print info onto screen
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


// console.log(theCelebrities);
// console.log(theMovies);

  return (
    <div className="App">
    {/* mounted (load the page and this appears) */}
    {/* <AllCelebrities theCelebrities={theCelebrities} fetchCelebrities={fetchCelebrities}/>
    <AllMovies theMovies={theMovies} fetchMovies={fetchMovies}/> */}
    <Link to = "/celebrities" >
    All Celebrities
    </Link>
    <br></br>
    <Link to = "/movies" >
    All Movies
    </Link>
    

    {/* links to other pages within the app */}
    <Routes>
    <Route path="/celebrities" element = {<AllCelebrities theCelebrities={theCelebrities} fetchCelebrities={fetchCelebrities} />} />

    <Route path="/movies" element = {<AllMovies theMovies={theMovies} fetchMovies={fetchMovies}/>} />

    <Route path="/celebrities/create" element = {<CreateCelebrity fetchCelebrities = {fetchCelebrities} />} />

    <Route path="/movies/create" element = {<CreateMovie />} />

    <Route path="/celebrities/:id" element = {<CelebritiesDetails />} />

    <Route path="/movies/:id" element = {<MoviesDetails />} />

    <Route path="/celebrities/:id" element = {<EditCelebrity />} />

    </Routes>

    </div>
  );
}

export default App;
