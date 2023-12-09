import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import {motion} from 'framer-motion'

export const CategoryCard = ({
    category,
    src,
    alt,
    color,
}) => {
  return (
   <motion.div
   initial={{scale: 0}}
   whileInView={{scale: 1}}
   whileHover={{y:-10}}
   className={`bg-gradient-to-t ${color} h-full w-72 rounded p-4 shadow-lg hover:contrast-125 hover:border-2 hover:border-white`}>
     <Link to={`/QuizApp/category/${category}`}>
        <div className="">
            <img className={`object-cover [filter:drop-shadow(0_0_15px_#0003);]`} src={src} alt={alt} />
        </div>
        <div className="my-2 text-xl text-center font-semibold">
            <h3>{category}</h3>
        </div>
    </Link>
   </motion.div>
  )
}

CategoryCard.propTypes = {
    category: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    color: PropTypes.string,
}
