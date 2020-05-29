/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { BrightnessLowOutlined } from '@material-ui/icons';

import '../../assets/styles/components/elements/SwitchButton.scss';

const SwitchButton = (props) => {
  const { selected, action, element } = props;

  useEffect(() => {
    const input = document.getElementById(element);

    if (selected === 'dark' || !selected) {
      input.classList.add('slider_checked');
    } else {
      input.classList.remove('slider_checked');
    }
  }, [selected]);

  return (
    <>
      {
        props.theme ? (
          <div className="SwitchButton">
            <label className="switch">
              <input type="checkbox" onClick={action} id="checked-theme" />
              <span className="slider slider__theme"><BrightnessLowOutlined /></span>
            </label>
          </div>
        ) :
          (
            <div className="SwitchButton">
              <label className="switch">
                <input type="checkbox" onClick={action} id="checked-notifications" />
                <span className="slider slider__off">On</span>
              </label>
            </div>
          )
      }
    </>
  );
};

export default SwitchButton;
