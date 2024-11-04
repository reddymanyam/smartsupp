import React from 'react';
import Userpage from '../User/Userpage'

const Right = ({ selectedItem }) => {
  const renderContent = () => {
    switch (selectedItem) {
      case 'user':
        return <div><Userpage /></div>;
      case 'notifications':
        return <div>Notifications Content</div>;
      case 'profile':
        return <div>Profile Content</div>;
      default:
        return <div>Please select an item from the list.</div>;
    }
  };

  return <>{renderContent()}</>;
};

export default Right;

