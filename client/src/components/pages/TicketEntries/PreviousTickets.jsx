import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PreviousTickets ( {submittedTickets, setSubmittedTickets} ) {

  // const [submittedTickets, setSubmittedTickets] = useState([]);

  useEffect(() => {
    axios.get('/getTickets')
      .then ((result) => {
        console.log (result.data, 'in get')
        console.log (typeof result.data, 'in get')
        setSubmittedTickets(result.data)
      })
      .catch (err => console.log (err));
  }, [])

  const handleFinished = (event) => {
    console.log(event.target.value);
  }

  return (
    <div>
      <h1>Previous Tickets</h1>
      {submittedTickets.map(ticket => {
        return (
          <div>
            <h1>{ticket.taskName} {ticket.timeNumber} {ticket.timePeriod} {ticket.stage}</h1>
            <button value= {ticket._id} onClick= {handleFinished}>Finished!</button>
          </div>
        )
      })}
    </div>
  )
}

export default PreviousTickets;