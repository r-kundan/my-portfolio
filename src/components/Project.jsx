import React from "react";
import { Link } from "react-router-dom";
function Project() {
  return (
    <div className="p-6 ">
      <div className=" grid lg:grid-cols-4 sm:grid-cols-2  gap-6 ">
        <div className="border-none  flex-col items-center justify-center shadow-md shadow-amber-600 flex rounded-lg">
          <div className="flex justify-center">
            <div className="absolute">
              <h3 className="text-amber-700 p-4 text-2xl">
                <span className="text-white">
                  <b>Analog Clock</b>
                </span>
              </h3>
            </div>
            <div className="relative z-[-1]">
              <img
                className="rounded-t-lg"
                src="https://source.unsplash.com/JsTmUnHdVYQ"
                alt="clock img"
              />
            </div>
          </div>
          <div>
            <Link
              className="text-amber-700  text-lg"
              to="https://digital-analog-clock-five.vercel.app/"
              target="_blank"
            >
              <button className="shadow-lg p-2 m-4 border-2 text-white rounded-xl bg-amber-700 hover:shadow-lg hover:bg-amber-600">
                Watch Link
              </button>
            </Link>
            <Link
              className="text-amber-700 text-lg"
              to="https://github.com/r-kundan/digitalAndAnalogClock"
              target="_blank"
            >
              <button className="shadow-lg p-2 m-4 border-2 text-white rounded-xl bg-amber-700 hover:shadow-lg hover:bg-amber-600">
                Github Link
              </button>
            </Link>
          </div>
        </div>

  <div className="border-none  flex-col items-center justify-center shadow-md shadow-amber-600 flex rounded-lg">
          <div className="flex justify-center">
            <div className="absolute">
              <h3 className="text-amber-700 p-4 text-2xl">
                <span className="text-white">
                  <b className="">Random Quote Machine</b>
                </span>
              </h3>
            </div>
            <div className="relative z-[-1] ">
              <img
                className="rounded-t-lg h-[285px] w-[440px]"
                src="https://source.unsplash.com/mRMQwK513hY"
                alt="clock img"
              />
            </div>
          </div>
          <div>
            <Link
              className="text-amber-700  text-lg"
              to="https://random-quote-machine-omega-five.vercel.app/"
              target="_blank"
            >
              <button className="shadow-lg p-2 m-4 border-2 text-white rounded-xl bg-amber-700 hover:shadow-lg hover:bg-amber-600">
                Watch Link
              </button>
            </Link>
            <Link
              className="text-amber-700 text-lg"
              to="https://github.com/r-kundan/random-quote-machine"
              target="_blank"
            >
              <button className="shadow-lg p-2 m-4 border-2 text-white rounded-xl bg-amber-700 hover:shadow-lg hover:bg-amber-600">
                Github Link
              </button>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Project;
