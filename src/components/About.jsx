import React from "react";
import "../style/Home.scss";
import {Link} from "react-router-dom"


function About() {
  return (
    <div id="education">
      <section>
        <div className="group m-4 top-4 flex flex-col justify-center animate-fall ">
          <h1 className="bg-amber-700 m-4 rounded-lg p-3 flex justify-center text-white ">
            <b>EDUCATIION :-</b>
          </h1>
          <div className="m-4">
            <div className="border-none p-4 shadow-md shadow-amber-600 rounded-lg">
              <h3 className='text-amber-700 text-lg'>
                <span className='text-amber-700 '><b>2019-2022</b></span> <Link to="https://www.gjust.ac.in/" target="_blank">| Guru Jambheshwar University</Link>
              </h3>
             <div className="px-6 m-2"> <h2 className="font-bold">BACHELOR OF SCIENCE IN COMPUTER SCIENCE </h2>
              <h5 className="italic tracking-wider pl-3">
                I hold a Bachelor of Science degree in Computer Science. I
                acquired a solid foundation in various computer science
                concepts. And enhanced my problem solving skills{" "}
              </h5></div>
            </div>
            <br />
            <div className="border-none p-4 shadow-md shadow-amber-600  rounded-lg">
              
              <h3 className='text-amber-700 text-lg'>
                <span><b>2018-2019</b></span> <Link to="https://www.cbse.gov.in/cbsenew/cbse.html" target="_blank">| Central Board of Secondary Education</Link>
              </h3>
             <div className="px-6 m-2"> <h2 className="font-bold">Non-medical-PCM </h2>
              <h5 className="italic tracking-wider pl-3">
                I had a volunteer experience at school, which is helping me
                right now in working with the team and leadership
              </h5></div>
            </div>
            <br />
            <div className="border-none p-4 shadow-md shadow-amber-600 rounded-lg">
              <h1 className='text-amber-700 text-lg'><span className='text-amber-700 '><b>2017-2019</b></span> | VOLUNTEER EXPERIENCE</h1>
             <div  className="px-6 m-2 "> <h2 className="font-bold">NATIONAL SERVICE SCHEME</h2>
              <h4 className="italic tracking-wider pl-3">
              Social service
              </h4></div>
            </div>
          </div>
        </div>

        
      </section>
      
      <section>
        <div className="m-4 animate-left flex flex-col justify-center ">
          <h1 className="bg-amber-700 m-4 rounded-lg p-3 flex justify-center text-white">
            <b>PROGRAMMING KNOWLEDGE :-</b>
          </h1>
          <div className="m-4">
            <div className="border-none p-4 shadow-md  shadow-amber-600 rounded-lg">
            <ul className="flex flex-wrap items-center justify-evenly p-2">
            <li className="p-2"> <h3 className='text-amber-700 text-lg'>
                <span className='text-amber-700 underline decoration-2 decoration-orange-400 rounded p-1 underline-offset-4'><b>HTML</b></span>
              </h3></li>
              <li className="p-2"> <h3 className='text-amber-700 text-lg'>
                <span className='text-amber-700 underline decoration-2 decoration-orange-400 rounded p-1 underline-offset-4'><b>CSS</b></span>
              </h3></li>
              <li className="p-2"> <h3 className='text-amber-700 text-lg'>
                <span className='text-amber-700 underline decoration-2 decoration-orange-400 rounded p-1 underline-offset-4'><b>TAILWIND </b></span>
              </h3></li>
              <li className="p-2"> <h3 className='text-amber-700 text-lg'>
                <span className='text-amber-700 underline decoration-2 decoration-orange-400 rounded p-1 underline-offset-4'><b>SASS</b></span>
              </h3></li>
              <li className="p-2"> <h3 className='text-amber-700 text-lg'>
                <span className='text-amber-700 underline decoration-2 decoration-orange-400 rounded p-1 underline-offset-4'><b>BOOTSRAP</b></span>
              </h3></li>
              <li className="p-2"> <h3 className='text-amber-700 text-lg'>
                <span className='text-amber-700 underline decoration-2 decoration-orange-400 rounded p-1 underline-offset-4'><b>JAVASCRIPT</b></span>
              </h3></li>
              <li className="p-2"> <h3 className='text-amber-700 text-lg'>
                <span className='text-amber-700 underline decoration-2 decoration-orange-400 rounded p-1 underline-offset-4'><b>NODE JS</b></span>
              </h3></li>
              <li className="p-2"> <h3 className='text-amber-700 text-lg'>
                <span className='text-amber-700 underline decoration-2 decoration-orange-400 rounded p-1 underline-offset-4'><b>EXPRESS js</b></span>
              </h3></li>
              <li className="p-2"> <h3 className='text-amber-700 text-lg'>
                <span className='text-amber-700 underline decoration-2 decoration-orange-400 rounded p-1 underline-offset-4'><b>MONGO DB</b></span>
              </h3></li>
              <li className="p-2"> <h3 className='text-amber-700 text-lg'>
                <span className='text-amber-700 underline decoration-2 decoration-orange-400 rounded p-1 underline-offset-4'><b>REACT JS</b></span>
              </h3></li>
              
            </ul>
              
            
            </div>
            
          </div>
        </div>
      </section>

      <section>
        <div className="m-4 animate-right flex flex-col justify-center ">
          <h1 className="bg-amber-700 m-4 rounded-lg p-3 flex justify-center text-white">
            <b>HOBBIES :-</b>
          </h1>
          <div className="m-4 flex items-center flex-col justify-evenly ">
            <div className="border-none p-4 shadow-md shadow-amber-600 rounded-lg">
              <h3 className='text-amber-700 text-lg'>
                <span className='text-amber-700 '><b>INDOOR GAME</b></span> 
              </h3>
             <div className="px-6 m-2 "> <h2 className="font-bold">CHESS</h2>
              <h5 className="italic tracking-wider pl-3">
                <h5>#CHESS_LOVER</h5>
              I love playing chess.
              </h5></div>
            </div>
            <br />
            <div className="border-none p-4 shadow-md shadow-amber-600  rounded-lg">
              <ul className="flex flex-wrap items-center justify-center ">
                <li className="p-4"><h3 className='text-amber-700 text-lg'>
                <span><b>COOKING</b></span>
              </h3></li>
              <li className="p-4">
              <h3 className='text-amber-700 text-lg'>
                <span><b>DANCING</b></span>
              </h3>
              </li>
              <li className="p-4"> <h3 className='text-amber-700 text-lg'>
                <span><b>LISTENING TO SONG</b></span>
              </h3></li>
              </ul>
              
            </div>
            
          </div>
        </div>

        
      </section>
    </div>
  );
}

export default About;
