import React from 'react'

const Movie = ({movie}) => {
  return (
    <div className=' text-white  bg-[#2A303C]'>
      <img src={`https://image.tmdb.org/t/p/w200${movie?.backdrop_path}`}  className="rounded-md" />
    </div>
  )
}

export default Movie
