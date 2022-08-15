import './App.css';
import Logo from './componentes/Logo.jsx';
import Boton from './componentes/Boton.jsx';
import BotonClear from './componentes/BotonClear.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState(''); 

  const insertarValor = valor => {
    setInput(input + valor);
  };

  const resolverOperacion = () => {
    if(input){
      setInput(evaluate(input));
    } else{
      alert("Por favor ingrese valores");
    }
  };

  return (
    <div className='App'>
      <Logo/>
     <div className='contenedor-calculadora'>
      <Pantalla
      input={input}/>
      <div className='fila'>
        <Boton manejarClic={insertarValor}>1</Boton>
        <Boton manejarClic={insertarValor}>2</Boton>
        <Boton manejarClic={insertarValor}>3</Boton>
        <Boton manejarClic={insertarValor}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={insertarValor}>4</Boton>
        <Boton manejarClic={insertarValor}>5</Boton>
        <Boton manejarClic={insertarValor}>6</Boton>
        <Boton manejarClic={insertarValor}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={insertarValor}>7</Boton>
        <Boton manejarClic={insertarValor}>8</Boton>
        <Boton manejarClic={insertarValor}>9</Boton>
        <Boton manejarClic={insertarValor}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={resolverOperacion}>=</Boton>
        <Boton manejarClic={insertarValor}>0</Boton>
        <Boton manejarClic={insertarValor}>.</Boton>
        <Boton manejarClic={insertarValor}>/</Boton>
      </div>
      <div className='fila'>
        <BotonClear
        borrar={() => setInput('')}>Borrar</BotonClear>
      </div>
     </div>
    </div>
  );
}

export default App;
