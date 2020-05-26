import React from 'react';
import IconButton from './elements/IconButton';
import '../assets/styles/components/CardNotification.scss';

const CartNotification = () => {
  return (
    <div className="CartNotification">
      <div className="CartNotification__details CartNotification__text">
        <p className="CartNotification__title">Nueva promoción</p>
        <p className="CartNotification__sinopsis">Sinópsis</p>
      </div>
      <div className="CartNotification__delete CartNotification__icon">
        <IconButton type="delete" />
      </div>
    </div>
  );
};

export default CartNotification;
