/* eslint-disable react/button-has-type */
import React from 'react';

import GoogleText from './GoogleText';

import '../../assets/styles/components/elements/Button.scss';

const Button = (props) => {
  return (
    <button type={props.buttonType} className={`Button Button--${props.name}`} onClick={props.action}>
      {props.children}
      {
        props.name === 'image' &&
        <GoogleText />
      }
    </button>
  );
};

export default Button;
