import { useState } from 'react'
import './App.scss'
import Carousel from './components/Carousal/Carousel'
import HoverDiv3D from './components/hoverDiv3d/HoverDiv3D'
import ToDoList from './components/ToDoList/ToDoList'
import ToggleBtnFm from './components/ToggleBtn/ToggleBtnFm'

function App() {
  const CarouselData = [
    'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80',
    'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
    'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
  ]
  const [IsActive, setIsActive] = useState(true)

  return (
    <div className="App">
      <div className="carousel">
        <h1>Carousal 3D</h1>
        <Carousel Data={CarouselData} />
      </div>
      <div className="togglebtn">
        <h1>Toggle Btn</h1>
        <ToggleBtnFm IsActive={IsActive} setIsActive={(v) => setIsActive(v)} />
      </div>
      <div className="todolist-wrapper">
        <ToDoList/>
      </div>
      <div className="hover3d-wrapper">
      <HoverDiv3D/>
      </div>

    </div>
  )
}

export default App
