
import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail'
import HeaderContent from './HeaderContent'
import HeaderTitle from './HeaderTitle'

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <ImageThumbnail />
      <HeaderContent />
      <HeaderTitle />
    </div>
  );
};

export default HeaderContainer;