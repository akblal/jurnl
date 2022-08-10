import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home () {
  const scenicURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVroKto_uL60J8is-3GUIzDWbcyqe-3aF-LwTDnxCmD1Id1YFTfCdLN7x85Jwx1fNXRAU&usqp=CAU';
  const kanyeURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgb6b4JIa7gG0djbM_QmxLQa4n1nCyAPfcWw&usqp=CAU';
  const funnyURL = 'https://www.letseatcake.com/wp-content/uploads/2021/07/Funny-Memes-44.jpg';

  const [quoteAuthor, setQuoteAuthor] = useState('');
  const [quoteBody, setQuoteBody] = useState('')
  const [headerDisplay, setHeaderDisplay] = useState(0);

  const handleClickInspirational = (event) => {
    console.log('inspirational')
  }

  const handleClickKanye = (event) => {
    console.log('Kanye')
  }

  const handleClickFunny = (event) => {
    console.log('Funny')
  }

  useEffect (()=> {
    axios.get("https://type.fit/api/quotes")
      .then((response) => {
        const randomNumber = Math.floor(Math.random() * (response.data.length - 1))
        const quoteOfDay = response.data[randomNumber]

        setQuoteBody(quoteOfDay.text)
        if (quoteOfDay.author) {
          setQuoteAuthor(quoteOfDay.author);
        } else {
          setQuoteAuthor('Unknown')
        }
      })
  }, [])

  return (
    <div>
      <h1>"{quoteBody}" - {quoteAuthor}</h1>
      <div className= 'picture-container'>
        <img src={scenicURL} alt= 'Scenic/Inspirational' onClick= {handleClickInspirational} className= 'home-pictures-quotes'/>
        <img src={kanyeURL} alt= 'Kanye' onClick={handleClickKanye} className= 'home-pictures-quotes'/>
        <img src={funnyURL} alt= 'Funny' onClick={handleClickFunny} className= 'home-pictures-quotes'/>
      </div>
    </div>
  )
}

export default Home;