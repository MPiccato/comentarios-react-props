import React from 'react';
import './App.css';
import Testimonio from './components/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Testimonios de nuestros usuarios</h1>
        <Testimonio />
      </div>
    </div>
  );
}

export default App;
