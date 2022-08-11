import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PreviousEntries ({ savedBullets, setSavedBullets }) {

  useEffect(() => {
    axios.get ('/previousBullets')
      .then ((results) => setSavedBullets(results.data))
      .catch ((err) => console.log(err))
    }, [])

  const handleDelete = (event) => {
    axios.delete('/deleteBullet', { data: {
      entry: event.target.value
    }})
      .then (() => {
        axios.get('/previousBullets')
          .then ((results) => setSavedBullets(results.data))
          .catch ((err) => console.log(err))
      })
  }

  return (
    <div className= 'wall-of-awesomeness-overall-container'>
      {savedBullets.length > 0 ? <h1>Great Wall of Awesomeness</h1> : null}
      {savedBullets.map((bulletPoint) => {
        return (
          <div className = 'wall-of-awesomeness-container'>
            <h3>{bulletPoint}</h3>
            <button value= {bulletPoint} onClick= {handleDelete} className= 'not-impressive-button'>Not that Impressive</button>
          </div>
        )
      })}
    </div>
  )
}

export default PreviousEntries;

