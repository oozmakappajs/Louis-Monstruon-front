import React from 'react';

import SettingsContainer from '../containers/SettingsContainer';
import { getGlobalState } from '../Context';

import SEO from '../components/elements/SEO';

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
      <SEO
        title="Settings | Louis Monstruon"
        description="Description Settings"
        kw="Stripe, Clothes, Store"
      />
      <SettingsContainer
        isAuth={isAuth}
        settings={settings}
        changeSetting={handleChangeSetting}
        goToLogin={goToLogin}
        push={props.history.push}
      />
    </>
  );
};

export default Settings;
