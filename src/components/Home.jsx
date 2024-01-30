import React from "react";
import "../style/Home.scss";
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div className=" w-screen">
      <main className="w-full z-[-1]">
        <div
          id="container"
          className="flex flex-col items-center justify-evenly lg:flex-row "
        >


          <div className=' text-offwhite font-semibold'>
            <h1 className=" text-2xl lg:text-4xl"><span>Hi, It's me</span></h1>
            <h2 className=' text-3xl lg:text-6xl '>Renu Kundan</h2>
            <div className=" text-2xl  lg:text-4xl ">
              <span className="border-b"> I'm a... </span>
              <TypeAnimation className="border-b "
                sequence={[
                  "Web Developer",
                  2000,
                  " Front End Developer",
                  2000,
                  " Back End Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                style={{ color: "orange" }}
              />
            </div>
          </div>
          <div className="w-2/4 shadow-iconsha text-center  bg-bgcolor rounded-xl text-white font-semibold p-4">
           <div className="opacity-100 z-1 ">
           <h4 >I hold a Bachelor of Science degree in Computer Science. I acquired a solid foundation in various computer science concepts. I consider my self a responsible and orderly person.</h4>
           </div>
          </div>

        </div>
       
        <img   src="https://source.unsplash.com/6Pou6SeJ6cY" alt="" />
        {/* <video
          src="./src/assets/mainbg.mp4"
          autoPlay
          muted
          loop
          className=" w-full object-fill opacity-90"
        ></video> */}
      </main>


    </div>
  );
}

export default Home;
