import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { Results } from "./Results";
export const Questions = ({
  filterQuestion,
  setIndexQuestion,
  indexQuestion,
  questionsFiltered,
  setActiveQuiz,
  // eslint-disable-next-line react/prop-types
  category,
}) => {
  const [answersRandom, setAnswersRandom] = useState([]);
  const [score, setScore] = useState(0);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [activeResults, setActiveResults] = useState(false);

  useEffect(() => {
    const answers = [
      ...filterQuestion.incorrect_answers,
      filterQuestion.correct_answer,
    ];

    setAnswersRandom(answers.sort(() => Math.random() - 0.5));
  }, [filterQuestion]);

  const checkAnswer = (answer, index) => {
    if (answer === filterQuestion.correct_answer) {
      setScore(score + 1);
    }
    setSelectAnswerIndex(index);
    setAnswered(true);
  };

  const onNextQuestion = () => {
    setSelectAnswerIndex(null);
    setAnswered(false);
    setIndexQuestion(indexQuestion + 1);
  };

  const onReset = () => {
    setScore(0);
    setIndexQuestion(0);
    setActiveQuiz(false);
  };
  return (
    <>
      {activeResults ? (
        <Results
          questionsFiltered={questionsFiltered}
          score={score}
          onReset={onReset}
        />
      ) : (
        <main className="my-4 md:my-0 bg-ter w-full grid md:grid-cols-2 shadow-xl rounded-md md:h-max md:w-[700px] p-4 font-bold">
          <section className="w-full place-content-center border-prim border-b-4 md:border-b-0">
            <div className="mb-4">
              <h2 className="text-4xl bg-clip-text text-transparent bg-prim">
                {category}
              </h2>
            </div>
            <div className="my-2">
              <span className="text-xl">
                {indexQuestion + 1} / {questionsFiltered.length}
              </span>
            </div>
            <div>
              <span>Dificultad: </span>
              {filterQuestion.difficulty === "Difícil" ? (
                <span className={"text-red-500"}>
                  {filterQuestion.difficulty}
                </span>
              ) : (
                <></>
              )}
              {filterQuestion.difficulty === "Medio" ? (
                <span className={"text-sky-500"}>
                  {filterQuestion.difficulty}
                </span>
              ) : (
                <></>
              )}
              {filterQuestion.difficulty === "Fácil" ? (
                <span className={"text-green-500"}>
                  {filterQuestion.difficulty}
                </span>
              ) : (
                <></>
              )}
            </div>
            <div>
              <h3 className="text-xl my-2 bg-clip-text text-transparent bg-gradient-to-br from-sec to-prim">
                Pregunta:{" "}
              </h3>
              <p className="font-normal">{filterQuestion.question}</p>
            </div>
            <button
              className="w-full md:w-[90%] my-4 bg-red-500 px-5 py-2 rounded-lg font-bold transition-all hover:bg-red-600"
              onClick={onReset}
            >
              Reiniciar
            </button>
          </section>
          <section className="my-4">
            {/* Se renderizara las raspuestas */}
            <div className="flex-col flex-nowrap">
              {answersRandom.map((answer, index) => (
                <button
                  className={`w-full my-2 p-5 border-2 border-sec rounded-lg flex justify-center items-center hover:bg-sec disabled:border-cuac disabled:text-gray-500 disabled:bg-cuac ${
                    selectAnswerIndex !== null && index === selectAnswerIndex
                      ? answer === filterQuestion.correct_answer
                        ? "bg-green-500 hover:bg-green-500 border-green-500"
                        : "bg-red-500 hover:bg-red-500 border-red-500"
                      : ""
                  }`}
                  key={answer}
                  onClick={() => checkAnswer(answer, index)}
                  disabled={answered && selectAnswerIndex !== index}
                >
                  <p className="font-medium text-center text-sm">{answer}</p>
                </button>
              ))}
            </div>
            {indexQuestion + 1 === questionsFiltered.length ? (
              <button
                className="w-full my-2 bg-sky-500 px-5 py-2 rounded-lg font-bold transition-all hover:bg-sky-600"
                onClick={() => {
                  setAnswered(false);
                  setActiveResults(true);
                  
                }}
              >
                Finalizar
              </button>
            ) : (
              <button
                className="w-full my-2 bg-emerald-600 px-5 py-2 rounded-lg font-bold transition-all hover:bg-emerald-700"
                onClick={onNextQuestion}
              >
                Siguiente
              </button>
            )}
          </section>
        </main>
      )}
    </>
  );
};

Questions.propTypes = {
  filterQuestion: PropTypes.object,
  setIndexQuestion: PropTypes.func,
  indexQuestion: PropTypes.number,
  questionsFiltered: PropTypes.array,
  setActiveQuiz: PropTypes.func,
};
