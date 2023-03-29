import React from "react";
import { BsFacebook, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bottom-0">
      <div className=" pb-10 flex flex-wrap justify-around items-center bg-[#1A202C] text-white pt-10">
        <div className=" flex flex-col justify-center  my-3 w-[50%] md:w-[200px] m-auto">
          <p className=" text-3xl text-center font-bold tracking-wider text-white">
            <span className=" text-red-500">Vid</span> Stream
          </p>
          <p className=" text-center text-gray-300 leading-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            nobis saepe totam sed, veritatis corrupti!
          </p>
          <div className=" flex justify-center items-center gap-2 mt-3">
          <a
            href="https://www.facebook.com/"
            target={"_blank"}
            className=" text-xl text-blue-600 bg-gray-100  p-1 rounded-[100%] hover:text-blue-800 hover:bg-gray-300 cursor-pointer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.twitter.com/"
            target={"_blank"}
            className=" text-xl text-[#1C93E4] bg-gray-100  p-1 rounded-[100%] hover:text-[#1C93E499] hover:bg-gray-300 cursor-pointer"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.whatsapp.com/"
            target={"_blank"}
            className=" text-xl text-[#25D366] bg-gray-100  p-1 rounded-[100%] hover:text-[#25D36699] hover:bg-gray-300 cursor-pointer"
          >
            <BsWhatsapp />
          </a>
          <a
            href="https://www.whatsapp.com/"
            target={"_blank"}
            className=" text-xl text-[#ff0000] bg-gray-100  p-1 rounded-[100%] hover:text-[#ff000099] hover:bg-gray-300 cursor-pointer"
          >
            <BsYoutube />
          </a>
        </div>
        </div>
        <div className=" flex flex-col w-[200px] my-3 font-semibold text-md leading-7">
          <h2>DISPLAY TYPE</h2>
          <p>Drama</p>
          <p>Action</p>
          <p>Comedy</p>
          <p>Horror</p>
        </div>
        <div className=" flex flex-col w-[200px] my-3 font-semibold text-md leading-7">
          <h2>PRODUCTION</h2>
          <p>2018 Year</p>
          <p>2019 Year</p>
          <p>2020 Year</p>
          <p>2021 Year</p>
        </div>
        <div className=" flex flex-col w-[200px] my-3 font-semibold text-md leading-7">
          <h2>DISPLAY QUALITY</h2>
          <p>720p HDTV</p>
          <p>1080p BluRay</p>
          <p>720p BluRay</p>
          <p>1080p WEB-DL</p>
        </div>
      </div>
      <div className=" hover:text-red-500 bg-black text-white flex flex-wrap font-semibold justify-around items-center px-5 py-3">
        <p> &copy; Copyrights and All Rights Reserved </p>
        <div className=" flex  justify-around gap-10">
          <p>Terms of Service</p>
          <p className="">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
