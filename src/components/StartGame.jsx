import React from 'react'
import styled from 'styled-components';

const StartGame = () => {
  return (
    <Container>
      <div>
      <img 
        src='/images/dices.png'
      />
      </div>
      <div className='content'>
        <h1>
          Dice Gam
        </h1>
        <Button>
          Play Now
        </Button>
      </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;


  .content {
    h1{
      font-size: 96px;
    }
  }

`
const Button = styled.button`
  /* display: flex;
  flex-direction: column; */
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  width: 200px;
  height: 44px;
  background: #000000;
  border-radius: 5px;
  color:#ffffff;
  cursor: pointer;
  min-width: 220px;
  font-size: 16px;
  border: 1px solid transparent;
  &:hover{
    background-color: #522929;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`