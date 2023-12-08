import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import {Results} from './Results'
export const Questions = ({
  filterQuestion,
  setIndexQuestion,
  indexQuestion,
  questionsFiltered,
  setActiveQuiz,
}) => {
  const [answersRandom, setAnswersRandom] = useState([]);
	const [score, setScore] = useState(0)
	const [selectAnswerIndex, setSelectAnswerIndex] = useState(null)
	const [answered, setAnswered] = useState(false)
	const [activeResults, setActiveResults] = useState(false)

  useEffect(() => {
    const answers = [
      ...filterQuestion.incorrect_answers,
      filterQuestion.correct_answer,
    ];

    setAnswersRandom(answers.sort(() => Math.random() - 0.5));
  }, [filterQuestion]);

	const checkAnswer = (answer, index)=>{
		if(answer === filterQuestion.correct_answer) {
			setScore(score + 1)
		}
		setSelectAnswerIndex(index)
		setAnswered(true)
	}

  const onNextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
		setSelectAnswerIndex(null)
		setAnswered(false)
  };

	const onReset = ()=>{
		setScore(0)
		setIndexQuestion(0)
		setActiveQuiz(false)
	}
  return (
		<>
			{activeResults ? (
					<Results questionsFiltered={questionsFiltered} score={score} onReset={onReset}/>
			):(
				<main className="grid grid-cols-2 shadow h-[400px] w-[700px] bg-gray-900 p-4 font-bold">
        <section>
          <div className="mb-4">
            <h2 className="text-2xl">{filterQuestion.question}</h2>
          </div>
          <div>
            <span>
              Pregunta {indexQuestion + 1} / {questionsFiltered.length}
            </span>
          </div>
          <div>
            <span>Dificultad: </span>
            <span>{filterQuestion.difficulty}</span>
          </div>
          <button
            className="my-4 border px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900"
            onClick={onReset}
          >
            Reiniciar
          </button>
          <div className="py-2">
            <h3>Pregunta:</h3>
            <p className="font-normal py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              odio quod nobis, corporis tempore, dolorum numquam.
            </p>
          </div>
        </section>
        <section>
          {/* Se renderizara las raspuestas */}
          <div className="flex-col flex-nowrap">
					{
						answersRandom.map((answer, index) => (
              <button
							className={`border p-5 rounded-lg flex justify-center items-center hover:scale-105 disabled:bg-white ${
								selectAnswerIndex !== null &&
								index === selectAnswerIndex
									? answer === filterQuestion.correct_answer
										? 'bg-green-500'
										: 'bg-red-500'
									: ''
							}`}
                key={answer}
								onClick={()=> checkAnswer(answer, index)}
								disabled={answered && selectAnswerIndex !== index}
              >
                <p className='font-medium text-center text-sm'>
									{answer}
								</p>
              </button>
						))
						}
					</div>
					{
						indexQuestion + 1 === questionsFiltered.length ? (
							<button
            className="w-full my-4 border px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900"
            onClick={()=>{
							setAnswered(false)
							setActiveResults(true)
						}}
          >
            Finalizar
          </button>
						) : (
							<button
            className="w-full my-4 border px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900"
            onClick={onNextQuestion}
          >
            Siguiente
          </button>
						)
					}
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
