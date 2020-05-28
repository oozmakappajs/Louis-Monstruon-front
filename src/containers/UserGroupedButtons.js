import React, { useState } from 'react';
import '../assets/styles/containers/UserGroupedButtons.scss';

const UserGroupedButtons = (props) => {
  const [ActiveLeft, useIsActiveLeft] = useState(props.left);
  const [ActiverRight, useIsActiveRight] = useState(props.right);

  const handleColorChangeRight = (state) => {
    if (state) {
      useIsActiveLeft(false);
      useIsActiveRight(state);
    }
  };
  const handleColorChangeLeft = (state) => {
    if (state) {
      useIsActiveLeft(state);
      useIsActiveRight(false);
    }
  };

  return (
    <div className="UserGroupedButtons">
      <button
        type="button"
        onClick={() => handleColorChangeLeft(true)}
        className={
          `UserGroupedButtons__item ${ActiveLeft && 'UserGroupedButtons__item--active'}`
        }
      >
        Favoritos
      </button>
      <button
        type="button"
        onClick={() => handleColorChangeRight(true)}
        className={`UserGroupedButtons__item ${ActiverRight && 'UserGroupedButtons__item--active'}`}
      >
        historial de compra
      </button>
    </div>
  );
};

export default UserGroupedButtons;
