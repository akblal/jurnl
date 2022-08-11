import React, { useState } from 'react';

import SubmitTicket from '../pages/TicketEntries/SubmitTicket.jsx';
import PreviousTickets from '../pages/TicketEntries/PreviousTickets.jsx';

function Ticket () {

  const [submittedTickets, setSubmittedTickets] = useState([]);
  const [completedTickets, setCompletedTickets] = useState([]);

  return (
    <div>
      <SubmitTicket submittedTickets= {submittedTickets} setSubmittedTickets= {setSubmittedTickets} completedTickets= {completedTickets} setCompletedTickets= {setCompletedTickets}/>
      <PreviousTickets submittedTickets= {submittedTickets} setSubmittedTickets= {setSubmittedTickets} completedTickets= {completedTickets} setCompletedTickets= {setCompletedTickets}/>
    </div>
  )
}

export default Ticket;