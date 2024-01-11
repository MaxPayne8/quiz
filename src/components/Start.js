import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="relative bg-slate-300 w-full h-screen">
      <h1 className="text-3xl pt-10">React-Quiz</h1>
      <Link to="quiz/1">
        <button className="p-2 bg-blue-800 h-10 w-20 text-white absolute left-0 right-0 m-auto bottom-0 top-28 duration-150 rounded-lg hover:scale-125 ">
          Start
        </button>
      </Link>
    </div>
  );
};

export default Start;
