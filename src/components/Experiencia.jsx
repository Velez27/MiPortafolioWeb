import React from 'react';
import '../assets/styles/components/Experiencia.scss';

const Experiencia = () => (
    <section className="experiencia">
        <h3 className='experiencia_title'>Mis Conocimientos y Experiencia</h3>
        <table className="experiencia_table">
            <tr>
                <th>Empresa: Entersol</th>
            </tr>
            <tr>
                <ul>
                    <li>Periodo: Julio/2020 – Actual</li>
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
            <tr>
                <th>Empresa: Universidad de la República Mexicana (UNIREM).</th>
            </tr>
            <tr>
                <ul>
                    <li>Periodo: Octubre/2019 – Junio/2020</li>
                    <li>Puesto: Soporte Técnico.</li>
                    <li>Actividades:</li>
                </ul>
            </tr>
            <tr>
                <ul>
                    <li>Crear queries SQL para extraer información de la BD de la escuela, utilizando el software TOAD (Aplicación para administrar DB).</li>
                    <li>Trabajar con compañeros de área y de otras áreas para dar apoyo y solución a problemas relacionados a TI en cumplimiento de tiempos de entrega.</li>
                    <li>Aprender el uso de nuevo software o nuevas versiones para capacitar a personal administrativo y/o docente (SABRE, CodeBlocks, Office, Paquetería Adobe).</li>
                </ul>
            </tr>
        </table>
    </section>
);

export default Experiencia; 