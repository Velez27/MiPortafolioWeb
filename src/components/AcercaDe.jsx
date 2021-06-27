import React from 'react';
import '../assets/styles/components/AcercaDe.scss';
import fotoPerfil from '../assets/static/foto-perfil.jpg';
import linkedin from '../assets/static/linkedin.png';
import github from '../assets/static/github.png';
import miCV from '../assets/static/cv.png';

const AcercaDe = () => (
    <section className="acercaDe">
        <figure className="acercaDe__foto--perfil">
            <img src={fotoPerfil} alt="Mi Foto"/>
        </figure>
        <h2 className="acercaDe__descripcion">Hola! Mi nombre es Jesús Vélez. Soy Ingeniero en Sistemas con conocimientos en Desarrollo Web. Busco colaborar en una posición donde pueda aplicar mis conocimientos en JavaScript, HTML, CSS y tecnologías relacionadas al Desarrollo de Aplicaciones Web y Móviles.</h2>
        <article className="acercaDe__enlaces">
            <figure>
                <a target="_blank" href="https://www.linkedin.com/in/velez-flores/"><img src={linkedin} alt="LinkedIn"/></a>
            </figure>
            <figure>
                <a target="_blank" href="https://github.com/Velez27"><img src={github} alt="GitHub"/></a>
            </figure>
            <figure>
                <a target="_blank" href="https://drive.google.com/file/d/1DcuPUl2OFpKPFTStELKiH4iLH1aXvIIV/view?usp=sharing"><img src={miCV} alt="Mi CV"/></a>
            </figure>
        </article>
    </section>
);

export default AcercaDe; 