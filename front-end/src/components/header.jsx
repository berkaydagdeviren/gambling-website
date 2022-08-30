import React from "react";
import styled from "styled-components";
import logo from '../images/logo.gif'
const Container = styled.div`
    background-color: black;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Logo = styled.div `
@media screen and (max-width: 600px) {
    display: none;
  }
  `
const Button = styled.button`

background-color: black; 
color: white; 
font-size: 2rem; 
border: 3px solid white;
letter-spacing: 3px;
&:hover{
    color: black;
    background-color: white;
    border: 1px solid white;
}
`

const Header = ({balance, setBalance}) => {
    
    return (
        <Container>
            <Logo>
           <img src={logo} style={{maxWidth: '1000px', flex: '1', maxHeight:'100px'}} alt="" />
            </Logo>
           <Button onClick={() => {setBalance(prevState => prevState + 5000)}}>
           Add Balance +5000
           </Button>
           <h1 style={{color: 'white'}}>
            Balance: {balance}
           </h1>
        </Container>
    )
}

export default Header;