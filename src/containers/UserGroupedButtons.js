<<<<<<< HEAD
import React from 'react';

import '../assets/styles/containers/UserGroupedButtons.scss';

const UserGroupedButtons = (props) => {
  const { active, handleTabActive } = props;

  return (
    <div className="UserGroupedButtons">
      <button type="button" className={`UserGroupedButtons__item ${!active && 'UserGroupedButtons__item-active'}`} onClick={handleTabActive}>
        Favoritos
      </button>
      <button type="button" className={`UserGroupedButtons__item ${active && 'UserGroupedButtons__item-active'}`} onClick={handleTabActive}>
=======
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
>>>>>>> 9df0e17554d5353a783b26849be9efa53e8acadf
        historial de compra
      </button>
    </div>
  );
};

export default UserGroupedButtons;
