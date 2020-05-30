import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const IsOffline = (props) => {
  const [online, setOnline] = useState(navigator ? navigator.onLine : true);

  const goOnline = () => {
    setOnline(true);
  };

  const goOffline = () => {
    setOnline(false);
  };

  useEffect(() => {
    if (!window) return;
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, [online]);

  if (online) {
    return null;
  }

  return (
    <span className="header__offline">
      {props.children}
    </span>
  );
};

IsOffline.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IsOffline;
