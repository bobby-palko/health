import React from 'react';
import styled from 'styled-components';

const StyledGreeting = styled.div`
  text-align: center;
`;

function Greeting(): JSX.Element {
  return (
    <StyledGreeting>
      <h1>You look fabulous today! :)</h1>
    </StyledGreeting>
  );
}

export default Greeting;
