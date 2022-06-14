import React from 'react';
import { useState } from 'react';
import './App.scss';
import Grid from './components/Grid/Grid';
import Sidebar from './components/Sidebar/Sidebar';

function App(): JSX.Element {
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);

  function getInputValue(numRows, numColumns) {
    setRows(numRows);
    setColumns(numColumns);
  }

  return (
    <div data-testid='app' className='App'>
      <Sidebar getInputValue={getInputValue} />
      <Grid rows={rows} columns={columns} />
    </div>
  );
}

export default App;
