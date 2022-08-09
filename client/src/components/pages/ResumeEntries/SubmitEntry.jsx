import React, { useState } from 'react';

function SubmitEntry () {

  const [bulletPoint, setBulletPoint] = useState('');
  const [validBullet, setValidBullet] = useState(false);
  const [findSynonym, setFindSynonym] = useState('');
  const [validSynonym, setValidSynonym] = useState(false);

  const handleBulletPoint = (event) => {
    setBulletPoint(event.target.value);
    if (event.target.value.length > 0) {
      setValidBullet(true);
    } else {
      setValidBullet(false);
    }
  }

  const handleSubmitPoint = (event) => {
    event.preventDefault();
    console.log (bulletPoint, 'point to be added in resume');
  }

  const handleFindSynonym = (event) => {
    setFindSynonym(event.target.value);
    if (event.target.value.length > 0) {
      setValidSynonym(true);
    } else {
      setValidSynonym(false);
    }
  }

  const handleSubmitSynonym = (event) => {
    event.preventDefault();
    console.log (findSynonym, 'synonym to look for')
  }

  return (
    <div>
      <h2 className= 'submit-entry-title'>Spectacular Achievement</h2>
      <div className= 'submit-entry-container'>
        <input value= {bulletPoint} onChange= {handleBulletPoint} placeholder= 'Awesome Idea Here' size="50" className= 'resume-text-field'></input>
        <button onClick= {handleSubmitPoint} disabled = {!validBullet}>I Am Very Impressed!</button>
      </div>
      <h2 className= "submit-synonym-title">Word Lookup: </h2>
      <div className = 'thesaurus-entry-container'>
        <input value= {findSynonym} onChange= {handleFindSynonym} placeholder= 'Find Synonym' size="30" className= 'synonym-text-field'></input>
        <button onClick= {handleSubmitSynonym} disabled = {!validSynonym}>Find Synonym!</button>
      </div>
    </div>
  )
}

export default SubmitEntry;

