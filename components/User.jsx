import React from 'react';

export const User = ({ model }) => {
  return (
    <>
      <div>id: {model.id}</div>
      <div>name: {model.name}</div>
      <div>username: {model.username}</div>
      <div>email: {model.email}</div>
      <div>address: {model.address.street}</div>
      <div>phone: {model.phone}</div>
      <div>website: {model.website}</div>
      <div>company: {model.company.name}</div>
    </>
  );
};
