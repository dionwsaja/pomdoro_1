import React from "react";
import Background from "../components/Background";
import { useNavigate } from "react-router-dom";
import FirstTimer from "../components/FirstTimer";

const TwenyFiveMinutes = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Background />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 h-[550px] w-[1000px] rounded-md opacity-90  shadow-slate-200 shadow-md py-14 ">
        <div className="relative flex flex-col items-center">
          <FirstTimer />
          <div className="absolute bottom-0 right-0 translate-y-20 -translate-x-8">
            <button
              className="text-slate-900 text-lg hover:text-slate-500"
              onClick={() => navigate("/pomodoro2")}
            >
              50 | 10 Pomodoro...
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TwenyFiveMinutes;
