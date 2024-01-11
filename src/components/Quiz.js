import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../Assets/data";
import { useDispatch, useSelector } from "react-redux";
import { addScore } from "../utils/quizSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = () => {
  const showToastMessage = () => {
    toast.success("Option selected !!", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 500,
      hideProgressBar: true,
    });
  };

  const dispatch = useDispatch();
  const { ques } = useParams();

  console.log(ques);
  const getQues = parseInt(ques) + 1;
  console.log(getQues);

  console.log(ques);
  const quesNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const selectedQues = data[ques - 1];
  const { ans, option1, option2, option3, option4, question } = selectedQues;

  console.log(selectedQues);
  return (
    <div className="w-full bg-gradient-to-b from-black via-blue-950 to-black  h-screen text-slate-200">
      <ToastContainer />
      <div className="flex justify-between p-8">
        {quesNo.map((el) => (
          <Link to={"/quiz/" + el}>
            {" "}
            <button className="bg-black text-white p-2 m-2 hover:scale-110 hover:bg-blue-700 duration-200">
              {el}
            </button>
          </Link>
        ))}
      </div>

      <div className="w-[50%] mx-auto text-left">
        <h1 className="pt-28 text-xl">
          Ques{ques}: {question}
        </h1>
        <ul className="">
          <li
            className={`p-2 m-2 hover:scale-110 hover:text-green-500 hover:cursor-pointer duration-200 `}
            onClick={() => {
              dispatch(
                addScore({
                  isCorrect: option1?.[0] == ans,
                  index: getQues - 2,
                })
              );

              showToastMessage();
            }}
          >
            A) {option1?.[1]}
          </li>

          <li
            className={`p-2 m-2 hover:scale-110 hover:text-green-500 hover:cursor-pointer duration-200`}
            onClick={() => {
              dispatch(
                addScore({
                  isCorrect: option2?.[0] == ans,
                  index: getQues - 2,
                })
              );
              showToastMessage();
            }}
          >
            {" "}
            B) {option2?.[1]}
          </li>

          <li
            className={`p-2 m-2 hover:scale-110 hover:text-green-500 hover:cursor-pointer duration-200  `}
            onClick={() => {
              dispatch(
                addScore({
                  isCorrect: option3?.[0] == ans,
                  index: getQues - 2,
                })
              );
              showToastMessage();
            }}
          >
            {" "}
            c) {option3?.[1]}
          </li>

          <li
            className={`p-2 m-2 hover:scale-110 hover:text-green-500 hover:cursor-pointer duration-200  `}
            onClick={() => {
              dispatch(
                addScore({
                  isCorrect: option4?.[0] == ans,
                  index: getQues - 2,
                })
              );
              showToastMessage();
            }}
          >
            D) {option4?.[1]}
          </li>
        </ul>
      </div>
      {getQues < 11 && (
        <Link to={"/quiz/" + getQues}>
          {" "}
          <button className="p-2 m-2 hover:scale-110 duration-150 hover:text-blue-700 ">
            Next
          </button>
        </Link>
      )}
      {getQues === 11 && (
        <Link to={"/results/"}>
          {" "}
          <button className="p-2 m-2 hover:scale-110 duration-150 hover:text-blue-700">
            Finish
          </button>
        </Link>
      )}
    </div>
  );
};

export default Quiz;
