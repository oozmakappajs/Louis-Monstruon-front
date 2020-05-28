import React from 'react';

import CartNotification from '../components/CardNotification';
import Button from '../components/elements/Button';

import '../assets/styles/pages/notifications.scss';

const Notifications = (props) => {
  return (
    <section className="notifications">
      <CartNotification />
      <CartNotification />
      <CartNotification />
      <CartNotification />
      <CartNotification />
      <CartNotification />
      <CartNotification />
      <CartNotification />
      <CartNotification />
      <CartNotification />
      <CartNotification />
      <CartNotification />
      <CartNotification />
      <CartNotification />
      <CartNotification />
      <CartNotification />
      <div className="notifications_deleteAll">
        <Button name="error">Borrar Todo</Button>
      </div>
    </section>
  );
};

export default Notifications;
