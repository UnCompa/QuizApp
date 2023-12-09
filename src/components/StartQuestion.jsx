/* eslint-disable react/prop-types */
export const StartQuestion = ({ imgCategory, category, setActiveQuiz }) => {
  return (
    <div className="w-[300px] md:h-52 md:w-[600px] bg-ter grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 place-items-center rounded shadow-lg">
      <div>
        <img className="h-40 object-cover" src={imgCategory} alt="" />
      </div>
      <div>
        <h2 className="text-2xl font-bold my-4 p-2">{category}</h2>
        <button
          className="bg-sec py-2 w-full rounded hover:bg-cuac transition-colors"
          onClick={() => setActiveQuiz(true)}
        >
          Iniciar Quiz
        </button>
      </div>
    </div>
  );
};
