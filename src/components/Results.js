import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAgain } from "../utils/quizSlice";
import { Link } from "react-router-dom";
import { data } from "../Assets/data";

const Results = () => {
  const dispatch = useDispatch();
  console.log(data);
  const getScore = useSelector((store) => store.quiz.scores);
  console.log(getScore);
  const total = getScore.reduce((e, acc) => e + acc, 0);
  const [result, setResult] = useState(0);
  useEffect(() => setResult(total), []);
  console.log("total", total);
  return (
    <div className="bg-slate-400 w-full min-h-screen relative font-semibold">
      <div className="absolute top-20 left-0 right-0 text-2xl font-semibold">
        Total Marks:{result}
      </div>

      <Link to="/">
        <button
          className="bg-blue-800 text-white p-2 m-2"
          onClick={() => dispatch(startAgain())}
        >
          Start Again!!
        </button>
      </Link>
      <div className="mt-32">
        {data.map((ques) => (
          <div className=" p-4">
            <h1 className="text-xl">Ques: {ques.question}</h1>
            <ul className="">
              <li className="p-1">
                A) {ques.option1[1]}
                {ques.option1[0] === ques.ans ? <label>✅</label> : null}
              </li>
              <li className="p-1">
                B) {ques.option2[1]}{" "}
                {ques.option2[0] === ques.ans ? <label>✅</label> : null}
              </li>
              <li className="p-1">
                c) {ques.option3[1]}{" "}
                {ques.option3[0] === ques.ans ? <label>✅</label> : null}
              </li>
              <li className="p-1">
                D) {ques.option4[1]}{" "}
                {ques.option4[0] === ques.ans ? <label>✅</label> : null}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
