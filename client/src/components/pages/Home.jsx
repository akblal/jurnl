import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Home ({ headerDisplay, setHeaderDisplay }) {
  const scenicURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVroKto_uL60J8is-3GUIzDWbcyqe-3aF-LwTDnxCmD1Id1YFTfCdLN7x85Jwx1fNXRAU&usqp=CAU';
  const kanyeURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgb6b4JIa7gG0djbM_QmxLQa4n1nCyAPfcWw&usqp=CAU';
  const funnyURL = 'https://www.letseatcake.com/wp-content/uploads/2021/07/Funny-Memes-44.jpg';

  const kanyeName = 'Ye';

  const [username, setUsernamce] = useState('Brandon Hsu');
  const [inspirationalAuthor, setInspirationalAuthor] = useState('');
  const [inspirationalQuote, setInspirationalQuote] = useState('');
  const [kanyeQuote, setKanyeQuote] = useState('');
  const [joke, setJoke] = useState('');

  const handleClickInspirational = (event) => {
    setHeaderDisplay(1);

    axios.get("https://type.fit/api/quotes")
      .then((response) => {
        const randomNumber = Math.floor(Math.random() * (response.data.length - 1))
        const quoteOfDay = response.data[randomNumber]

        setInspirationalQuote(quoteOfDay.text)
        if (quoteOfDay.author) {
          setInspirationalAuthor(quoteOfDay.author);
        } else {
          setInspirationalAuthor('Unknown')
        }
      })
    console.log('did i click twice?')
  }

  const handleClickKanye = (event) => {
    setHeaderDisplay(2);
    axios.get('https://api.kanye.rest/')
      .then(result => setKanyeQuote(result.data.quote))
    console.log('did i click twice?')
  }

  const handleClickFunny = (event) => {
    setHeaderDisplay(3);
    axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single')
      .then(result => setJoke(result.data.joke))
    console.log('did i click twice?')
  }


  let displayOption;
  switch (headerDisplay) {
    case 0:
      displayOption = <h1 className= 'main-header-style'>Welcome, {username}</h1>
      console.log('home')
      break;
    case 1:
      displayOption = <h1 className= 'main-header-style'>"{inspirationalQuote}" - {inspirationalAuthor}</h1>
      console.log('inspirational')
      break;
    case 2:
      displayOption = <h1 className= 'main-header-style'>"{kanyeQuote}" - {kanyeName}</h1>
      console.log('kanye')
      break;
    case 3:
      displayOption = <h1 className= 'main-header-style'>{joke}</h1>
      console.log('joke')
      break;
  }


  return (
    <div>
      <div className= 'main-header-container'>
        {displayOption}
      </div>
      <div className= 'picture-container'>
        <img src={scenicURL} alt= 'Scenic/Inspirational' onClick= {handleClickInspirational} className= 'home-pictures-quotes'/>
        <img src={kanyeURL} alt= 'Kanye' onClick={handleClickKanye} className= 'home-pictures-quotes'/>
        <img src={funnyURL} alt= 'Funny' onClick={handleClickFunny} className= 'home-pictures-quotes'/>
      </div>
    </div>
  )
}

export default Home;