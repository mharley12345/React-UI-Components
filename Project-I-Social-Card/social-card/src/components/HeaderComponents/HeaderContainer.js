import React from 'react'
import HeaderContent from './HeaderContent'
import HeaderTitle from './HeaderTitle'

import './Header.css';
import ImageThumbnail from './ImageThumbnail';
  const HeaderContainer = () => {
    return(
<div>
  <HeaderContent  />
   <ImageThumbnail />
   <HeaderTitle />
 </div>

    )
  }
  export default HeaderContainer
