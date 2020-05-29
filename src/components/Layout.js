import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import '../assets/styles/main.scss';

const Layout = (props) => {
  const { location: { pathname }, children, history } = props;

  const userPath = pathname.match(/^\/profile\/.*/) ? pathname.match(/^\/profile\/.*/)[0] : '/profile';

  let headerType;
  let headerTitle;
  let contentStyle = '';

  switch (pathname) {
    case '/notifications':
      headerType = 'page';
      headerTitle = 'Notificaciones';
      break;
    case '/search':
      headerType = 'search';
      break;
    case '/cart':
      headerType = 'page';
      headerTitle = 'Carrito';
      contentStyle = 'CartContainer';
      break;
    case '/settings':
      headerType = 'leftIcons';
      headerTitle = 'Configuraciones';
      break;
    case '/login':
      headerType = 'back';
      contentStyle = 'modalView';
      break;
    case '/register':
      headerType = 'back';
      contentStyle = 'modalView';
      break;
    case '/payment':
      contentStyle = 'modalView';
      break;
    case userPath:
      headerType = 'rightIcons';
      headerTitle = 'Username';
      break;
    default:
      headerType = 'logo';
      break;
  }

  return (
    <>
      {
        (pathname !== '/register' || pathname !== '/login') &&
        <Header type={`${headerType}`} title={`${headerTitle}`} history={history} />
      }
      <main className={`content ${contentStyle}`}>
        {
          (pathname === '/register' || pathname === '/login') &&
          <Header type={`${headerType}`} title={`${headerTitle}`} history={history} />
        }
        {children}
        {
          (pathname === '/register' || pathname === '/login' || pathname === '/payment') &&
          <Footer />
        }
      </main>
      {
        (pathname !== '/register' || pathname !== '/login' || pathname !== '/payment') &&
        <Footer icons />
      }
    </>
  );
};

const LayoutWithRouter = withRouter(Layout);

export default LayoutWithRouter;
