import React from 'react';
import SettingsContainer from '../containers/SettingsContainer';
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
    <SettingsContainer
      isAuth={isAuth}
      settings={settings}
      changeSetting={handleChangeSetting}
      goToLogin={goToLogin}
      push={props.history.push}
    />
  );
};

export default Settings;
