import React from 'react';

const AppAvatar = ({ name, src }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #fe6b6b 30%, #a953ff 90%)',
        position: 'relative',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '20px',
      }}
    >
      <img
        style={{
          position: 'absolute',
          margin: '0 auto',
          left: '0',
          right: '0',
          width: '80%',
          height: '80%',
          borderRadius: '50%',
        }}
        src={src}
        alt={name}
      />
    </div>
  );
};

export default AppAvatar;
