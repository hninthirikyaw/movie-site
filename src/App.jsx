import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies"

const App = () => {
   // const apiUrl = "https://api.themoviedb.org/3";
   const apiKey = "5726400811650939647f0473decb6d88";
   const [all, setAll] = useState([]);
   const [originals, setOriginals] = useState([]);
 
   const endpoints = {
     originals: "/discover/tv",
     trending: "/trending/all/week",
     now_playing: "/movie/now_playing",
     popular: "/movie/popular",
     top_rated: "/movie/top_rated",
     upcoming: "/movie/upcoming",
   };
 
   const [trending, setTrending] = useState([]);
   // const [nowPlaying, setNowPlaying] = useState([]);
   // const [topRated, setTopRated] = useState([]);
   useEffect(() => {
     fetchAll();
     fetchTrending();
   }, []);
 
   const fetchAll = async () => {
     const api = await fetch(`
     https://api.themoviedb.org/3/movie/top_rated?api_key=5726400811650939647f0473decb6d88&language=en-US&page=1`);
     const { results } = await api.json();
     setOriginals(results);
     // console.log(results);
   };

   const fetchTrending = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=5726400811650939647f0473decb6d88&language=en-US&page=1`
    );
    const { results } = await api.json();
    setTrending(results);
    // console.log(results)
  };
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home originals={originals} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
      
    </div>
  );
};

export default App;
