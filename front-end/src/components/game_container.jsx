import React from "react";
import Roulette from "./roulette/roulette";
import styled from "styled-components";
import Header from "./header";
import '../App.css'

const GameContainer = () => {
    
    let Container = styled.div `
        margin-top: 200px;
    `
    return (
        <div>
            <Header />
            <Container>
            <Roulette />
            </Container>
        </div>
    )
}

export default GameContainer;