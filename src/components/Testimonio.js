import React from 'react';
import Pablito from '../imagenes/testimonio-pablito.JPG';
import '../hojas-de-estilo/Testimonio.css';
const Testimonio = () => {
  return (
    <div className='contenedor-testimonio'>
        <img 
            className = 'imagen-testimonio' 
            src={Pablito} 
            alt="testimonio" 
        />
        <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>Pablito siempre un amigo</p>
            <p className='cargo-testimonio'>Capo de capos</p>
            <p className='texto-testimonio'>i temporibus odio officia aspernatur totam autem! Explicabo nihil pariatur optio dolore blanditiis modi obcaecati facilis ipsam. </p>
        </div>
    </div>
  )
}

export default Testimonio
