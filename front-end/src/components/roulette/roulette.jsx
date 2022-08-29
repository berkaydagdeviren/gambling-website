import React, { useState } from  'react';
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';
import BetTable from './betTable';
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const prizes = [
  {
    image: 'https://i.ibb.co/sFB4rNy/resized-Image.png',
    color: 'green'
  },
  {
    image: 'https://i.ibb.co/bzK52sV/1.png',
    color: 'black'
  },
  {
    image: 'https://i.ibb.co/s5fjjS0/2.png',
    color: 'red'
  },
  {
    image: 'https://i.ibb.co/j4XsrsV/3.png',
    color: 'black'
  },
  {
    image: 'https://i.ibb.co/kxf6SGn/4.png',
    color: 'red'
  },
  {
    image: 'https://i.ibb.co/3dfFWDD/5.png',
    color: 'black'
  },
  {
    image: 'https://i.ibb.co/6wDg1mc/6.png',
    color: 'red'
  },
  {
    image: 'https://i.ibb.co/ZcWDKcT/7.png',
    color: 'black'
  },
  {
    image: 'https://i.ibb.co/VjXQpHL/8.png',
    color: 'red'
  },
  {
    image: 'https://i.ibb.co/bFTnYJW/9.png',
    color: 'black'
  },
  {
    image: 'https://i.ibb.co/RP9MBWv/10.png',
    color: 'red'
  },
  {
    image: 'https://i.ibb.co/k82LcZQ/11.png',
    color: 'black'
  },
  {
    image: 'https://i.ibb.co/Rcb0jmW/12.png',
    color: 'red'
  },
  {
    image: 'https://i.ibb.co/cFf5MDY/13.png',
    color: 'black'
  },
  {
    image: 'https://i.ibb.co/Qmv8Qhj/14.png',
    color: 'red'
  },
  {
    image: 'https://i.ibb.co/WVFRdSk/15.png',
    color: 'black'
  },
  {
    image: 'https://i.ibb.co/BPsxyLh/16.png',
    color: 'red'
  },
];

const reproducedPrizeList = [
  ...prizes,
  ...prizes,
  ...prizes,
  ...prizes
];

const generateId = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2);

const prizeList = reproducedPrizeList.map((prize) => ({
  ...prize,
  id: generateId(),
}));

const Roulette = () => {
  const [start, setStart] = useState(false);
  const [counter, setCounter] = useState(10);
  const [winColor, setWinColor] = useState(null)
  const [givePrize, setGivePrize] = useState(false)
  let prizeIndex = getRandomInt(prizeList.length);
  if (prizeIndex <= 20)
    prizeIndex += 30
  else if (prizeIndex >= prizeList.length - 10)
    prizeIndex -= 10
   React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      console.log(counter)
      if (counter === 0)
      {
      setStart(true)
      }
    return () => {
        clearInterval(timer);
    }
  }, [counter]);

  const handlePrizeDefined = async () => {
    console.log(`You have won ${prizeList[prizeIndex]['color']} ${prizeList.length} ${prizeIndex}`);
    setWinColor(prizeList[prizeIndex]['color'])
    setGivePrize(true)
    setStart(false);
    setCounter(15)
    //setGivePrize(false)
  };

  const handleGivePrize = () => {
    setGivePrize(false)
  }

  return (
    <>
     <h1>   
     Till next roll: {counter}
     </h1> 
      
      <RoulettePro
        prizes={prizeList}
        prizeIndex={prizeIndex}
        start={start}
        onPrizeDefined={handlePrizeDefined}
        spinningTime={10}
      />
      <BetTable winColor={winColor} giveBet={givePrize} handleGivePrize={handleGivePrize} />
    </>
  );
};

export default Roulette;