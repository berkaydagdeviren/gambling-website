import React from "react";
import styled from "styled-components";
const Number = () => {

    let Container = styled.div`
    width: 90px;
    height: 97px;
    border: black 1px solid;
    margin: 1px 1px 10px 0px;
    display: inline-block;
    
    `

    let NumberText = styled.div`
        text-align: center;
        color: white;
        font-size: 48px;
        line-height: 98px;
    `
    return (
        <Container style={{backgroundColor: 'red'}}>
            <NumberText>
                1
            </NumberText>
        </Container>
    )
}

export default Number;