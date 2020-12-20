import React from 'react';
import '../assets/styles/components/CarruselItemImage.scss';

const CarruselItemImage = ({icono, alt}) => (
        <img
          className='carousel-item__details--img'
          src={icono}
          alt={alt}
        />
);


export default CarruselItemImage;