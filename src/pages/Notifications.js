import React from 'react';
import { getGlobalState } from '../Context';

import CartNotification from '../components/CardNotification';
import Button from '../components/elements/Button';

import '../assets/styles/pages/notifications.scss';

const Notifications = (props) => {
  const [{ notifications, settings: { notificationPermisions }, dispatch }] = getGlobalState();

  console.log(notifications);
  console.log(notificationPermisions);

  const handleDeleteNotifications = (payload) => {
    return dispatch({ type: 'REMOVE_NOTIFICATIONS', payload });
  };

  if (!notificationPermisions) {
    return (
      <section className="notifications">
        <h1 className="notifications_withoutPermisions">Request Notifications Permision Modal</h1>
      </section>
    );
  }

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
        <Button name="error" action={handleDeleteNotifications}>Borrar Todo</Button>
      </div>
    </section>
  );
};

export default Notifications;
