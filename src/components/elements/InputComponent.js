import React from 'react';
import PropTypes from 'prop-types';

import '../../assets/styles/components/elements/Input.scss';

const InputComponent = (props) => (
  <div className="InputComponent">
    <input type={props.type} placeholder={props.title} name={props.name} className="InputComponent__input" onChange={props.action} required={props.required} />
    <div className="InputComponent__input--border" />
  </div>
);

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  action: PropTypes.func,
  required: PropTypes.bool,
};

export default InputComponent;
