import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SettingsContainer from '../containers/SettingsContainer';
import '../assets/styles/pages/settings.scss';

const Settings = (props) => {
  return (
    <>
      <Header type="leftIcons">Configuraciones</Header>
      <main className="content">
        <section className="settings">
          <SettingsContainer />
        </section>
      </main>
      <Footer icons />
    </>
  );
};

export default Settings;
