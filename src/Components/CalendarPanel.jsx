import React from 'react'
import './Calendar.css';

const CalendarPanel = () => {
  return (
    <div className='calendar'>

        <div className="calendar-panel">

            <div className="header">

            <p className='calendar-month'>June</p>
            <p className='calendar-year'>2024</p>
            

            <div className="calendar-change">

            <box-icon name='chevron-left' color='#b0adad' size='48px' ></box-icon>
            <box-icon name='chevron-right' color='#b0adad' size='48px'></box-icon>


            </div>


            </div>


            <div className="calendar-content">
                
                <div className="days">
                    <p className='day-name'>Mo</p>
                    <p className='day-name'>Tu</p>
                    <p className='day-name'>We</p>
                    <p className='day-name'>Th</p>
                    <p className='day-name'>Fr</p>
                    <p className='day-name'>Sa</p>
                    <p className='day-name'>Su</p>
                    
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default CalendarPanel