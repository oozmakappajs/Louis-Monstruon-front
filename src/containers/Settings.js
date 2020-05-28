/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ArrowBackIos } from '@material-ui/icons';

import Button from '../components/elements/Button';
import SwitchButton from '../components/elements/SwitchButton';

import '../assets/styles/containers/Settings.scss';

const Settings = () => {
  return (
    <section className="settings Settings">
      <ul className="Settings__menu">
        <li className="Settings__menu-item">
          <p>Tema</p>
          <SwitchButton theme />
        </li>
        <li className="Settings__menu-item">
          <p>Push notifications</p>
          <SwitchButton />
        </li>
        <li className="Settings__menu-item">
          <p>Cuenta</p>
          <div className="Settings__menu-item--icon">
            <ArrowBackIos />
          </div>
        </li>
        <li className="Settings__menu-item">
          <Button name="error">Cerrar sesión</Button>
        </li>
      </ul>
    </section>
  );
};

export default Settings;

