import React from 'react';
import { Link } from 'react-router-dom';

const AppLink = ({ to, children, ...props }) => {
  return (
    <Link
      to={to}
      style={{
        padding: '10px',
        color: '#fff',
        textDecoration: 'none',
        fontSize: '20px',
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default AppLink;
