import React from 'react';
import './Grid.scss';
import Cell from './Cell/Cell';

export default function Grid(props) {
  let numColumns = props.columns;
  let numRows = props.rows;
  const numCells = numColumns * numRows;
  const cells = [];

  for (let i = 1; i <= numCells; i++) {
    const cell = {};
    cells.push(cell);
  }

  let cellsElements = cells.map((cell, index) => (
    <Cell key={index} id={index} />
  ));

  return (
    <div
      data-testid='grid-container'
      className='container'
      style={{
        gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
        gridTemplateRows: `repeat(${numRows}, 1fr)`,
      }}
    >
      {cellsElements}
    </div>
  );
}
