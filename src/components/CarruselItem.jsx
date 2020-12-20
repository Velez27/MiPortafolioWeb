import React from 'react';
import '../assets/styles/components/CarruselItem.scss';

import proyectImage from '../assets/static/proyecto-rickandmorty.png'

const CarruselItem = ({title, description, children}) => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src={proyectImage}
      alt='Project Image'
    />
    <div className='carousel-item__details'>
      <div>
        {children}
      </div>
<p className='carousel-item__details--title'>{title}</p>
<p className='carousel-item__details--subtitle'>{description}</p>
    </div>
  </div>
);

export default CarruselItem;
