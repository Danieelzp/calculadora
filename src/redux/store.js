import { configureStore } from '@reduxjs/toolkit';
import calculadoraSlice from './slices/calculadoraSlice';

export const store = configureStore({
    reducer: {
        calculadora: calculadoraSlice,
    },
});