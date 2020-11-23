import React from 'react';
import HolaMundo from '../components/HolaMundo';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import AcercaDe from '../components/AcercaDe';
import ListaProyectos from '../components/ListaProyectos';
import Carrusel from '../components/Carrusel';
import CarruselItem from '../components/CarruselItem';
import Footer from '../components/Footer';


const App = () => (
  <div className='App'>
    <Header></Header>
    <AcercaDe></AcercaDe>
    <ListaProyectos title='Mis Proyectos'>
      <Carrusel>
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
      </Carrusel>
    </ListaProyectos>
    <Footer></Footer>
  </div>
);

export default App;
