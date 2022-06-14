import React from 'react';
import { useState, createRef } from 'react';

import './Cell.scss';

const useRefDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 });
  React.useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      const boundingRect = current.getBoundingClientRect();
      const { width, height } = boundingRect;
      setDimensions({ width: Math.round(width), height: Math.round(height) });
    }
  }, [ref]);
  return dimensions;
};

function Cell(props) {
  const divRef = createRef();
  const dimensions = useRefDimensions(divRef);

  return (
    <div data-testid={`cell-item-${props.id}`} ref={divRef} className='item'>
      <p>{dimensions.width}</p>
      <p>X</p>
      <p>{dimensions.height}</p>
    </div>
  );
}

export default Cell;
