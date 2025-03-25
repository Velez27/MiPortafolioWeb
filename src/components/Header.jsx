import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-rubik.png';

const Header = () => {

  const title = 'Ing. Jesús Vélez Flores';
  const imgTitle = 'Ingeniero en Sistemas';
  return (
  <header className='header'>
    <div className='header__container'>
    <figure>
    <img
      className='header__img'
      src={logo}
      alt='Cubo Rubik'
    />
    {imgTitle}
    </figure>
    <h1 className='header__title'>
      {title}
    </h1>
    </div>
  </header>
)};

export default Header;
