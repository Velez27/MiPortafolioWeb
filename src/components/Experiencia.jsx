import React from 'react';
import '../assets/styles/components/Experiencia.scss';

const Experiencia = () => (
    <section className="experiencia">
        <h3 className='experiencia_title'>Mis Conocimientos y Experiencia</h3>
        <table className="experiencia_table">
            <tr>
                <th>Empresa: Kavak</th>
            </tr>
            <tr>
                <ul>
                    <li>Periodo: Febrero/2022 – Actual</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    <li>Puesto: Ingeniero de Software.</li>
                    <li>Actividades:</li>
                </ul>
            </tr>
            <tr>
                <ul>
                    <li>Crear scripts (suitescript 1.0 y 2.0) para integrar servicios externos a netsuite que la empresa requiere de acuerdo a su modelo de negocio.</li>
                    <li>Restlets, Suitelets, Client Script, UserEvent Script, MassUpdate, Map/Reduce.</li>
                    <li>Manejo de Git y GitLab para mantener los repositorios del equipo de Desarollo Netsuite.</li>
                    <li>Crear API en Golang, para interactuar con proveedores e impactar acciones en Netsuite(crear facturas).</li>
                    <li>Ajustes de lógica y/o mejoras a proyectos en Go Lang y Java(API’s).</li>
                </ul>
            </tr>
            <tr>
                <th>Empresa: Entersol</th>
            </tr>
            <tr>
                <ul>
                    <li>Periodo: Julio/2020 – Enero/2022</li>
                    <li>Puesto: Desarrollador Netsuite / Analista TI</li>
                    <li>Actividades:</li>
                </ul>
            </tr>
            <tr>
                <ul>
                    <li>Soporte a los clientes en las diferentes aplicaciones (NetSuite, EFAC) que proporciona la empresa para realizar procesos de contabilidad (Atención a Tickets).</li>
                    <li>Creación y modificación de Plantillas HTML/PDF en NetSuite.</li>
                    <li>Creación y modificación de Reportes y Busquedas Guardadas y extracción de información mediante ODBC en NetSuite.</li>
                    <li>Creación y manipulación de Bundlers.</li>
                    <li>Creación de módulos personalizados en Netsuite para la captura de información.</li>
                    <li>Creación de scripts (suitescript 1.0 y 2.0) y Workflows para definir la lógica de uso en los registros nativos y personalizados de Netsuite.</li>
                </ul>
            </tr>
        </table>
    </section>
);

export default Experiencia; 