import React, { useState } from "react";
import styled from "styled-components";


const BetTable = ({winColor, giveBet, handleGivePrize, balance, setBalance}) => {

    const [giveBetLocal, setGiveBetLocal] = useState(true)

    const Grid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 15px;
grid-row-gap: 0px;
    `

    const givePrize = () => {
        
        if (winColor === 'red') 
        {  
            setGiveBetLocal(false)
            setBalance((prev) => prev + 500)
        }
        else{ 
            setGiveBetLocal(false) 
            setBalance((prev) => prev - 500)
        }
        
    }
    if (!giveBet && !giveBetLocal)
    setGiveBetLocal(true)
    if (giveBet && giveBetLocal)
    {
        console.log(giveBet, giveBetLocal)
        givePrize()
        handleGivePrize()
    }
    
    return (
        <Grid>
            <div>
                <h1 style={{backgroundColor: 'red', color: 'white', borderRadius: '25%', textAlign: 'center'}}>Red</h1>
            </div>
            <div>
                <h1 style={{backgroundColor: 'green', color: 'white', borderRadius: '25%', textAlign: 'center'}}>Green</h1>
            </div>
            <div>
                <h1 style={{backgroundColor: 'black', color: 'white', borderRadius: '25%', textAlign: 'center'}}>
                    Black
                </h1>
            </div>
            <div>
                <input type="text" />
            </div>
        </Grid>
    )
}

export default BetTable;