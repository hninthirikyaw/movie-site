import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

import "../App.css";

const Navbar = () => {
  const showMenu = () => {
    const btn = document.querySelector(".mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <div className="container">
      <nav className=" text-white max-w-6xl shadow-md transition duration-300">
        <div className=" flex justify-around items-center">
          <ul className="nav navbar fixed-top w-100 bg-slate-900">
            {/* Logo */}
            <div className=" md:pl-7 lg:pl-40 ">
              <Link to={"/"}>
                <li className=" flex gap-2 ">
                  <img
                    src="https://static.cdnlogo.com/logos/g/7/google-play-movies-amp-tv.svg"
                    className="logo w-5"
                  />
                  <p className="navbar-brand font-bold tracking-wider text-white">
                    {" "}
                    <span className=" text-red-500">Vid</span> Stream
                  </p>
                </li>
              </Link>
            </div>
            {/* Menu items */}
            <div className=" flex gap-2">
              <div className=" hidden md:flex justify-around items-center gap-10 pr-5">
                <NavLink to={"/"}>
                  <li className=" font-semibold">Home</li>
                </NavLink>
                <NavLink to={"/about"}>
                  <li className=" font-semibold">About</li>
                </NavLink>
                <NavLink to={"/movies"}>
                  <li className=" font-semibold">Movies</li>
                </NavLink>
                <NavLink to={"/contact"}>
                  <li className=" font-semibold">Contact</li>
                </NavLink>
              </div>
             
            </div>
            {/* Mobile menu button */}
            <div>

            </div>
            <div class="md:hidden flex items-center read-only:">
              <button className=" absolute right-10" onClick={() => showMenu()}>
                <AiOutlineMenu />
              </button>

              
            </div>

            <div className="hidden mobile-menu mt-10 relative ">
              <ul className=" absolute top-3 right-0 mr-0 rounded-lg bg-slate-800 px-5 py-3 ">
                <NavLink to={"/"}>
                  <li className=" font-semibold block bg-[#ffffff11]  px-3 py-2 rounded-md border-b-2">
                    Home
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/about"}>
                  <li className="block px-3 py-2 bg-[#ffffff11] rounded-md font-semibold border-b-2  my-2">
                    About
                  </li>
                </NavLink>
                <NavLink to={"/movies"}>
                  <li className="block px-3 py-2 bg-[#ffffff11] rounded-md font-semibold border-b-2  my-2">
                    Movies
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/contact"}>
                  <li className="block bg-[#ffffff11] border-b-2 px-3 py-2 rounded-md font-semibold ">
                    Contact
                  </li>
                </NavLink>
               
              </ul>
            </div>
          </ul>
        </div>
      </nav>
      {/* The button to open modal */}
      {/* <label htmlFor="my-modal-6" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      {/* <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
