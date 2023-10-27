import React from 'react';

const AppButton = ({ children, ...props }) => {
  return (
    <button
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        color: '#fff',
        border: 'none',
        borderRadius: '100px',
        fontSize: '15px',
        height: '35px',
        width: '35px',
        cursor: 'pointer',
        background: 'rgba(255, 255, 255, 0.3)',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
        outline: 'none',
        gap: '10px',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;
