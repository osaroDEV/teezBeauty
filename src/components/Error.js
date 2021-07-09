import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <h1 style={{ backgroundColor: '#222', color: '#fff' }}>Error Page</h1>
      <Link to='/'>Back to Home</Link>
    </>
  );
};

export default Error;
