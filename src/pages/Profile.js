import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserProfile from '../containers/UserProfile';
import UserGroupedButtons from '../containers/UserGroupedButtons';
import UserCard from '../containers/UserCard';
import '../assets/styles/pages/profile.scss';

const Profile = () => {
  const [ActiveLeft, useIsActiveLeft] = useState(true);
  const [ActiverRight, useIsActiveRight] = useState(false);
  return (
    <>
      <Header type="rightIcon">Usuario</Header>
      <main className="content">
        <section className="profile_header">
          <UserProfile>Sue Herrera</UserProfile>
          <UserGroupedButtons left={ActiveLeft} right={ActiverRight} />
        </section>
        <section className="profile_content">
          {
            ActiveLeft && (
              <>
                <UserCard icon />
                <UserCard icon />
              </>
            )
          }
          {
            ActiverRight && (
              <>
                <UserCard />
                <UserCard />
              </>
            )
          }
        </section>
      </main>
      <Footer icons />
    </>
  );
};

export default Profile;
