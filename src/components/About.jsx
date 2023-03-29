import React from "react";

const About = () => {
  return (
    <div className="text-white pt-24 bg-[#2A303C]">
      <div className=" flex flex-wrap justify-center items-center">
        <div>
          <img
            src="https://www.advamed.org/wp-content/uploads/2021/05/committee-meeting-board-room-1345x630.jpg"
            alt=""
            className="w-[500px] h-[240px] mr-28"
          />
        </div>
        <div className="  w-[100%] lg:w-[300px] mt-3 ml-4">
          <h3 className="animate__animated animate__backInRight font-bold text-xl">And If You Join the Experience?</h3>
          <p className=" tracking-wider leading-7 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            nobis repellat exercitationem quibusdam, culpa voluptates deleniti
            earum nulla laborum, dignissimos ex?
          </p>
          <button className="px-3 py-2 my-2 text-white flex justify-center items-center bg-red-600 hover:bg-red-800 rounded-md ">Subscribe Now</button>
        </div>
      </div>
      <div className="text-white py-20 bg-[#2A303C]">
        <h2 className=" text-2xl font-semibold ml-24">OUR TEAM</h2>
        <div className=" flex flex-wrap justify-around items-center gap-3 mb-3 text-white pt-10 bg-[#2A303C]">
          <div className=" bg-slate-900 p-3 rounded-lg mb-3">
            <img
              className="w-[220px] h-[150px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52Q0lIpQRXNMrbgrr_nQn_8yrwrbEXZdIwg&usqp=CAU"
              alt=""
            />
            <h3 className="text-xl">James</h3>
            <h3 className="text-xs tracking-wider">Manager </h3>
          </div>
          <div>
            <div className=" bg-slate-900 p-3 mb-3 rounded-lg">
              <img
                className="w-[220px] h-[150px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRaH290JB1jj3H76JmahQ2WX_I2hsPqDo-7w&usqp=CAU"
                alt=""
              />
              <h3 className="text-xl">Lucas</h3>
              <h3 className="text-xs tracking-wider">Developer </h3>
            </div>
          </div>

          <div>
            <div className=" bg-slate-900 p-3 mb-3 rounded-lg">
              <img
                className="w-[220px] h-[150px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xiBY8A4tvqi6_Xyo5TmqNxAKsb7V671gZA&usqp=CAU"
                alt=""
              />
              <h3 className="text-xl">Nathan</h3>
              <h3 className="text-xs tracking-wider">Developer </h3>
            </div>
          </div>

          <div>
            <div className=" bg-slate-900 p-3 mb-3 rounded-lg">
              <img
                className="w-[220px] h-[150px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZ5cRrDJEFVCffgfcQSiJtP3G4cHTyHPEWQ&usqp=CAU"
                alt=""
              />
              <h3 className=" text-xl">David</h3>
              <h3 className="text-xs tracking-wider">Programmer (2years+ experience)</h3>
            </div>
          </div>

          <div>
            <div className=" bg-slate-900 p-3 mb-3 rounded-lg ">
              <img
                className="w-[220px] h-[150px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwogKxokIaHmN7Q9u8sk2iRXjopr_syH9jMA&usqp=CAU"
              />
              <h3 className="text-xl">Olivia </h3>
              <h3 className="text-xs tracking-wider">Programmer </h3>
            </div>
          </div>

          <div>
            <div className=" bg-slate-900 p-3 rounded-lg mb-3">
              <img
                className="w-[220px] h-[150px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RHj5aBArvQQQtkpqkJU3MzDrr2ji2rg00w&usqp=CAU"
              />
              <h3 className="text-xl">Amelia</h3>
              <h3 className="text-xs tracking-wider">Designer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
