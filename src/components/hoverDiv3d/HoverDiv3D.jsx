import React from 'react'
import { motion } from 'framer-motion'

const HoverDiv3D = () => {
  return (
    <motion.div
    className="hover3d"
    animate={{
      x: 0,
      y: 0,
    //   border:"2px solid #000",
      boxShadow: '-0rem 0rem 0 #252525',
      rotate: '0deg',
    }}
    whileHover={{
      x: 5,
      y: -5,

      boxShadow: '-0.5rem 0.5rem 0 #fff ',
      rotate: '0.5deg',
    }}
  >
    <h1>Hey Hover Me</h1>
    <motion.p
    animate={{
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      wordBreak: "break-word",
    }}

    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ad
      distinctio voluptatem necessitatibus, non, obcaecati voluptate amet
      suscipit alias nesciunt nostrum deserunt cum, totam corrupti in
      cupiditate debitis quas? Excepturi!
    </motion.p>
  </motion.div>
  )
}

export default HoverDiv3D