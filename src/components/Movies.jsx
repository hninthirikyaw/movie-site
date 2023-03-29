import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "../App.css";
import {FcRating} from "react-icons/fc"
import {MdSubtitles} from "react-icons/md"
import Filter from "./Filter";
import {AnimatePresence, motion} from "framer-motion"

const Movies = () => {
  const [all, setAll] = useState([]);
  const [filter, setFilter] = useState([]);
  const [genre, setGenre] = useState(0);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    const api = await fetch(
      ` https://api.themoviedb.org/3/movie/now_playing?api_key=5726400811650939647f0473decb6d88&language=en-US&page=3`
    );
    const { results } = await api.json();
    console.log(results);
    setAll(results);
    setFilter(results)
  };

  // const fetchUpcoming = async () => {
  //   const api = await fetch(
  //     `https://api.themoviedb.org/3/movie/upcoming?api_key=5726400811650939647f0473decb6d88&language=en-US&page=1`
  //   );
  //   const { results } = await api.json();
  //   setUpcoming(results);
  //   console.log(results.slice(0, 10));
  // };

  // const fetchPopular = async () => {
  //   const api = await fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=5726400811650939647f0473decb6d88&language=en-US&page=1`
  //   );
  //   const { results } = await api.json();
  //   setPopular(results.slice(0,17));
  //   console.log(results.slice(0, 10));
  // };

  return (
    <div  className=" pt-20 bg-[#2A303C]">
      <Filter setFilter = {setFilter} all={all} genre={genre} setGenre={setGenre}  />
      <motion.div layout>
       <AnimatePresence>
       <div className=" text-white  bg-[#2A303C] flex flex-wrap justify-around pt-3 pb-20">
          {filter.map((movie) => {
            return (
              <motion.div layout 
              initial ={{opacity:1, scale:1}}
              exit = {{opacity:0.7, scale:0.8}}
              transition={{duration:1.5}}
              key={movie.id}>
                {/* <Movie key={movie.id} movie={all} /> */}
                <div className=" relative group parent p-3 bg-gray-900 mb-3 rounded-lg">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie?.backdrop_path}`}
                    className="rounded-md mb-2"
                  />
                  <div className=" flex justify-between items-center">
                  <p className=" text-xs tracking-wider text-white">
                    <span>
                      <MdSubtitles className=" inline-flex mr-1 text-[16px] text-red-600"/>
                    </span>
                    {movie.title.substring(0, 30)}
                  </p>
                  <p className=" text-xs tracking-wider text-white">
                    <span>
                      <FcRating className=" inline-flex mr-1 text-[16px]" />
                    </span>
                    {movie.vote_average}%</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
       </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Movies;
