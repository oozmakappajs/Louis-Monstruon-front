/* eslint-disable react/button-has-type */
import React from 'react';
import '../../assets/styles/components/elements/Button.scss';
import GoogleText from './GoogleText';

const Button = (props) => {
  return (
    <>
      {
        props.name === 'blueBase' && (
          <button type={props.buttonType} className="Button Button--base-blue">
            {props.children}
          </button>
        )
      }
      {
        props.name === 'purpleBase' && (
          <button type={props.buttonType} className="Button Button--base-purple">
            {props.children}
          </button>
        )
      }
      {
        props.name === 'google' && (
          <button type={props.buttonType} className="Button Button--image">
            {props.children}
            <GoogleText />
          </button>
        )
      }
      {
        props.name === 'success' && (
          <button type={props.buttonType} className="Button Button--success">
            {props.children}
          </button>
        )
      }
      {
        props.name === 'error' && (
          <button type={props.buttonType} className="Button Button--error">
            {props.children}
          </button>
        )
      }
      {
        props.name === 'blue' && (
          <button type={props.buttonType} className="Button Button--blue">
            {props.children}
          </button>
        )
      }
      {
        props.name === 'gradient' && (
          <button type={props.buttonType} className="Button Button--gradient">
            {props.children}
          </button>
        )
      }
    </>
  );
};

export default Button;
