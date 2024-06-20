import React from 'react'
import TaskPanel from './Components/TaskPanel'
import CalendarPanel from './Components/CalendarPanel'
import './App.css';

const App = () => {
  return (
    <div className='main-container'>
      <TaskPanel/>
      <CalendarPanel/>
    </div>
  )
}

export default App