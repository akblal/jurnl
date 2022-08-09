import React from 'react';

import SubmitEntry from '../pages/ResumeEntries/SubmitEntry.jsx';
import PreviousEntries from '../pages/ResumeEntries/PreviousEntries.jsx';

function Resume () {
  return (

    <div>
      <h1>Resume Ideas</h1>
      <SubmitEntry />
      <PreviousEntries />
    </div>
  )
}

export default Resume;