import React, { useState } from 'react';
import axios from 'axios';

function SubmitTicket ({submittedTickets, setSubmittedTickets, completedTickets, setCompletedTickets}) {

  const [taskName, setTaskName]= useState('');
  const [timeNumber, setTimeNumber] = useState('Time');
  const [timePeriod, setTimePeriod] = useState('Period');
  const [stage, setStage] = useState('Stage');
  const [completedProject, setCompletedProject] = useState(true);
  const [projectName, setProjectName] = useState('');

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
      axios.post ('/addTicket', {
        taskName: taskName,
        timeNumber: timeNumber,
        timePeriod: timePeriod,
        stage: stage,
      })
        .then (() => {
          axios.get('/getTickets')
            .then ((result) => {
              setSubmittedTickets(result.data)
            })
      .catch (err => console.log (err));
        })
    } else {
      alert ('Not all required fields completed!')
    }
  }

  const handleProjectName = (event) => {
    setProjectName(event.target.value);
  }

  const handleCompletedProject = (event) => {
    if (projectName.length) {
      setCompletedProject(false);
      axios.post('/completedProject', {
        projectName: projectName,
        activeTickets: submittedTickets,
        completedTickets: completedTickets,
      })
        .then(() => {
          axios.delete('/deleteAllTickets')
            .then(() => {
              setCompletedTickets([]);
              setSubmittedTickets([]);
            })
            .catch(err => console.log(err))
        })
    } else {
      alert ('Input a Valid Project Name');
    }
  }

  const handleNewProject = (event) => {
    setCompletedProject(true);
  }

  return (
    <div>
      <div>
        <h1>What Shall I Do Today?</h1>
        {submittedTickets.length === 0 ? <h2>Apparently, nothing...</h2> : <h2>Let's Get to Work</h2>}
      </div>
      <div className= 'ticket-container'>
        <div className= 'ticket-form'>
          <div className= 'task-name-ticket-form'>
            <input value= {taskName} onChange= {handleTaskName} placeholder= 'What to do...' size= "50" className= 'ticket-text-field'></input>
          </div>
          <div className= 'time-period-drop-down'>
            <select onChange= {handleNumber} className= 'drop-down'>
              <option selected value = 'Time'>Time</option>
              {arrayTimeNumber.map(time => {
                return <option value= {time}>{time}</option>
              })}
            </select>
            <select onChange= {handlePeriod} className= 'drop-down'>
              <option selected value = 'Period'>Period</option>
              {arrayTimePeriod.map(period => {
                return <option value= {period}>{period}</option>
              })}
            </select>
          </div>
          <div className= 'stage-drop-down'>
            <select onChange= {handleStage} className= 'drop-down'>
              <option selected value= 'Stage'>Stage</option>
              {arrayStage.map(stage => {
                return <option value= {stage}>{stage}</option>
              })}
            </select>
          </div>
        </div>
        <div>
          <div className= 'easy-button-container'>
            <img src= {easyURL} alt= 'Easy Button' onClick= {handleEasy} className= 'easy-button' />
          </div>
          <div>
            <input value= {projectName} onChange= {handleProjectName} placeholder= 'Save the Project As...' size= '40' className= 'save-project-input'></input>
            {completedProject ? <button onClick= {handleCompletedProject} className= 'complete-project-button'> Completed Project! </button> :
            <button onClick= {handleNewProject} className= 'complete-project-button'> Click to Start a New Project </button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmitTicket;