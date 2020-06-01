import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getGlobalState } from '../Context';

import Header from './Header';
import Footer from './Footer';

import '../assets/styles/main.scss';

const Layout = (props) => {
  const [{ settings: { theme }, productAct: { name = 'Product name' } }] = getGlobalState();
  const { location: { pathname }, children, history } = props;

  const userPath = pathname.match(/^\/profile\/.*/) ? pathname.match(/^\/profile\/.*/)[0] : '/profile';
  const productsPath = pathname.match(/^\/(woman|man|kid|accessories)\/[1-4]$/) ? pathname.match(/^\/(woman|man|kid|accessories)\/[1-4]$/)[0] : '/category/products';
  const productPath = pathname.match(/^\/(woman|man|kid|accessories)\/[1-4]\/.*/) ? pathname.match(/^\/(woman|man|kid|accessories)\/[1-4]\/.*/)[0] : '/category/products/id-name-product';

  let headerType;
  let headerTitle;
  let contentStyle = '';
  const categoryName = pathname.split('/', 2);

  switch (pathname) {
    case '/notifications':
      headerType = 'page';
      headerTitle = 'Notifications';
      break;
    case '/search':
      headerType = 'search';
      break;
    case '/cart':
      headerType = 'page';
      headerTitle = 'Cart';
      contentStyle = 'CartContainer';
      break;
    case '/settings':
      headerType = 'leftIcons';
      headerTitle = 'Settings';
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
    case productsPath:
      headerType = 'twoIcons';
      headerTitle = categoryName[1].toUpperCase();
      break;
    case productPath:
      headerType = 'leftIcons';
      headerTitle = name;
      break;
    case userPath:
      headerType = 'rightIcons';
      headerTitle = 'Username';
      break;
    default:
      headerType = 'logo';
      break;
  }

  useEffect(() => {
    const app = document.getElementById('app');

    if (theme === 'dark') {
      app.classList.remove('light');
      app.classList.add('dark');
    } else {
      app.classList.remove('dark');
      app.classList.add('light');
    }
  }, [theme]);

  return (
    <>
      {
        (pathname !== '/register' && pathname !== '/login') &&
        <Header theme={theme} type={`${headerType}`} title={`${headerTitle}`} history={history} />
      }
      <main className={`content ${contentStyle}`}>
        {
          (pathname === '/register' || pathname === '/login') &&
          <Header theme={theme} type={`${headerType}`} title={`${headerTitle}`} history={history} />
        }
        {children}
        {
          (pathname === '/register' || pathname === '/login' || pathname === '/payment') &&
          <Footer theme={theme} />
        }
      </main>
      {
        (pathname !== '/register' && pathname !== '/login' && pathname !== '/payment') &&
        <Footer theme={theme} icons />
      }
    </>
  );
};

const LayoutWithRouter = withRouter(Layout);

export default LayoutWithRouter;
