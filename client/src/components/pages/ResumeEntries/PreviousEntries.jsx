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
    <div>
      {savedBullets.length > 0 ? <h2>Great Wall of Awesomeness</h2> : null}
      {savedBullets.map((bulletPoint) => {
        return (
          <div className = 'wall-of-awesomeness-container'>
            <span>{bulletPoint}</span>
            <button value= {bulletPoint} onClick= {handleDelete}>Not that Impressive</button>
          </div>
        )
      })}
    </div>
  )
}

export default PreviousEntries;

