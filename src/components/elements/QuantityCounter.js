import React from 'react';
import { RemoveCircleOutline, AddCircle } from '@material-ui/icons';
import '../../assets/styles/components/elements/QuantityCounter.scss';

const QuantityCounter = () => {
  return (
    <div className="QuantityCounter">
      <button type="button">
        <RemoveCircleOutline className="QuantityCounter__icons" />
      </button>
      <p className="QuantityCounter__number">1</p>
      <button type="button" className="QuantityCounter__icons">
        <AddCircle />
      </button>
    </div>
  );
};

export default QuantityCounter;
