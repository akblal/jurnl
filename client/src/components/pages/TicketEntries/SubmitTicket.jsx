import React, { useState } from 'react';

function SubmitTicket () {

  const [tickets, setTickets] = useState([]);
  const [taskName, setTaskName]= useState('');
  const [timeNumber, setTimeNumber] = useState('Time');
  const [timePeriod, setTimePeriod] = useState('Period');
  const [stage, setStage] = useState('Stage');

  const arrayTimeNumber = ['1', '2', '3', '4', '5', '6'];
  const arrayTimePeriod = ['hour(s)', 'day(s)', 'week(s)', 'month(s)'];
  const arrayStage = ['Plan', 'Code', 'Test', 'Release', 'Deploy', 'Metrics/Validation', 'Operate'];
  const easyURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0BrBc2TF2r4P-RYlIrfnzCHqpzBX65KOCoXanrvEMRRrKi2A019jTo9VFMKaXmiOF70&usqp=CAU';

  const handleTaskName = (event) => {
    setTaskName(event.target.value);
  }

  const handleNumber = (event) => {
    setTimeNumber(event.target.value);
  }

  const handlePeriod = (event) => {
    setTimePeriod(event.target.value);
  }

  const handleStage = (event) => {
    setStage(event.target.value);
  }

  const handleEasy = (event) => {
    if ((taskName.length > 0) && (timeNumber != 'Time') && (timePeriod != 'Period') && (stage != 'Stage')) {
      const tempObject = {
        taskName: taskName,
        timeNumber: timeNumber,
        timePeriod: timePeriod,
        stage: stage,
      };
      let tempArray = tickets.slice();
      tempArray.push(tempObject)
      setTickets(tempArray)
    } else {
      alert ('Not all required fields completed!')
    }
  }

  return (
    <div>
    {console.log(tickets)}
      <div>
        <h1>What Shall I Do Today?</h1>
        {tickets.length === 0 ? <h2>Apparently, nothing...</h2> : null}
      </div>
      <div className= 'ticket-container'>
        <div className= 'ticket-form'>
          <div className= 'task-name-ticket-form'>
            <input value= {taskName} onChange= {handleTaskName} placeholder= 'What to do...' size= "50" className= 'ticket-text-field'></input>
          </div>
          <div className= 'time-period-drop-down'>
            <select onChange= {handleNumber}>
              <option selected value = 'Time'>Time</option>
              {arrayTimeNumber.map(time => {
                return <option value= {time}>{time}</option>
              })}
            </select>
            <select onChange= {handlePeriod}>
              <option selected value = 'Period'>Period</option>
              {arrayTimePeriod.map(period => {
                return <option value= {period}>{period}</option>
              })}
            </select>
          </div>
          <div className= 'stage-drop-down'>
            <select onChange= {handleStage}>
              <option selected value= 'Stage'>Stage</option>
              {arrayStage.map(stage => {
                return <option value= {stage}>{stage}</option>
              })}
            </select>
          </div>
        </div>
        <div>
          <img src= {easyURL} alt= 'Easy Button' onClick= {handleEasy} className= 'easy-button' />
        </div>
      </div>
    </div>
  )
}

export default SubmitTicket;