import React from 'react';

import './profile-picture.styles.sass';

import ImgWrapper from '../../atoms/img-wrapper/img-wrapper.component';

const ProfilePicture = ({ big, imgUrl }) => (
  <div className={`profile-picture`}>
    <ImgWrapper circle big={big}>
      <img src={imgUrl} alt="michael scott" className="profile-picture__img"/>
    </ImgWrapper>
  </div>
);

export default ProfilePicture;