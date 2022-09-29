import '../hojas-de-estilo/Calculadora.css';
import Boton from './Boton.js';
import Pantalla from './Pantalla.js';
import useCalculadora from '../hooks/useCalculadora';

const Calculadora = () => {
    const [input, battery, encender, apagar, insertar, borrar, resolver] = useCalculadora();
  
  return (
     <div className='contenedor-calculadora'>
      <div className="d-flex ">
        <div>
          <div className={`panel-solar
        ${battery==true ? 'panel-solar-encendido' : 
          battery==false ? 'panel-solar-apagado' : ''}`.trimEnd()}>
          </div>
        </div>
        <Boton action={encender}>ON</Boton>
        <Boton action={apagar}>OFF</Boton>
        </div>
      <Pantalla
      input={input}/>
    
      <div className='d-flex'>
        <Boton action={insertar}>7</Boton>
        <Boton action={insertar}>8</Boton>
        <Boton action={insertar}>9</Boton>
        <Boton action={borrar}>AC</Boton> 
      </div>
      <div className='d-flex'>
        <Boton action={insertar}>4</Boton>
        <Boton action={insertar}>5</Boton>
        <Boton action={insertar}>6</Boton>
        <Boton action={insertar}>/</Boton>
      </div>
      <div className='d-flex'>
        <Boton action={insertar}>1</Boton>
        <Boton action={insertar}>2</Boton>
        <Boton action={insertar}>3</Boton>
        <Boton action={insertar}>*</Boton>
      </div>
      <div className='d-flex'>
        <Boton action={insertar}>.</Boton>
        <Boton action={insertar}>0</Boton>
        <Boton action={insertar}>+</Boton>
        <Boton action={insertar}>-</Boton>
      </div>
      <div className='d-flex'>
      <Boton action={resolver}>=</Boton>
      </div>
     </div>
  );
}

export default Calculadora

