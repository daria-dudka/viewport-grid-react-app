import React, { useState } from 'react';
import './Sidebar.scss';

function Sidebar(props) {
  const [isOpen, setIsOpen] = useState(true);
  const rows = React.createRef();
  const columns = React.createRef();
  const toggle = () => setIsOpen(!isOpen);

  function checkValue(event) {
    let key = event.key;
    let value = event.target.value;
    let new_value = Number(value + key);
    let max = Number(event.target.max);
    let min = Number(event.target.min);
    if (new_value > max || new_value < min) {
      event.preventDefault();
    }
  }

  function getValueHandler() {
    const rowsInputValue = Number(rows.current.value);
    const columnsInputValue = Number(columns.current.value);
    props.getInputValue(rowsInputValue, columnsInputValue);
  }

  return (
    <div
      data-testid='sidebar'
      style={{ width: isOpen ? '220px' : '30px' }}
      className='sidebar'
    >
      <button
        onClick={toggle}
        className='burger'
        style={{
          backgroundColor: isOpen ? 'rgba(12,65,133,0.3)' : 'transparent',
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        data-testid='inputs-wrapper'
        className='inputs'
        style={{ display: isOpen ? 'flex' : 'none' }}
      >
        <label htmlFor='rows'>Rows</label>
        <input
          data-testid='input'
          ref={rows}
          onInput={getValueHandler}
          onKeyDown={checkValue}
          type='number'
          min='1'
          max='10'
          defaultValue={2}
        ></input>
        <label htmlFor='columns'>Columns</label>
        <input
          data-testid='input'
          ref={columns}
          onInput={getValueHandler}
          onKeyDown={checkValue}
          type='number'
          min='1'
          max='10'
          defaultValue={2}
        ></input>
      </div>
    </div>
  );
}

export default Sidebar;
