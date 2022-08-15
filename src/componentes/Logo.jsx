import React from "react";
import LogoNestle from '../imagenes/nestle-logo.png';
import '../hojas-de-estilo/Logo.css';

function Logo () {
    return(
        <div className='nestle-logo-contenedor'>
      <img
      className='nestle-logo' 
      src={LogoNestle}
      alt='Logo de nestle' />
     </div>
    );
}

export default Logo;