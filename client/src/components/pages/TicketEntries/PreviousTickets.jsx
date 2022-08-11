import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PreviousTickets ({submittedTickets, setSubmittedTickets, completedTickets, setCompletedTickets}) {

  useEffect(() => {
    axios.get('/getTickets')
      .then (result => setSubmittedTickets(result.data))
      .then (() => {
        axios.get('getCompletedTicket')
          .then(result => setCompletedTickets(result.data))
      })
      .catch (err => console.log (err));
  }, [])

  const handleFinished = (event) => {
    const ticketID = event.target.value;
    axios.delete('/deleteActiveTicket', { data: {
      _id: ticketID,
    }})
      .then (() => {
        let completedTask;
        for (let i = 0; i < submittedTickets.length; i++) {
          if (submittedTickets[i]._id === ticketID) {
            completedTask = submittedTickets[i]
          }
        }
        axios.post('/addCompletedTicket', {
          taskName: completedTask.taskName,
          timeNumber: completedTask.timeNumber,
          timePeriod: completedTask.timePeriod,
          stage: completedTask.stage,
        })
          .then(() => {
            axios.get('getCompletedTicket')
              .then (result => setCompletedTickets(result.data))
          })
          .catch((err) => console.log(err))
      })
      .then(() => {
        axios.get('/getTickets')
          .then ((result) => {
            setSubmittedTickets(result.data)
          })
          .catch (err => console.log (err));
      })
  }

  return (
    <div className= 'overall-ticket-container'>
      <div className = 'active-tickets-container'>
        {submittedTickets.length > 0 ? <h1>Active Tickets</h1> : <h1>Woop! All Done</h1>}
        {submittedTickets.map(ticket => {
          return (
            <div className= 'active-tickets-entry-container'>
              <div className= 'active-tickets-entry'>
                <div>Task: {ticket.taskName} </div>
                <div>Time: {ticket.timeNumber} {ticket.timePeriod}</div>
                <div>Stage: {ticket.stage}</div>
              </div>
              <div className= 'finished-active-task-button'>
                <button value= {ticket._id} onClick= {handleFinished}>Finished!</button>
              </div>
            </div>
          )
        })}
      </div>
      <div className= 'completed-tickets-container'>
        {completedTickets.length >= 0 ? <h1>Completed Tickets</h1> : null}
        {completedTickets.map(ticket => {
          return (
            <div className= 'completed-tickets-entry'>
              <div>Task: {ticket.taskName} </div>
              <div>Time: {ticket.timeNumber} {ticket.timePeriod}</div>
              <div>Stage: {ticket.stage}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PreviousTickets;