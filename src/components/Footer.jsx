import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => {

    const messageFooterLeft = 'Mi Espacio en la WEB para Mostrar mis Proyectos';
    const messageFooterRight = 'Desing With 💙';

    return (
    <footer className="footer">
        <h4 className='footer_mensaje'>
            {messageFooterLeft}
        </h4>
        <h4 className='footer_by'>
            {messageFooterRight}
        </h4>
    </footer>
)};

export default Footer;
