import React from 'react';
import '../../assets/styles/components/elements/Input.scss';

const InputComponent = (props) => (
  <div className="InputComponent">
    <input type="text" placeholder={props.title} className="InputComponent__input" />
  </div>
);

export default InputComponent;
