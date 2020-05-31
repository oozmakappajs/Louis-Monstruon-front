import React from 'react';
import '../../assets/styles/components/elements/GoogleText.scss';

const GoogleTextComponent = (props) => (
  <p className="GoogleText">
    <span className="GoogleText--blue">G</span>
    <span className="GoogleText--red">o</span>
    <span className="GoogleText--yellow">o</span>
    <span className="GoogleText--blue">g</span>
    <span className="GoogleText--green">l</span>
    <span className="GoogleText--red">e</span>
  </p>
);

const GoogleText = React.memo(GoogleTextComponent);

export default GoogleText;
