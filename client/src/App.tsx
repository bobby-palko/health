import React from 'react';
import Greeting from './components/Greeting';
import WeightChart from './components/WeightChart';
import GlobalStyle from './GlobalStyle';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Greeting />
      <WeightChart />
    </>
  );
}

export default App;
