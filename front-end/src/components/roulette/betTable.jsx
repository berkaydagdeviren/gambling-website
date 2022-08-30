import React, { useState } from "react";
import styled from "styled-components";

function BetArea(props) {
    return (
      <label>
       <input style={{maxWidth: '500px', textAlign:'center', fontSize:'3rem'}}
        autoFocus value={props.bet} onChange={props.handleChange} />
      </label>
    );
  }

const BetTable = ({winColor, giveBet, handleGivePrize, balance, setBalance}) => {

    const [giveBetLocal, setGiveBetLocal] = useState(true)
    const [bet, setBet] = useState(null)
    const [betOnColor, setBetOnColor] = useState('')
    const Grid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 15px;
grid-row-gap: 1rem;
margin-top: 1.5rem;
padding: 1rem;
    `

    const givePrize = (betColor, bet) => {
        
        if (betColor === winColor && (winColor === 'red' || winColor === 'black')) 
        {  
            setGiveBetLocal(false)
            setBalance((prev) => prev + bet)
        }
        else if (betColor === winColor && winColor === 'green') 
        {  
            setGiveBetLocal(false)
            setBalance((prev) => prev + bet * 14)
        }
        else{ 
            setGiveBetLocal(false) 
            setBalance((prev) => prev - bet)
        }
        
    }
    if (!giveBet && !giveBetLocal)
    setGiveBetLocal(true)
    if (giveBet && giveBetLocal)
    {
        console.log(giveBet, giveBetLocal)
        givePrize(betOnColor, bet)
        handleGivePrize()
    }
    const handleBetChange = event => {
        setBet(Number(event.target.value));
      };
    
    return (
        <Grid>
                <button style={{cursor: 'crosshair'}} onClick={() => {setBetOnColor('red')}}>
            <div>
                <h1 style={{backgroundColor: 'red', color: 'white', borderRadius: '25%', textAlign: 'center'}}>
                    Red
                    </h1>
            </div>
                </button>
                <button style={{cursor: 'crosshair'}} onClick={() => {setBetOnColor('green')}}>
            <div>
                <h1 style={{backgroundColor: 'green', color: 'white', borderRadius: '25%', textAlign: 'center'}}>Green</h1>
            </div>
                </button>
                <button style={{cursor: 'crosshair'}} onClick={() => {setBetOnColor('black')}}>
            <div>
                <h1 style={{backgroundColor: 'black', color: 'white', borderRadius: '25%', textAlign: 'center'}}>Black</h1>
            </div>
                </button>
            <div style={{gridColumn: 'span 3', }}>
                <BetArea
          bet={bet}
          handleChange={handleBetChange}
        />
        {console.log(bet)}
            </div>
        </Grid>
    )
}

export default BetTable;