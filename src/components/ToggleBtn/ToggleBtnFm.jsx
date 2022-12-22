import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'

const toggleBtnFrm = ({IsActive, setIsActive}) => {
  // const [IsActive, setIsActive] = useState(false)
  const [IsPressed, setIsPressed] = useState(false)

  const spring = {
    type: 'spring',
    stiffness: 400,
    damping: 50,
    duration:0.1,
  }

  return (
    <div
      className={`${IsActive ? 'ToggleBtnWrapper active' : 'ToggleBtnWrapper'} `}
      onMouseLeave={() => setIsPressed(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => {
        setIsPressed(false)
        setIsActive((state) => !state)
      }}
    >
      <motion.div
        layout
        transition={spring}
        animate={{ aspectRatio: IsPressed ? '1.3/1' : '1/1' }}
      >

      </motion.div>
    </div>
  )
}

export default toggleBtnFrm
