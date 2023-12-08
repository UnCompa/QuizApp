import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { CategoryPage, HomePage } from "./pages";

export const AppRouter = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </>
  );
};
