import React from 'react';
import '../../assets/styles/elements/Range.scss';

const Range = () => {
  return (
    <div>
      <input id="typeinp" type="range" min="0" max="5" defaultValue="3" step="1" />
    </div>
  );
};

export default Range;
