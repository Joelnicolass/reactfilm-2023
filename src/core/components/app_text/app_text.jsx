import React from 'react';

const AppText = ({ children }) => {
  return (
    <span
      style={{
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#fff',
      }}
    >
      {children}
    </span>
  );
};

export default AppText;
