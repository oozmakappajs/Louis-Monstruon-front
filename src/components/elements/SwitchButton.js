import React from 'react';
import '../../assets/styles/components/elements/SwitchButton.scss';

const SwitchButton = () => {
  return (
    <div className="SwitchButton">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider" />
      </label>
    </div>
  );
};

export default SwitchButton;
