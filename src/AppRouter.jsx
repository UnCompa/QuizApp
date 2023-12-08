import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { CategoryPage, HomePage } from "./pages";

export const AppRouter = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/QuizApp/" element={<HomePage />} />
        <Route path="/QuizApp/category/:category" element={<CategoryPage />} />
      </Routes>
    </>
  );
};
