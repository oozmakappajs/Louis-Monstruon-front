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
        historial de compra
      </button>
    </div>
  );
};

export default UserGroupedButtons;
