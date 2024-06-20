import React from 'react'
import './Task.css';

const TaskPanel = () => {
  return (
    <div className='taskpanel'>
        {/*Date Frame */}
        <div className="dmy-frame">

        <div className="current-date">
        20
        </div>
        
        <div className='month-year'>

        <div className="current-month">
        June
        </div>
        <div className="current-year">
        2024
        </div>

        </div>

        </div>

        {/* Today's Deadlines frame */}
        <div className="today">
            <p className='today-tasks'>Today's Deadlines</p>
            <ul className='tasks'>
                <li className='task-container'>Complete Frontend Challenge</li>
                <li className='task-container'>Complete UI UX Challenge</li>
            </ul>
        </div>


         {/* Upcoming Deadlines frame */}

         <div className="upcoming">
            <p className='upcoming-tasks'>Upcoming Deadlines</p>
            <ul className='tasks'>
                <li className='upcoming-task-container'>Do Something</li>
                <li className='upcoming-task-container'>Finish Personal Project</li>
            </ul>
         </div>


     

    </div>
  )
}

export default TaskPanel