import React from 'react';
import '../assets/styles/containers/UserProfile.scss';

import user from '../assets/images/sue.jpg';

const UserProfile = () => {
  return (
    <section className="UserProfile">
      <div className="UserProfile__img">
        <img src={user} alt="user-img" />
      </div>
      <p>Nombre</p>
    </section>
  );
};

export default UserProfile;
