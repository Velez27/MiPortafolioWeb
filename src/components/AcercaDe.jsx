import React from 'react';
import '../assets/styles/components/AcercaDe.scss';
import fotoPerfil from '../assets/static/foto-perfil.jpg';
import linkedin from '../assets/static/linkedin.png';
import github from '../assets/static/github.png';
import miCV from '../assets/static/cv.png';

const AcercaDe = () => (
    <section className='acercaDe'>
        <div className='acercaDe_izquierda'>
            <figure className='acercaDe__foto--perfil'>
                <img src={fotoPerfil} alt='Mi Foto' />
            </figure>
            <h2 tabindex="0" className='acercaDe__descripcion'>
                Hola! Mi nombre es Jesús Vélez. Soy Ingeniero en Sistemas con
                conocimientos en Desarrollo Web. Busco colaborar en una posición
                donde pueda aplicar mis conocimientos en JavaScript, HTML, CSS y
                tecnologías relacionadas al Desarrollo de Aplicaciones Web y
                Móviles.
            </h2>
            <article className='acercaDe__enlaces'>
                <figure>
                    <a target='_blank'href='https://www.linkedin.com/in/velez-flores/'>
                        <img src={linkedin} alt='LinkedIn' />
                    </a>
                </figure>
                <figure>
                    <a target='_blank' href='https://github.com/Velez27'>
                        <img src={github} alt='GitHub' />
                    </a>
                </figure>
                <figure>
                    <a target='_blank' href='https://drive.google.com/file/d/1DcuPUl2OFpKPFTStELKiH4iLH1aXvIIV/view?usp=sharing'>
                        <img src={miCV} alt='Mi CV' />
                    </a>
                </figure>
            </article>
            <div className="habilidades">
                <p className='habilidades__title'>Mis Habilidades Tecnicas</p>
                <div className='column1'>
                    🐬 JavaScript – Intermedio <br />
                        
                    🦉 Java – Intermedio <br />
                        
                    🐪 TypeScript – Básico <br />
                       
                    🐿️ HTML – Intermedio <br />
                       
                    🐑 CSS – Intermedio <br />
                </div>
                <div className='column2'>
                    🐘 MySQL – Intermedio <br />
                        
                    🐒 MongoDB – Básico <br />
                       
                    🦏 Node.js – Básico <br />
                       
                    🦇 Git – Intermedio <br />
                        
                    🐧 React js – Básico <br />
                </div>
            </div>
        </div>
        <div className='acercaDe_derecha'>
                <table className='experiencia_table'>
                    <tr>
                        <th className="experiencia__table--title">Mi Experiencia</th>
                    </tr>
                    <tr>
                        <th>Empresa: Entersol</th>
                    </tr>
                    <tr>
                        <td>
                            Periodo: Julio/2020 – Actual<br />
                            Puesto: Desarrollador Netsuite / Analista TI <br />
                            Actividades:
                        </td>
                    </tr>
                    <tr>
                        <td>
                        ✔️ Soporte a los clientes en las diferentes aplicaciones (NetSuite, EFAC) que proporciona la empresa para realizar procesos de contabilidad (Atención a Tickets). <br />
                        ✔️ Creación y modificación de Plantillas HTML/PDF en NetSuite.<br />
                        ✔️ Creación y modificación de Reportes y Busquedas Guardadas y extracción de información mediante ODBC en NetSuite. <br />
                        ✔️ Creación y manipulación de Bundlers. <br />
                        ✔️ Creación de módulos personalizados en Netsuite para la captura de información. <br />
                        ✔️ Creación de scripts (suitescript 1.0 y 2.0) y Workflows para definir la lógica de uso en los registros nativos y personalizados de Netsuite. 
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Empresa: Universidad de la República Mexicana
                            (UNIREM).
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Periodo: Octubre/2019 – Junio/2020 <br />
                            Puesto: Soporte Técnico. <br />
                            Actividades:
                        </td>
                    </tr>
                    <tr>
                        <td>
                        ✔️ Crear queries SQL para extraer información de la BD de la escuela, utilizando el software TOAD (Aplicación para administrar DB). <br />
                        ✔️ Trabajar con compañeros de área y de otras áreas para dar apoyo y solución a problemas relacionados a TI en cumplimiento de tiempos de entrega. <br />
                        ✔️ Aprender el uso de nuevo software o nuevas versiones para capacitar a personal administrativo y/o docente (SABRE, CodeBlocks, Office, Paquetería Adobe).
                        </td>
                    </tr>
                </table>
        </div>
    </section>
);

export default AcercaDe; 