import React, { useState } from 'react';

function SubmitEntry () {

  const [bulletPoint, setBulletPoint] = useState('');
  const [validInput, setValidInput] = useState(false);

  const handleBulletPoint = (event) => {
    setBulletPoint(event.target.value);
    if (event.target.value.length > 0) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log (bulletPoint);
  }

  return (
    <div>
      <h2 className = 'submit-entry-title'>Impressive Achievement</h2>
      <div className = 'submit-entry-container'>
        <input value= {bulletPoint} onChange= {handleBulletPoint} placeholder= 'Awesome Idea Here' size="50" className= 'resume-text-field'></input>
        <button onClick= {handleSubmit} disabled = {!validInput}>I Am Very Impressed!</button>
      </div>
    </div>
  )
}

export default SubmitEntry;

