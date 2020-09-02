import React from 'react';
import Image from 'src/components/images/Image';

const Logo = () => {
  return (
    <>
      <p>Sunset Image</p>
      <Image
        src="../images/Logo.svg"
        className="mx-auto shadow-xl"
        alt="Sunset Image"
        style={{
          border: '10px solid green',
        }}
      />
    </>
  );
};

export default Logo;