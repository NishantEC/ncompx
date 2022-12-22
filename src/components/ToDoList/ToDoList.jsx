import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import React, { useState } from 'react'
import './todolist.scss'

const ToDoList = () => {
  const [Title, setTitle] = useState('')
  const [List, setList] = useState([])
  const handleAdd = () => {
    if (Title != '') {
      setList([...List, Title])
      setTitle('')
    }
  }
  const handleDelete = (index) => {
    const tempList = []
    for (let i = 0; i < List.length; i++) {
      if (i !== index) {
        tempList.push(List[i])
      }
    }
    setList(tempList)
  }

  return (
    <div className="todolist">
      <div>
        <input
          type="text"
          placeholder="New To Do Item?"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAdd}> + </button>
      </div>
      <AnimatePresence>
        {List.map((title, index) => (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            key={index}
          >
            <input type="text" value={title} disabled />
            <button onClick={() => handleDelete(index)}>
              <p style={{ rotate: '45deg' }}>+</p>
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ToDoList
