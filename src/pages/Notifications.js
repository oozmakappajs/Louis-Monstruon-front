import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardNotification from '../components/CardNotification';
import Button from '../components/elements/Button';
import '../assets/styles/pages/notifications.scss';

const Notifications = (props) => {
  return (
    <>
      <Header type="page">Notificaciones</Header>
      <main className="content">
        <section className="notifications">
          <div className="notifications__cards-container">
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
            <CardNotification />
          </div>
          <Button className="notifications__btn" name="error" buttonType="button">Borrar todo</Button>
        </section>
      </main>
      <Footer icons />
    </>
  );
};

export default Notifications;
