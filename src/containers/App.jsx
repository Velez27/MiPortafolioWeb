import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import AcercaDe from '../components/AcercaDe';
import ListaProyectos from '../components/ListaProyectos';
import Carrusel from '../components/Carrusel';
import CarruselItem from '../components/CarruselItem';
import Footer from '../components/Footer';
import CarruselItemImage from '../components/CarruselItemImage';

//Imagenes principales para los proyectos
import proyectImage from '../assets/static/proyecto-rickandmorty.png'

//Imagenes y ALT para las tecnologias de los proyectos
import jsIcon from '../assets/static/javascript-icon.png';
const altIconJS = 'Icono JavaScript';
import htmlIcon from '../assets/static/html-icon.png';
const altIconHTML = 'Icono HTML';
import cssIcon from '../assets/static/css-icon.png'
const altIconCSS = 'Icono CSS';

const App = () => (
  <div className='App'>
    <Header/>
    <AcercaDe/>
    <ListaProyectos title='Mis Proyectos'>
      <Carrusel>
        <CarruselItem projectImage={proyectImage} title="Proyecto Personal" description="Consumiendo una API">
          <CarruselItemImage icono={jsIcon} alt={altIconJS} />
          <CarruselItemImage icono={htmlIcon} alt={altIconHTML} />
          <CarruselItemImage icono={cssIcon} alt={altIconCSS} />
        </CarruselItem>
        <CarruselItem projectImage={proyectImage} title="Proyecto Privado" description="Pagina Web">
          <CarruselItemImage icono={jsIcon} alt={altIconJS} />
          <CarruselItemImage icono={cssIcon} alt={altIconJS} />
        </CarruselItem>
      </Carrusel>
    </ListaProyectos>
    <Footer/>
  </div>
);

export default App;
