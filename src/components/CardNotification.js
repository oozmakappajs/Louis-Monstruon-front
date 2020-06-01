import React from 'react';
import { Link } from 'react-router-dom';

import IconButton from './elements/IconButton';

import '../assets/styles/components/CardNotification.scss';

const CartNotification = () => {
  return (
    <div className="CartNotification" to="/man/pants/213413ed13">
      <Link className="CartNotification__details CartNotification__text" to="/man/pants/213413ed13">
        <p className="CartNotification__title">New promotion</p>
        <p className="CartNotification__sinopsis">Synopsis</p>
      </Link>
      <div className="CartNotification__delete CartNotification__icon">
        <IconButton type="delete" />
      </div>
    </div>
  );
};

export default CartNotification;
