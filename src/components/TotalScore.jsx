import styled from "styled-components"

import React from "react";

const TotalScore = () => {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;


const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
/* background-color: red; */
h1{
    font-size: 100px;
    line-height: 100px;
}
p{
    font-size: 24px;
    font-weight: 400px;
}

`
