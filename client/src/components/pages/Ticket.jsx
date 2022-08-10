import React, { useState } from 'react';

import SubmitTicket from '../pages/TicketEntries/SubmitTicket.jsx';
import PreviousTickets from '../pages/TicketEntries/PreviousTickets.jsx';

function Ticket () {

  const [submittedTickets, setSubmittedTickets] = useState([]);

  return (
    <div>
      <SubmitTicket submittedTickets= {submittedTickets} setSubmittedTickets= {setSubmittedTickets}/>
      <PreviousTickets submittedTickets= {submittedTickets} setSubmittedTickets= {setSubmittedTickets}/>
    </div>
  )
}

export default Ticket;