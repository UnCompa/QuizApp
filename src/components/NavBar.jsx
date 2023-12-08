import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div className="bg-slate-900 h-16 text-white flex items-center justify-center">
        <Link className="text-2xl font-bold" to='/QuizApp'>Quiz App</Link>
    </div>
  )
}
