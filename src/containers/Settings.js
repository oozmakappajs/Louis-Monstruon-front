/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ArrowBackIos } from '@material-ui/icons';
import SwitchButton from '../components/elements/SwitchButton';
import '../assets/styles/containers/Settings.scss';

const Settings = () => {
  return (
    <section className="Settings">
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
          <p>Push notifications</p>
          <div className="Settings__menu-item--icon">
            <ArrowBackIos />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Settings;

