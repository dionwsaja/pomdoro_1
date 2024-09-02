import React from "react";
// import { useNavigate } from "react-router-dom";
import clock from "../assets/images/vector/clock.png";
import coffee from "../assets/images/vector/coffee.png";
import monitor from "../assets/images/vector/monitor.png";

import { useNavigate } from "react-router-dom";

const Pomodoro = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 h-[550px] w-[1000px] rounded-md opacity-90 flex flex-col  items-center shadow-slate-200 shadow-md">
      <div className="flex gap-x-8 pt-36">
        <img src={clock} className="w-12 opacity-60" />
        <img src={monitor} className="w-12" />
        <img src={coffee} className="w-12" />
      </div>
      <h1 className="text-5xl pt-6 text-teal-600 font-semibold tracking-wider">
        Choose Pomodoro Time
      </h1>
      <div className="flex gap-x-16 pt-14 text-2xl">
        <div
          className="
          relative
          before:content-[attr(data-tip)]
          before:absolute
          before:px-3 before:py-2
          before:left-1/2 before:-bottom-3
          before:w-max before:max-w-md
          before:-translate-x-1/2 before:translate-y-full
          before:bg-transparant before:text-gray-700 before:border before:border-gray-700
          before:text-lg
          before:rounded-md before:opacity-0
          before:transition-all
            
          after:absolute
          after:left-1/2 after:-bottom-3
          after:h-0 after:w-0
          after:-translate-x-1/2 after:border-8
          after:border-b-gray-700
          after:border-l-transparent
          after:border-t-transparent
          after:border-r-transparent
          after:opacity-0
          after:transition-all

          hover:before:opacity-100 hover:after:opacity-100
          "
          data-tip="25 Minutes of Work and 5 Minutes of Rest"
        >
          <button
            className="button_option"
            onClick={() => navigate("/pomodoro1")}
          >
            25 | 5
          </button>
        </div>
        <div
          className="
        relative
        before:content-[attr(data-tip)]
        before:absolute
        before:px-3 before:py-2
        before:left-1/2 before:-bottom-3
        before:w-max before:max-w-md
        before:-translate-x-1/2 before:translate-y-full
        before:bg-transparant before:text-gray-700 before:border before:border-gray-700
        before:text-lg
        before:rounded-md before:opacity-0
        before:transition-all
          
        after:absolute
        after:left-1/2 after:-bottom-3
        after:h-0 after:w-0
        after:-translate-x-1/2 after:border-8
        after:border-b-gray-700
        after:border-l-transparent
        after:border-t-transparent
        after:border-r-transparent
        after:opacity-0
        after:transition-all

        hover:before:opacity-100 hover:after:opacity-100
        "
          data-tip="50 Minutes of Work and 10 Minutes of Rest"
        >
          <button
            className="button_option"
            onClick={() => navigate("/pomodoro2")}
          >
            50 | 10
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
