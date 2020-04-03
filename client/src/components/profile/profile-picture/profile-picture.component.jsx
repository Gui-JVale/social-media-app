import React from 'react';

import './profile-picture.styles.sass';

import img from '../../../assets/profile-pictures/m_scott-profile.jpeg';
import ImgWrapper from '../../general/img-wrapper/img-wrapper.component';

const ProfilePicture = ({ circle }) => (
  <div className="profile-picture">
    <ImgWrapper circle >
      <img src={img} alt="profile-picture" className="profile-picture__img"/>
    </ImgWrapper>
  </div>
);

export default ProfilePicture;