import React, { useState, useEffect, useRef } from "react";
import "./Quiz.css";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState({});
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [data, setData] = useState({ quizzes: [] });
  const [result, setResult] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const option_array = [Option1, Option2, Option3, Option4];

  useEffect(() => {
    fetch("http://localhost:3000/quiz")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (data.quizzes.length > 0) {
      setQuestion(data.quizzes[index]);
    }
  }, [data, index]);

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans == ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock) {
      if (index == data.quizzes.length - 1) {
        setResult(true);
        return;
      }
      setIndex((prev) => prev + 1);
      setLock(false);
      option_array.forEach((option) => {
        if (option.current) {
          option.current.classList.remove("wrong");
          option.current.classList.remove("correct");
        }
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
    if (data.quizzes.length > 0) {
      setQuestion(data.quizzes[0]);
    }
    option_array.forEach((option) => {
      if (option.current) {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      }
    });
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <>
          <h2>
            Anda Menjawab {score} pertanyaan dengan benar dari{" "}
            {data.quizzes.length} pertanyaan
          </h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>
              {question.option1}
            </li>
            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>
              {question.option2}
            </li>
            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>
              {question.option3}
            </li>
            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>
              {question.option4}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            {index + 1} of {data.quizzes.length} questions
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
