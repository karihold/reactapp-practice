import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({lakes}) => (
  <ul>
  {lakes.map(lake =>
      <li key={lake.id}> Trailhead: {lake.trailhead}</li>
  )}
  </ul>
)

export default App;
