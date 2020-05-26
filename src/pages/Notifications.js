import React from 'react';

import { getGlobalState } from '../Context';

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
      <h1>Request Notifications Permision Modal</h1>
    );
  }

  return (
    <>
      <header className="header">
        <h2>Header</h2>
      </header>
      <main className="content">
        <section className="notifications" notifications={notifications}>
          <div>
            <p>notification</p>
          </div>
          <div>
            <p>notification</p>
          </div>
          <div>
            <p>notification</p>
          </div>
          <div>
            <p>notification</p>
          </div>
          <div>
            <p>notification</p>
          </div>
          <div>
            <p>notification</p>
          </div>
          <div>
            <p>notification</p>
          </div>
          <div>
            <p>notification</p>
          </div>
          <button type="button" onClick={handleDeleteNotifications}>Borrar Todo</button>
        </section>
      </main>
      <nav className="menu_navigation">
        <h2>Menu de Navegación</h2>
      </nav>
    </>
  );
};

export default Notifications;
