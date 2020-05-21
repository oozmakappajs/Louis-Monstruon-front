import React from 'react';

import '../assets/styles/pages/profile.scss';

const Profile = (props) => {
  return (
    <>
      <header className="header">
        <h2>Header</h2>
      </header>
      <main className="content">
        <section className="profile_header">
          <div>
            <p>Header Profile</p>
          </div>
        </section>
        <section className="profile_content">
          <div>
            <p>favorites | history purchase</p>
          </div>
          <div>
            <p>favorites | history purchase</p>
          </div>
          <div>
            <p>favorites | history purchase</p>
          </div>
          <div>
            <p>favorites | history purchase</p>
          </div>
        </section>
      </main>
      <nav className="menu_navigation">
        <h2>Menu de Navegación</h2>
      </nav>
    </>
  );
};

export default Profile;
