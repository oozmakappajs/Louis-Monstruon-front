import React from 'react';
import '../assets/styles/containers/UserGroupedButtons.scss';

const UserGroupedButtons = () => {
  return (
    <div className="UserGroupedButtons">
      <div className="UserGroupedButtons__item">
        Favoritos
      </div>
      <div className="UserGroupedButtons__item">
        historial de compra
      </div>
    </div>
  );
};

export default UserGroupedButtons;
