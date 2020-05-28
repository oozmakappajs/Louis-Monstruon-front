/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NightsStay } from '@material-ui/icons';
import '../../assets/styles/components/elements/SwitchButton.scss';

const SwitchButton = (props) => {
  return (
    <>
      {
        props.theme ? (
          <div className="SwitchButton">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider slider__icon">
                <NightsStay />
              </span>
            </label>
          </div>
        ) : (
          <div className="SwitchButton">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider slider__off">on</span>
            </label>
          </div>
        )
      }
    </>
  );
};

export default SwitchButton;
