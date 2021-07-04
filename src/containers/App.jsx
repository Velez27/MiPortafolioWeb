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
import proyectImage_1 from '../assets/static/proyecto-portafoliov2.png';
import proyectImage_2 from '../assets/static/proyecto-rickandmorty.png';
import proyectImage_3 from '../assets/static/proyecto-paginaweb.png';
import proyectImage_4 from '../assets/static/proyecto-sistemareportes.png';

//Imagenes y ALT para las tecnologias de los proyectos
import jsIcon from '../assets/static/javascript-icon.png';
const altIconJS = 'Icono JavaScript';
import htmlIcon from '../assets/static/html-icon.png';
const altIconHTML = 'Icono HTML';
import cssIcon from '../assets/static/css-icon.png'
const altIconCSS = 'Icono CSS';
import reactjs from '../assets/static/reactjs-icon.png';
const altReactJS = 'Icono React JS';
import sass from '../assets/static/scss-icon.png';
const altSass = 'Icono SCSS';
import javaIcon from '../assets/static/java-icon.png';
const altJava = 'Icono Java';

const App = () => (
  <div className='App'>
    <Header/>
    <AcercaDe/>
    <ListaProyectos title='Mis Proyectos'>
      <Carrusel>
      <CarruselItem projectImage={proyectImage_1} linkGitProject="https://github.com/Velez27/MiPortafolioWeb" title="Proyecto Personal" description="Desarrollo de mi Portafolio WEB v2.0">
          <CarruselItemImage icono={reactjs} alt={altReactJS} />
          <CarruselItemImage icono={sass} alt={altSass} />
          <CarruselItemImage icono={htmlIcon} alt={altIconHTML} />
          <CarruselItemImage icono={jsIcon} alt={altIconJS} />
          <CarruselItemImage icono={cssIcon} alt={altIconJS} />
        </CarruselItem>
        <CarruselItem projectImage={proyectImage_2} linkGitProject="https://github.com/Velez27/personajesRickAndMorty" title="Proyecto Personal" description="Consumiendo una API con JavaScript">
          <CarruselItemImage icono={jsIcon} alt={altIconJS} />
          <CarruselItemImage icono={htmlIcon} alt={altIconHTML} />
          <CarruselItemImage icono={cssIcon} alt={altIconCSS} />
        </CarruselItem>
        <CarruselItem projectImage={proyectImage_3} linkGitProject="https://github.com/Velez27/Portafolio" title="Proyecto Personal" description="Desarrollo de mi Porfatolio WEB v1.0">
          <CarruselItemImage icono={htmlIcon} alt={altIconHTML} />
          <CarruselItemImage icono={jsIcon} alt={altIconJS} />
          <CarruselItemImage icono={cssIcon} alt={altIconJS} />
        </CarruselItem>
        <CarruselItem projectImage={proyectImage_4} linkGitProject="https://github.com/Velez27/sistemaReportes" title="Proyecto Personal" description="Desarrollo de Control de Tickets en Java">
          <CarruselItemImage icono={javaIcon} alt={altJava} />
        </CarruselItem>
      </Carrusel>
    </ListaProyectos>
    <Footer/>
  </div>
);

export default App;
