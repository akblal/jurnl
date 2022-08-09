import React, { useState } from 'react';

import SubmitEntry from '../pages/ResumeEntries/SubmitEntry.jsx';
import PreviousEntries from '../pages/ResumeEntries/PreviousEntries.jsx';

function Resume () {

  const [savedBullets, setSavedBullets] = useState([])

  return (
    <div>
      <SubmitEntry savedBullets= {savedBullets} setSavedBullets= {setSavedBullets}/>
      <PreviousEntries savedBullets= {savedBullets} setSavedBullets= {setSavedBullets}/>
    </div>
  )
}

export default Resume;