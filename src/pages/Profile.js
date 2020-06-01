import React, { useState } from 'react';
import { getGlobalState } from '../Context';

import SEO from '../components/elements/SEO';
import UserProfile from '../containers/UserProfile';
import UserGroupedButtons from '../containers/UserGroupedButtons';
import UserCard from '../containers/UserCard';
import Button from '../components/elements/Button';

import '../assets/styles/pages/profile.scss';

const Profile = (props) => {
  const [{ isAuth, user, settings: { theme } }] = getGlobalState();
  const [active, setActive] = useState(false);

  const handleTabActive = () => {
    setActive(!active);
  };

  const goTo = (url) => {
    props.history.push(url);
  };

  if (!isAuth) {
    return (
      <>
        <SEO
          title="Profile | Louis Monstruon"
          description="Description Profile"
          kw="Stripe, Clothes, Store"
        />
        <section className={`profile_header ${theme}`}>
          <h1 className="profile_title-noAuth">You need to Login to access your profile</h1>
        </section>
        <section className="profile_content profile_content-noAuth">
          <Button name="base-blue" buttonType="button" action={() => { goTo('/login'); }}>Login</Button>
          <p>
            You do not have an account?
            {' '}
            <Button name="base-purple" buttonType="button" action={() => { goTo('/register?step=1'); }}>Sign up</Button>
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Profile | Louis Monstruon"
        description="Description Profile"
        kw="Stripe, Clothes, Store"
      />
      <section className={`profile_header ${theme}`}>
        <UserProfile user={user}>Name</UserProfile>
        <UserGroupedButtons handleTabActive={handleTabActive} active={active} />
      </section>
      <section className={`profile_content ${theme}`}>
        {
          !active && (
            <>
              <UserCard icon />
              <UserCard icon />
              <UserCard icon />
              <UserCard icon />
            </>
          )
        }
        {
          active && (
            <>
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </>
          )
        }
      </section>
    </>
  );
};

export default Profile;
