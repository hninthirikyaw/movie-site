import React, { useEffect, useState } from "react";
import "../App.css";
import { FaForward } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = ({originals}) => {
 
  let random = originals[Math.floor(Math.random() * originals.length)];
  console.log(random);

  return (
    <div>
      {/* Hero section */}
      <div className=" pt-14 text-white bg-[#2A303C]">
        <div className=" relative opacity-[0.5]">
          <img
            className=" object-cover min-h-[340px]"
            src={`https://image.tmdb.org/t/p/original${random?.backdrop_path}`}
          />
        </div>
        <div className=" absolute top-40 left-3 sm:w-[100%] md:w-[50%] lg:ml-5">
          <span className=" bg-[#FABD08] text-md tracking-wide font-bold text-black px-3 py-2 rounded-md">
            NEW
          </span>
          <h2 className=" my-3 text-red-200 font-bold text-3xl lg:text-6xl ">
            {random?.title}
          </h2>
          <div className="flex justify-around items-center w-[200px] font-bold">
            <p
              className=" text-xs border
         border-red-800 px-2 py-1 rounded-xl hover:bg-gray-300 hover:text-black"
            >
              2021
            </p>
            <p
              className=" text-xs border
         border-red-800 px-2 py-1 rounded-xl  hover:bg-gray-300 hover:text-black"
            >
              Top Rated
            </p>
            <p
              className=" text-xs border 
         border-red-800 px-2 py-1 rounded-xl  hover:bg-gray-300 hover:text-black"
            >
              2h 6m
            </p>
          </div>
          <button className=" mr-3 mt-3 px-3 py-2 bg-red-700 text-white rounded hover:bg-gray-800 ">
            Play now
          </button>
          <button className="hover:bg-gray-800  mt-3 px-3 py-2 bg-red-700 text-white rounded">
            My Lists
          </button>
        </div>
      </div>
      {/* Slider section */}
      <div className="bg-[#2A303C] py-5 px-3">
        <div className=" flex flex-wrap justify-between items-center ">
          <h2 className=" text-white text-xl font-bold tracking-widest text-white-50">TRENDING NOW</h2>
          <Link to={"/movies"}>
          <div className=" flex gap-2 justify-center items-center bg-red-600 px-2 py-1 rounded-md  hover:bg-red-800">
            <p className=" text-white ">See All</p>
            <span className="text-white text-xs">
              <FaForward />
            </span>
          </div>
          </Link>
        </div>
        <div className="carousel carousel-center  p-4 space-x-0   w-[100%]">
          <div className="carousel-item w-[100%] md:w-[30%]">
            <img
              src="https://www.themoviedb.org/t/p/w220_and_h330_face/ekZobS8isE6mA53RAiGDG93hBxL.jpg"
              className="rounded-box w-[200px] h-[300px] "
            />
          </div>
          <div className="carousel-item w-[100%] md:w-[50%]">
            <img
              src="https://image.tmdb.org/t/p/original/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
              className="rounded-box w-[200px] h-[300px]"
            />
          </div>
          <div className="carousel-item w-[100%] md:w-[50%]">
            <img
              src="https://www.themoviedb.org/t/p/w220_and_h330_face/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg "
              className="rounded-box w-[200px] h-[300px]"
            />
          </div>
          <div className="carousel-item w-[100%] md:w-[25%]">
            <img
              src="https://www.themoviedb.org/t/p/w500/jyhxT10e2z9IDsKoIQDKhyxSQJt.jpg"
              className="rounded-box w-[200px] h-[300px]"
            />
          </div>
          <div className="carousel-item w-[100%] md:w-[25%]">
            <img
              src="https://images-2.rakuten.tv/storage/global-movie/translation/artwork/920bc24e-e048-4e48-b676-99761c0b094f-x-men-1611395887-width317-quality60.jpeg"
              className="rounded-box w-[200px] h-[300px]"
            />
          </div>
          <div className="carousel-item w-[100%] md:w-[25%]">
            <img
              src="https://www.themoviedb.org/t/p/w500/kuf6dutpsT0vSVehic3EZIqkOBt.jpg"
              className="rounded-box w-[200px] h-[300px]"
            />
          </div>
          <div className="carousel-item w-[100%] md:w-[25%]">
            <img
              src="https://www.themoviedb.org/t/p/w220_and_h330_face/pJjFPPRmpkAMKms9taIGVJzaZWB.jpg"
              className="rounded-box h-[300px] w-[200px]"
            />
          </div>
          <div className="carousel-item w-[100%] md:w-[25%]">
            <img
              src="https://image.tmdb.org/t/p/original/akpsBDCYJ3uD5fKEAQXkyWzxiYt.jpg"
              className="rounded-box h-[300px] w-[200px]"
            />
          </div>
          <div className="carousel-item w-[100%] md:w-[25%]">
            <img
              src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/aMpyrCizvSdc0UIMblJ1srVgAEF.jpg"
              className="rounded-box h-[300px] w-[200px]"
            />
          </div>
          <div className="carousel-item w-[100%] md:w-[25%]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mRtBAk5Dl0MV0zMdJl8nbNhK27butD_IlQ&usqp=CAU"
              className="rounded-box h-[300px] w-[200px]"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;

{
  /* <div className="text-white pt-20 bg-[#2A303C]">
<div className="carousel w-full">
{all.map((movie, index) => {
  return (
    <div
      key={index}
      className="carousel-item text-center relative w-64 h-64 snap-start"
    >
      <a
        href={movie.title}
        className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
      >
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          className="w-full aspect-square hidden"
        />
      </a>
      <a className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10">
        <h3 className="text-white py-6 px-3 mx-auto text-xl">
          {movie.title}
        </h3>
      </a>
    </div>
  );
})}
</div>
</div> */
}
