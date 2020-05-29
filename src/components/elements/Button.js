/* eslint-disable react/button-has-type */
import React from 'react';

import GoogleText from './GoogleText';

import '../../assets/styles/components/elements/Button.scss';

const Button = (props) => {
  return (
    <>
      {
        props.name === 'blueBase' && (
          <button type={props.buttonType} className="Button Button--base-blue" onClick={props.action}>
            {props.children}
          </button>
        )
      }
      {
        props.name === 'purpleBase' && (
          <button type={props.buttonType} className="Button Button--base-purple" onClick={props.action}>
            {props.children}
          </button>
        )
      }
      {
        props.name === 'google' && (
          <button type={props.buttonType} className="Button Button--image" onClick={props.action}>
            {props.children}
            <GoogleText />
          </button>
        )
      }
      {
        props.name === 'success' && (
          <button type={props.buttonType} className="Button Button--success" onClick={props.action}>
            {props.children}
          </button>
        )
      }
      {
        props.name === 'error' && (
          <button type={props.buttonType} className="Button Button--error" onClick={props.action}>
            {props.children}
          </button>
        )
      }
      {
        props.name === 'blue' && (
          <button type={props.buttonType} className="Button Button--blue" onClick={props.action}>
            {props.children}
          </button>
        )
      }
      {
        props.name === 'gradient' && (
          <button type={props.buttonType} className="Button Button--gradient" onClick={props.action}>
            {props.children}
          </button>
        )
      }
    </>
  );
};

export default Button;
