import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { ImAddressBook } from "react-icons/im";

const Contact = () => {
  return (
    <div className="text-white pt-20  bg-[#2A303C]">
      {/* contact form */}
      <div className=" pb-10">
        <h2 className="mb-2 text-center text-3xl font-semibold">
          How Can We Help?
        </h2>
        <p className=" mb-5 text-center text-xl font-semibold tracking-wider text-white-50">
          Talk to one of our consultants today and learn how to start leveraging
          your business.
        </p>
        <form>
          <div className=" flex flex-wrap justify-center gap-2 ">
            <input
              type="text"
              placeholder="Name"
              className=" bg-transparent w-[100%] md:w-[45%] border-white border px-3 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[100%] bg-transparent md:w-[45%]  border-white border px-3 py-2"
            />
            <input
              type="phone"
              placeholder="Phone"
              className="w-[100%] bg-transparent md:w-[45%]  border-white border px-3 py-2"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-[100%] bg-transparent md:w-[45%]  border-white border px-3 py-2"
            />
            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Message"
              className=" w-[100%] md:w-[91%] bg-transparent  border-white border px-3 py-2"
            ></textarea>
          </div>

          <div className=" ml-12 mt-3 my-5">
            <button className=" mr-5 px-3 py-2 bg-transparent border border-red-700 rounded-lg hover:bg-black hover:text-white">
              Submit
            </button>
            <button className=" px-3 py-2 bg-transparent border border-red-700 rounded-lg hover:bg-black hover:text-white">
              Reset
            </button>
          </div>
        </form>
      </div>
      {/* Address */}
      <div className=" pb-20">
        <div  className="address shadow-2xl flex flex-col justify-center items-center mx-auto  bg-slate-900 p-5 rounded-xl w-[100%] md:w-[60%] leading-7">
          <h2 className=" text-2xl font-semibold text-center"> Our Address</h2>
         <div className=" tracking-wider">
         <span>
            <ImAddressBook className=" inline-flex mr-3 text-red-800 ext-xl" />
          </span>
          <span>Mr John Smith. 132, Kingston, New York 12401</span>
          <p>
            <span>
              <BsTelephone className=" inline-flex mr-3 text-red-800 text-xl" />
            </span>{" "}
            <a href="tel: +09897679889">+9897679889</a>
          </p>
          <p>
            <span>
              <TfiEmail className=" inline-flex mr-3 text-red-800 text-xl" />
            </span>
            <a href="email: foodie.recipe@gmail.com">vidstream@gmail.com</a>
          </p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
