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
            Soy un profesional con experiencia en soporte técnico y desarrollo de software, especializado en NetSuite. Comencé en soporte técnico, adquiriendo habilidades en reparación de equipos y administración de redes. Luego, me enfoqué en desarrollo de software, trabajando con lenguajes como JavaScript, HTML, CSS, y SuiteScript (1.0 y 2.x) para personalizaciones en Netsuite. Más recientemente, he participado en multiples implementaciones de instancias de NetSuite, migración de sistemas y desarrollado/optimizado APIs con Go y Java para automatizar procesos estratégicos del modelo de negocio de empresas.
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
                    <a target='_blank' href='https://drive.google.com/file/d/1ylnbKOKesynqYhQh39GQdfiu5ovsJj3p/view'>
                        <img src={miCV} alt='Mi CV' />
                    </a>
                </figure>
            </article>
            <div className="habilidades">
                <p className='habilidades__title'>Mis Habilidades Tecnicas</p>
                <div className='column1'>
                    🐬 JavaScript – Avanzado <br />
                        
                    🦉 Java – Intermedio <br />
                        
                    🐪 Golang – Intermedio <br />
                        
                    🦦 SuiteScript 1.0 – Avanzado <br />
                        
                    🐈‍⬛ SuiteScript 2.x – Avanzado <br />
                </div>
                <div className='column2'>
                    🦜 Python – Básico <br />
                        
                    🐗 Postman – Básico <br />
                        
                    🦉 PostgreSQL – Básico <br />
                        
                    🦇 Git – Intermedio <br />
                        
                    🐋 Docker – Intermedio <br />
                </div>
                <div className='column3'>
                    🐘 MySQL – Intermedio <br />
                        
                    🐒 MongoDB – Básico <br />
                        
                    🦏 Node.js – Básico <br />
                        
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
                        <th>
                            Empresa: Kavak
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Periodo: Febrero/2022 – Febrero/2025 <br />
                            Puesto: Ingeniero de Software. <br />
                            Actividades:
                        </td>
                    </tr>
                    <tr>
                        <td>
                        ✔️ Desarrollé y optimicé scripts en SuiteScript (1.0 y 2.0) para integrar servicios externos a NetSuite, alineados con el modelo de negocio de la empresa. <br />
                        ✔️ Implementé Restlets, Suitelets, Client Scripts, UserEvent Scripts, MassUpdate y Map/Reduce para automatizar y mejorar procesos internos. <br />
                        ✔️ Gestioné repositorios con Git y GitLab, asegurando un flujo de trabajo eficiente en el equipo de desarrollo de NetSuite y otros proyectos en Java y Go. <br />
                        ✔️ Desarrolle e integre APIs en Golang para la comunicación con proveedores, permitiendo la automatización de procesos clave como la creación de facturas y registros personalizados en NetSuite. <br />
                        ✔️ Realicé mejoras y ajustes de lógica en proyectos existentes en Golang y Java, optimizando la funcionalidad de servicios internos y APIs.
                        </td>
                    </tr>
                    <tr>
                        <th>Empresa: Entersol</th>
                    </tr>
                    <tr>
                        <td>
                            Periodo: Julio/2020 – Enero/2022<br />
                            Puesto: Desarrollador Netsuite / Analista TI <br />
                            Actividades:
                        </td>
                    </tr>
                    <tr>
                        <td>
                        ✔️ Desarrollé scripts en SuiteScript (1.0 y 2.0) y Workflows para personalizar y optimizar la gestión de registros en NetSuite. <br />
                        ✔️ Implementé soluciones con Suitelets, Client Scripts, UserEvent Scripts, MassUpdate y Map/Reduce para mejorar la funcionalidad del sistema. <br />
                        ✔️ Creé y gestioné bundlers para facilitar la implementación de módulos personalizados en NetSuite. <br />
                        ✔️ Desarrollé módulos personalizados en NetSuite para la captura y manipulación eficiente de datos. <br />
                        ✔️ Creé y gestioné Reportes, Busquedas Guardadas y extracción de información mediante ODBC en NetSuite. <br />
                        ✔️ Diseñe y personalice plantillas HTML/PDF en NetSuite para generar documentos adaptados a las necesidades del negocio.
                        </td>
                    </tr>
                </table>
        </div>
    </section>
);

export default AcercaDe; 