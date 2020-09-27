import React from 'react';
import Logo from '../assets/images/logo.png';
import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <img style={{ height: '200px' }} src={Logo}></img>
      <p>{config.subHeading}</p>
    </header>
  );
}
