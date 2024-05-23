import React, { forwardRef } from 'react';

const Display = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="display" data-testid="display">
      {props.value}
    </div>
  );
});

export default Display;
