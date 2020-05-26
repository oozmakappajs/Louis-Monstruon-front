import React from 'react';

import { getGlobalState } from '../Context';

import '../assets/styles/pages/settings.scss';

const Settings = (props) => {
  const [{ isAuth, settings }, dispatch] = getGlobalState();

  const handleChangeSetting = (type, payload) => {
    return dispatch({ type, payload });
  };

  const goToLogin = () => {
    props.history.push('/login');
  };

  return (
    <>
      <header className="header">
        <h2>Header</h2>
      </header>
      <main className="content">
        <section className="settings">
          <div>
            {
              settings.theme === 'light' ?
                <button type="button" onClick={() => handleChangeSetting('CHANGE_THEME', 'black')}>{settings.theme}</button> :
                <button type="button" onClick={() => handleChangeSetting('CHANGE_THEME', 'light')}>{settings.theme}</button>

            }
          </div>
          <div>
            <button type="button" onClick={() => handleChangeSetting('TOGGLE_NOTIFICATIONS')}>
              {
                settings.notificationPermisions ? 'On' : 'Off'
              }
            </button>
          </div>
          <div>
            <p>Cuenta</p>
          </div>
          <div>
            {
              isAuth ?
                <button type="button" onClick={() => handleChangeSetting('REMOVE_AUTHORIZATION')}>Cerrar sesión</button> :
                <button type="button" onClick={goToLogin}>Iniciar sesión</button>

            }
          </div>
        </section>
      </main>
      <nav className="menu_navigation">
        <h2>Menu de Navegación</h2>
      </nav>
    </>
  );
};

export default Settings;
