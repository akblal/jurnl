import React, { useState } from 'react';
import axios from 'axios';

function SubmitEntry () {

  const [bulletPoint, setBulletPoint] = useState('');
  const [validBullet, setValidBullet] = useState(false);
  const [findSynonym, setFindSynonym] = useState('');
  const [validSynonym, setValidSynonym] = useState(false);
  const [mostSimilar, setMostSimilar] = useState('');
  const [synonym, setSynonym] = useState('');

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
    axios.post ('/jurnl', {
        bulletPoint: bulletPoint
      }
    )
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
    axios.get(`https://words.bighugelabs.com/api/2/1d9f92b5eeece63d9767999633bd7f59/${findSynonym}/json`)
      .then ((results) => {
        console.log (results.data.verb)
        let arraySynonym = results.data.verb.syn;
        if (arraySynonym.length > 0) {
          if (arraySynonym.length > 5) {
            let reduceBy = (arraySynonym.length - 5) * -1;
            arraySynonym.splice(reduceBy);
          }
          let listSynonym = arraySynonym.join(', ');
          setMostSimilar(listSynonym)
        }
      })
      .catch ((err) => setMostSimilar(''))
  }

  return (
    <div>
      <h2 className= 'submit-entry-title'>List Your Spectacular Achievement</h2>
      <div className= 'submit-entry-container'>
        <input value= {bulletPoint} onChange= {handleBulletPoint} placeholder= 'Awesome Idea Here' size="50" className= 'resume-text-field'></input>
        <button onClick= {handleSubmitPoint} disabled = {!validBullet}>I Am Very Impressed!</button>
      </div>
      <h2 className= "submit-synonym-title">Can't Think Of The Action Word? </h2>
      <div className= 'thesaurus-entry-container'>
        <input value= {findSynonym} onChange= {handleFindSynonym} placeholder= 'Present Tense Only!' size="30" className= 'synonym-text-field'></input>
        <button onClick= {handleSubmitSynonym} disabled = {!validSynonym}>Leggo!</button>
        {console.log (mostSimilar, 'here are the words')}
      </div>
      <div className= 'similar-and-synonym-list'>
        {mostSimilar.length > 0 ?
          <div>
            <h1 className= 'most-similar-title'>How About These? : </h1>
            <h1>{mostSimilar}</h1>
          </div>
          : <h1>Sorry, no synonyms found...</h1>}
      </div>
    </div>
  )
}

export default SubmitEntry;

