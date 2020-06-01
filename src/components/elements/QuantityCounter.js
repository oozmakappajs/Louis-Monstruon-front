import React from 'react';
import swal from 'sweetalert';
import { RemoveCircleOutline, AddCircle } from '@material-ui/icons';

import '../../assets/styles/components/elements/QuantityCounter.scss';

const QuantityCounter = (props) => {
  const { action, count, alertCount } = props;

  return (
    <div className="QuantityCounter">
      <button type="button" aria-label="Remove one" onClick={() => { count === 1 ? action(count) : action(count - 1); (count === 1 && alertCount) && swal('You can\'t buy 0 items', 'You can\'t select less than one item', 'error'); }}>
        <RemoveCircleOutline className="QuantityCounter__icons" />
      </button>
      <p className="QuantityCounter__number">{count}</p>
      <button type="button" aria-label="Add one" onClick={() => action(count + 1)} className="QuantityCounter__icons">
        <AddCircle />
      </button>
    </div>
  );
};

export default QuantityCounter;
