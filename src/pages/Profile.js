import React from 'react';
import { Link } from 'react-router-dom';

import { getGlobalState } from '../Context';

import '../assets/styles/pages/profile.scss';

const Profile = (props) => {
  const [{ isAuth, user }] = getGlobalState();

  if (!isAuth) {
    return (
      <>
        <header className="header">
          <h2>Header</h2>
        </header>
        <main className="content">
          <section>
            <h1>Necesitas Iniciar sesion para acceder a tu perfil</h1>
            <Link to="/login">Iniciar sesion</Link>
            <p>
              ¿Notienes una cuenta?
              {' '}
              <Link to="/register">Registrate</Link>
            </p>
          </section>
        </main>
        <nav className="menu_navigation">
          <h2>Menu de Navegación</h2>
        </nav>
      </>
    );
  }

  return (
    <>
      <header className="header">
        <h2>Header</h2>
      </header>
      <main className="content">
        <section className="profile_header" user={user}>
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
