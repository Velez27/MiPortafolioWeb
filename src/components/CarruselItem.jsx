import React from 'react';
import '../assets/styles/components/CarruselItem.scss';

import javascriptIcon from '../assets/static/javascript-icon.png';
import htmlIcon from '../assets/static/html-icon.png';
import cssIcon from '../assets/static/css-icon.png'
import ProyectImage from '../assets/static/proyecto-rickandmorty.png'

const CarruselItem = () => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src={ProyectImage}
      alt=''
    />
    <div className='carousel-item__details'>
      <div>
        <img
          className='carousel-item__details--img'
          src={javascriptIcon}
          alt='JavaScript Icon'
        />
        <img
          className='carousel-item__details--img'
          src={htmlIcon}
          alt='HTML Icon'
        />
        <img
          className='carousel-item__details--img'
          src={cssIcon}
          alt='CSS Icon'
        />
      </div>
      <p className='carousel-item__details--title'>Un Proyecto Personal</p>
      <p className='carousel-item__details--subtitle'>Consumiento una API</p>
    </div>
  </div>
);

export default CarruselItem;
