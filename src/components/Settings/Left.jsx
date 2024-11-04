import React from 'react';

const Left = ({ onItemClick }) => {
  return (
    <>
      <ul>
        <li onClick={() => onItemClick('user')}>User</li>
        <li onClick={() => onItemClick('notifications')}>Notifications</li>
        <li onClick={() => onItemClick('profile')}>Profile</li>
      </ul>
    </>
  );
};

export default Left;

