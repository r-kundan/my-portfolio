import React from "react"
import  projectData  from "./Data"
 function Img() {
  return (
  <>    
  <section className="relative  m-10 placeholder-indigo-50 flex justify-around z-[-1]  ">
    <div className=" flex  justify-evenly gap-8 flex-wrap items-center">
      {projectData.map((elem, index) => {
        return (
          <>
            <div className="relative w-[300px]  h-[500px] border-2 rounded-2xl p-2 shadow-lg">
              <div className="absolute w-[94%] h-[96.1%]  rounded-2xl flex-col  justify-evenly text-white flex items-center hover:opacity-0">
                <h1 key={index} className="bg-gradient-to-r from-indigo-500 p-4 rounded-lg">
                  <b>{elem.text}</b>
                  <p>-: {elem.aouthor}</p>
                </h1>

                <h4 className=" flex p-2 border-2 text-white justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse animate-infinite animate-ease-out ">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20" viewBox="0 0 512 512"><path fill="#ffffff" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zm40-89.3l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"/></svg>
             
   
                </h4>
        
              </div>
             <img src={elem.img} alt="backgound_img" className="h-[100%] w-[100%] z-[-1] rounded-2xl bg-contain" />
            </div>
          </>
        );
      })}
    </div>
  </section>
</>
  );
}


export default Img;
