import { useState } from "react";
import { useParams } from "react-router-dom";
import { questions, imgs} from "../data/data";
import { useEffect } from "react";
import { Questions } from "../components/Questions";
import { StartQuestion } from "../components/StartQuestion";

const shuffleQuestions = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray.slice(0, 5);
};

export const CategoryPage = () => {
  const { category } = useParams();
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(false);
  const [questionsFiltered, setQuestionsFiltered] = useState(
    questions.filter((question) => question.category === category)
  );
  // const [imgCategory] = imgs.filter(img => img === `/QuizApp/src/assets/${category.toLowerCase()}.png`)
  // const imgCategory = imgs.find(img => img.includes(`${category.toLowerCase()}.png`));
  const imgCategory = imgs.find(img => img.includes(`${category.toLowerCase()}`));
  
  useEffect(() => {
    const newQuestions = shuffleQuestions(questionsFiltered);
    setQuestionsFiltered(newQuestions);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeQuiz]);

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
          category={category}
        />
      ) : (
        <>
          <StartQuestion imgCategory={imgCategory} category={category} setActiveQuiz={setActiveQuiz}/>
        </>
      )}
    </div>
  );
};
