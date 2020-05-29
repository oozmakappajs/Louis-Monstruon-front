import React from 'react';

import '../../assets/styles/components/elements/Input.scss';

const InputComponent = (props) => (
  <div className="InputComponent">
    <input type={props.type} placeholder={props.title} name={props.name} className="InputComponent__input" onChange={props.action} required={props.required} />
    <div className="InputComponent__input--border" />
  </div>
);

export default InputComponent;
