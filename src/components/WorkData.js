import React from 'react';

export default ({ user, update, index }) => {
  return (
    <option value={user.id}>{user.name}</option>
  );
};
