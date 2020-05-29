/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ArrowBackIos } from '@material-ui/icons';

import Button from '../components/elements/Button';
import SwitchButton from '../components/elements/SwitchButton';

import '../assets/styles/containers/Settings.scss';

const Settings = (props) => {
  const { isAuth, settings, changeSetting, goToLogin, push } = props;

  const themeSelected = settings.theme === 'light' ? 'dark' : 'light';

  return (
    <section className="settings Settings">
      <ul className="Settings__menu">
        <li className="Settings__menu-item">
          <p>Tema</p>
          <SwitchButton
            selected={settings.theme}
            action={() => changeSetting('CHANGE_THEME', themeSelected)}
            element="checked-theme"
            theme
          />
        </li>
        <li className="Settings__menu-item">
          <p>Push notifications</p>
          <SwitchButton
            selected={settings.notificationPermisions}
            action={() => changeSetting('TOGGLE_NOTIFICATIONS')}
            element="checked-notifications"
          />
        </li>
        <li className="Settings__menu-item">
          <p>Cuenta</p>
          <div className="Settings__menu-item--icon">
            <ArrowBackIos />
          </div>
        </li>
        <li className="Settings__menu-item">
          {
            isAuth ?
              <Button name="error" action={() => { changeSetting('REMOVE_AUTHORIZATION'); push('/'); }}>Cerrar sesión</Button> :
              <Button name="success" action={goToLogin}>Iniciar sesión</Button>
          }
        </li>
      </ul>
    </section>
  );
};

export default Settings;

