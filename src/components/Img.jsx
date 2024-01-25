import React from "react";
import ImgHover from "./ImgHover.jsx";
import "../style/img.scss";
import  projectData  from "./Data";

function Img() {
 
  return (
  <>    
  
      <div>
  <section className="img flex justify-around z-[-1]">
    <div className="img-con flex justify-evenly gap-8 flex-wrap items-center">
      {projectData.map((elem, index) => {
        return (
          <>
            <div className="sinimg-con [&>*:first-child]:hover:duration-2000 [&>*:first-child]:hover:opacity-0 ">
              <div className="absolute w-[94%] h-[96.1%] rounded-2xl flex-col  justify-evenly text-white flex items-center hover:opacity-0">
                <h1 key={index} className="bg-gradient-to-r from-indigo-500 p-4 rounded-lg">
                  <b>{elem.text}</b>
                  <p>-: {elem.aouthor}</p>
                </h1>

                <h4 className=" w-14 p-4 flex opacity-70 border-2  text-white justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-bounce">
                  <b>LIKE</b>
                </h4>
              </div>
              <div className="img-tex">
                <ImgHover/>
              </div>
           <img src={elem.img} alt="backgound img" />
            </div>
          </>
        );
      })}
    </div>
  </section>
</div>
</>
  );
}


export default Img;
