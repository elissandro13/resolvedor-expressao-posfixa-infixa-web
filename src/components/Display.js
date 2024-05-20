import React, { forwardRef } from 'react';

const Display = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="display">
      {props.value}
    </div>
  );
});

export default Display;
