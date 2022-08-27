import React from "react";
import styled from "styled-components";
import Wheel from "./wheel";

const Roulette = () => {

    let Title = styled.h1`
        font-size: 3rem;
        letter-spacing: 1rem;
    `
    return(
            <center>
            <Title>ROULETTE</Title>
            <Wheel/>
            </center>
      
    )
}

export default Roulette;