import React from 'react';
import { getGlobalState } from '../Context';

import SettingsActions from '../containers/Settings';

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
    <SettingsActions
      isAuth={isAuth}
      settings={settings}
      changeSetting={handleChangeSetting}
      goToLogin={goToLogin}
      push={props.history.push}
    />
  );
};

export default Settings;
