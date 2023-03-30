import React, { useEffect } from "react";
import "../App.css";

const Filter = ({ setFilter, all, setGenre, genre }) => {
  useEffect(() => {
    if (genre === 0) {
      setFilter(all);
      return;
    }
    const filterMovie = all.filter((movie) => movie.genre_ids.includes(genre));
    setFilter(filterMovie);
  }, [genre]);

  return (
    <div className=" ">
      <div className=" flex flex-wrap justify-center gap-2 ml-5 ">
        <button
          onClick={(event) => {
            setGenre(0);
          }}
          className="px-3 py-2 all border-2 border-red-900  bg-red-900 text-white rounded-lg hover:bg-transparent hover:border-2 hover:border-red-900 font-semibold"
        >
          All
        </button>
        <button
          onClick={(event) => {
            setGenre(35);
          }}
          className=" px-3 py-2 border-2 border-red-900  bg-red-900 text-white rounded-lg hover:bg-transparent hover:border-2 hover:border-red-900"
        >
          Comedy
        </button>
        <button
          onClick={(event) => {
            setGenre(28);
          }}
          className=" px-3 py-2 border-2 border-red-900  bg-red-900 text-white rounded-lg hover:bg-transparent hover:border-2 hover:border-red-900"
        >
          Action
        </button>
        <button
          onClick={(event) => {
            setGenre(27);
          }}
          className=" px-3 py-2 border-2 border-red-900  bg-red-900 text-white rounded-lg hover:bg-transparent hover:border-2 hover:border-red-900"
        >
          Horror
        </button>
        <button
          onClick={(event) => {
            setGenre(10749);
          }}
          className=" px-3 py-2 border-2 border-red-900  bg-red-900 text-white rounded-lg hover:bg-transparent hover:border-2 hover:border-red-900"
        >
          Romance
        </button>
        <button
          onClick={(event) => {
            setGenre(12);
          }}
          className=" px-3 py-2 border-2 border-red-900  bg-red-900 text-white rounded-lg hover:bg-transparent hover:border-2 hover:border-red-900"
        >
          Adventure
        </button>
        
        <button
          onClick={(event) => {
            setGenre(16);
          }}
          className=" px-3 py-2 border-2 border-red-900  bg-red-900 text-white rounded-lg hover:bg-transparent hover:border-2 hover:border-red-900"
        >
          Animation
        </button>

        
      </div>
    </div>
  );
};

export default Filter;
