import React from 'react';
import '../assets/styles/components/CarruselItem.scss';
import githubIcon from '../assets/static/github-icon.png';

const CarruselItem = ({projectImage, linkGitProject, title, description, children}) => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src={projectImage}
      alt='Project Image'
    />
    <div className='carousel-item__details'>
      <div>
        {children}
        <a href={linkGitProject} target="_blank">
        <img
          className='carousel-item__details--img git'
          src={githubIcon}
          alt='Icono GitHub'
        />
        </a>
      </div>
<p className='carousel-item__details--title'>{title}</p>
<p className='carousel-item__details--subtitle'>{description}</p>
    </div>
  </div>
);

export default CarruselItem;
