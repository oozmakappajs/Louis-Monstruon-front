import React, { useState } from 'react';

import UserProfile from '../containers/UserProfile';
import UserGroupedButtons from '../containers/UserGroupedButtons';
import UserCard from '../containers/UserCard';

import '../assets/styles/pages/profile.scss';

const Profile = (props) => {
  const [active, setActive] = useState(false);

  const handleTabActive = () => {
    setActive(!active);
  };

  return (
    <>
      <section className="profile_header">
        <UserProfile />
        <UserGroupedButtons handleTabActive={handleTabActive} active={active} />
      </section>
      <section className="profile_content">
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
