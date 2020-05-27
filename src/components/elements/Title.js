import React from 'react';
import '../../assets/styles/components/elements/Title.scss';

const Title = (props) => {
  return (
    <div className="Title">
      <p>
        {props.children}
      </p>
    </div>
  );
};

export default Title;
