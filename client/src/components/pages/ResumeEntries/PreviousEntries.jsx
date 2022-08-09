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
      <h2>Previous Entries</h2>
      {savedBullets.map((bulletPoint) => {
        return (
          <div>
            <h1>{bulletPoint}</h1>
            <button value= {bulletPoint} onClick= {handleDelete}>click me!</button>
          </div>
        )
      })}
    </div>
  )
}

export default PreviousEntries;

