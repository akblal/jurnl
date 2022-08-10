import React, { useState } from 'react';

import SubmitTicket from '../pages/TicketEntries/SubmitTicket.jsx';
import PreviousTickets from '../pages/TicketEntries/PreviousTickets.jsx';

function Ticket () {
  return (
    <div>
      <SubmitTicket />
      <PreviousTickets />
    </div>
  )
}

export default Ticket;