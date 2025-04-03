import React, { useState } from 'react'
import styled  from 'styled-components'

const NumberSelector = () => {

  const numbers = [1,2,3,4,5,6];
  const [selected,setSelected] = useState(1);
  console.log(selected);
  return (
    <div className=''>
      {
        numbers.map((item, index)=>(
          <Box key={index}
          onClick={()=>setSelected(item)}
          >{item}</Box>
        ))
      }
    </div>
  )
}

export default NumberSelector

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 300;
`;