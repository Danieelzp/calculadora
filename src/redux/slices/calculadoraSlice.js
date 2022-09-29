import { createSlice } from "@reduxjs/toolkit";
import { evaluate } from 'mathjs';

const initialState = {
    input: '',
    battery: false,
}

export const calculadoraSlice = createSlice({
    name: "calculadora",
    initialState,
    reducers: {
        encenderCalculadora: (state) => {
            state.battery = true;
            state.input = 0;
        },

        apagarCalculadora: (state) => {
            state.battery = false;
            state.input = '';
        },

        insertarValor: (state, action) => {
            if(state.battery){
                if(state.input==0 || state.input=='Syntax Error'){
                    state.input = action.payload;
                    return;
                }
                state.input += action.payload;
            }
        },

        borrarTodo: (state) => {
            if(!state.battery){
                return;
            }
            state.input = 0;
        },

        resolverOperacion: (state) => {
            if(state.battery){
                if(state.input){
                    try {
                        state.input = evaluate(state.input);
                      }
                      catch(err) {
                        state.input = 'Syntax Error';
                      }
                }
            }
        },
    }
});

export const { encenderCalculadora, apagarCalculadora, insertarValor, borrarTodo, resolverOperacion} = calculadoraSlice.actions;

export default calculadoraSlice.reducer;