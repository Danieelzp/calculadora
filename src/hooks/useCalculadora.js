import { useDispatch, useSelector } from 'react-redux';
import { encenderCalculadora, apagarCalculadora, insertarValor, borrarTodo, resolverOperacion } from '../redux/slices/calculadoraSlice';

const useCalculadora = () => {
    const input = useSelector(state => state.calculadora.input);
    const battery = useSelector(state => state.calculadora.battery);

    const dispatch = useDispatch();

    function encender(){
        dispatch(encenderCalculadora());
    }

    function apagar(){
        dispatch(apagarCalculadora());
    }

    function insertar(valor) {
        dispatch(insertarValor(valor));
    }

    function borrar() {
        dispatch(borrarTodo());
    }

    function resolver() {
        dispatch(resolverOperacion());
    }

    return [input, battery, encender, apagar, insertar, borrar, resolver];
}

export default useCalculadora