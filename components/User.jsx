import React from 'react';

export const User = ({ model }) => {
  return (
    <>
      <div>name: {model.name}</div>
      <div>email: {model.email}</div>
    </>
  );
};
