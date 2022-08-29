import React, { useState } from "react";
import Roulette from "./roulette/roulette";
import styled from "styled-components";
import Header from "./header";
import '../App.css'

const GameContainer = () => {
    
    const [balance, setBalance] = useState(5000)
    let Container = styled.div `
        margin-top: 200px;
    `
    return (
        <div>
            <Header balance={balance} setBalance={setBalance} />
            <Container>
            <Roulette balance={balance} setBalance={setBalance} />
            </Container>
            
        </div>
    )
}

export default GameContainer;