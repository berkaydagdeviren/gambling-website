import React from "react";
import styled from 'styled-components';
import Number from "./number";
import Line from "./line";
const Wheel = () => {
    
    let Container = styled.div `
    max-width: 1200px;
    height: 100px;
    border: solid black 1px;
    //display: flex;
    //align-items: center;
    //justify-content: center;
    overflow: hidden;
    white-space: nowrap;
    `
    return (
        <Container>
            <Line />
            <Number />
            <Number />
            <Number />
            <Number />
            <Number />
            
        </Container