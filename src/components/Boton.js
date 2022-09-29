import '../hojas-de-estilo/Boton.css';

function Boton(props) {

  //logica con el fin de darle estilos
  
  const esOperador = (valor) => {
    return isNaN(valor) && (valor != '.') && (valor != '=') && (valor != 'AC') && (valor != 'ON') && (valor != 'OFF');
  };

  const esIgual = (valor) => {
    return valor == '=';
  };

  const esBorrar = (valor) => {
    return valor == 'AC';
  };

  const esEncender = (valor) => {
    return (valor == 'ON');
  };

  const esApagar = (valor) => {
    return valor == 'OFF';
  };

    return(
        <div 
        className={`boton-contenedor 
        ${esOperador(props.children) ? 'boton-operador' : 
          esIgual(props.children) ? 'boton-igual' : 
          esBorrar(props.children) ? 'boton-borrar' :
          esEncender(props.children) ? 'boton-encender' :
          esApagar(props.children) ? 'boton-apagar' : ''}`.trimEnd()}
        onClick={() => props.action(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;