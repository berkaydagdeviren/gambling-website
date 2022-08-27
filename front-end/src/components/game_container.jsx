import React from "react";
import Roulette from "./roulette/roulette";
import styled from "styled-components";

const GameContainer = () => {
    let Container = styled.div `
        margin-top: 200px;
    `
    return (
        <div>
            <Container>
            <Roulette />
            </Container>
        </div>
    )
}

export default GameContainer;