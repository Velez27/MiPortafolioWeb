import React from 'react';
import '../assets/styles/components/ListaProyectos.scss';

const ListaProyectos = ({ children, title }) => (
  <div className='lista__proyectos'>
    <h3 className='lista__proyectos--title'>{title}</h3>
    {children}
  </div>
);
 
export default ListaProyectos;
