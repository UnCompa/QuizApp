import { useState } from "react";
import { useParams } from "react-router-dom";
import { questions, imgs } from "../data/data";
import { useEffect } from "react";
import { Questions } from "../components/Questions";

const shuffleQuestions = (array) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 5);
};

export const CategoryPage = () => {
  const { category } = useParams();
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(false);
  const [questionsFiltered, setQuestionsFiltered] = useState(
    questions.filter((question) => question.category === category)
  );
  const [imgCategory] = imgs.filter(img => img === `/QuizApp/src/assets/${category.toLowerCase()}.png`)
  useEffect(() => {
    const newQuestions = shuffleQuestions(questionsFiltered);
    setQuestionsFiltered(newQuestions);
  }, []);

  return (
    <div
      className="container flex justify-center items-center text-white"
      style={{ height: "calc(100vh - 5em)" }}
    >
      {activeQuiz ? (
        <Questions
          filterQuestion={questionsFiltered[indexQuestion]}
          setIndexQuestion={setIndexQuestion}
          indexQuestion={indexQuestion}
          questionsFiltered={questionsFiltered}
          setActiveQuiz={setActiveQuiz}
        />
      ) : (
        <>
          <div className="h-52 w-[500px] bg-slate-800 grid grid-cols-2 place-items-center rounded shadow-lg">
            <div>
              <img className="h-40 object-cover" src={imgCategory} alt="" />
            </div>
            <div>
              <h2 className="text-2xl font-bold my-4 p-2">{category}</h2>
              <button className="border py-2 w-full rounded" onClick={()=>setActiveQuiz(true)}>
                Iniciar Quiz
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
