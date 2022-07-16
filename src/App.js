import React from 'react';
import './App.css';
import Testimonio from './components/Testimonio.js';

function App(props) {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Testimonios de nuestros usuarios</h1>
        <Testimonio 
          nombre='Pablo'
          pais='Colombia'
          imagen='pablito'
          cargo='Capo de capos'
          empresa='Cartel de Medellin'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
        <Testimonio 
          nombre='Lautaro'
          pais='Argentina'
          imagen='lautaro'
          cargo='Estudiante'
          empresa='Instituto Nuestra Sra. de la Misericordia'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
        <Testimonio 
          nombre='Martin'
          pais='Argentina'
          imagen='martin'
          cargo='Periodista-emprendedor-desarrollador'
          empresa='MP Data Trading'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
      </div>
    </div>
  );
}

export default App;
