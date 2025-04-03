import React, { useState } from 'react'
import styled  from 'styled-components'

const NumberSelector = () => {

  const numbers = [1,2,3,4,5,6];
  const [selected,setSelected] = useState(1);
  console.log(selected);
  return (
    <NumberSelectorContainer>
      <div className='flex'>
      {
        numbers.map((item, index)=>(
          <Box 
          isSelected = {
            item === selected
          }
          key={index}
          onClick={()=>setSelected(item)}
          >{item}</Box>
        ))
      }
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
    
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
  .flex{
    display: flex;
    gap: 12px;
  }
  p{
    font-size: 24px;
    font-weight: 600px;
  }
  
  
`


const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 300;
  cursor: pointer;
  background-color: ${(props) => props.isSelected ? "black":"white"};
  color:${(props) => !props.isSelected ? "black":"white"};
`; 