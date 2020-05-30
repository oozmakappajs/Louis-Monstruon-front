/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  name: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  action: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
