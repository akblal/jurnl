import React, { useState } from 'react';
import axios from 'axios';

function SubmitEntry ({ savedBullets, setSavedBullets }) {

  const [bulletPoint, setBulletPoint] = useState('');
  const [validBullet, setValidBullet] = useState(false);
  const [findSynonym, setFindSynonym] = useState('');
  const [validSynonym, setValidSynonym] = useState(false);
  const [mostSimilar, setMostSimilar] = useState('');
  const [synonym, setSynonym] = useState('');
  const [synonymButtonClick, setSynonymButtonClick] = useState(0);
  const [documentNameResume, setDocumentNameResume] = useState('');
  const [clickedSave, setClickedSave] = useState(true);

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
    axios.post ('/addBullet', {
        bulletPoint: bulletPoint
      }
    )
      .then (() =>
        axios.get('/previousBullets')
          .then ((results) => {
            setSavedBullets(results.data)
          })
          .catch ((err) => console.log(err))
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
    setSynonymButtonClick(1);
    axios.get(`https://words.bighugelabs.com/api/2/1d9f92b5eeece63d9767999633bd7f59/${findSynonym}/json`)
      .then ((results) => {
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

  const handleFileName = (event) => {
    setDocumentNameResume(event.target.value)
  }

  const handleSave = (event) => {
    if (documentNameResume) {
      setClickedSave(false);
      axios.post('/saveResumeFile', {
        documentName: documentNameResume,
        bulletPoints: savedBullets,
      })
        .then(() => {
          axios.delete('/deleteAllBullets')
        })
        .then(() => {
          setSavedBullets([])
        })
        .catch((err) => console.log(err))
    } else {
      alert ('Please type in name of document before saving it!')
    }
  }

  const handleNewBullets = (event) => {
    setClickedSave(true);
  }

  return (
    <div className= 'overall-resume-container'>
      <div className= 'resume-thesaurus-input'>
        <h2 className= 'submit-entry-title'>List Your Spectacular Achievement</h2>
        <div className= 'submit-entry-container'>
          <input value= {bulletPoint} onChange= {handleBulletPoint} placeholder= 'Awesome Idea Here' size="50" className= 'resume-text-field'></input>
          <button onClick= {handleSubmitPoint} disabled = {!validBullet} className='impressed-button'>I Am Very Impressed!</button>
        </div>
        <h2 className= "submit-synonym-title">Can't Think Of The Action Word? </h2>
        <div className= 'thesaurus-entry-container'>
          <input value= {findSynonym} onChange= {handleFindSynonym} placeholder= 'Present Tense Only!' size="30" className= 'synonym-text-field'></input>
          <button onClick= {handleSubmitSynonym} disabled = {!validSynonym} className= 'search-synonym-button'>Leggo!</button>
        </div>
        <div className= 'similar-and-synonym-list'>
          {(mostSimilar.length > 0) ?
            <div>
              <h4 className= 'synonym-results-top-line'>How About These? </h4>
              <h4 className= 'synonym-results'>{mostSimilar}</h4>
            </div>
            : null}
            {(mostSimilar.length === 0 && synonymButtonClick > 0) ?
              <div>
                <h4 className= 'synonym-results-top-line'>Sorry, there were no results... </h4>
              </div>
              : null}
        </div>
      </div>
      <div className= 'save-resume-bullet-container'>
        <input value= {documentNameResume} onChange= {handleFileName} placeholder= 'Save all Bullets into Document' size= '50' className= 'save-resume-text-field'></input>
        {clickedSave ? <button onClick={handleSave} className= 'save-resume-file'>Save into File!</button> :
        <button onClick= {handleNewBullets} className= 'save-resume-file'>Load New Wall</button>}
      </div>
    </div>
  )
}

export default SubmitEntry;
