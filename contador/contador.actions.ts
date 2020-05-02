import { Action } from '../ngrx-fake/ngrx';

//Usar el recuder
export const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};
export const decrementarAction: Action = {
    type: 'DECREMENTAR'
};
export const multiplicarAction: Action = {
    type: 'MULTIPLICAR',    
    payload:2
};    
export const divisionAction: Action = {
    type: 'DIVISION',    
    payload:2
};
 export const resetAction: Action = {
     type: 'RESET'
 };