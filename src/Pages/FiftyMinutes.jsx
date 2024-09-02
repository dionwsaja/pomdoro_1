import React from "react";
import Background from "../components/Background";
import { useNavigate } from "react-router-dom";
import SecondTimer from "../components/SecondTimer";

const FiftyMinutes = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Background />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 h-[550px] w-[1000px] rounded-md opacity-90  shadow-slate-200 shadow-md py-14 ">
        <div className="relative flex flex-col items-center">
          <SecondTimer />
          <div className="absolute bottom-0 right-0 translate-y-20 -translate-x-8">
            <button
              className="text-slate-900 text-lg hover:text-slate-500"
              onClick={() => navigate("/pomodoro1")}
            >
              25 | 5 Pomodoro...
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FiftyMinutes;
