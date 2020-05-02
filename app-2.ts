import {Action} from '../redux0/ngrx-fake/ngrx'
import {incrementadorAction,decrementarAction,
    multiplicarAction,divisionAction,resetAction} from '../redux0/contador/contador.actions'


//crear la  funcion reducer 

function reducer( state = 10,action : Action){

    switch ( action.type ){
        case 'INCREMENTAR':
            return state += 1;
            
        case 'DECREMENTAR':
            return state -=1;
        
        case 'MULTIPLICAR':     
            return state * action.payload;
        case 'DIVISION':
            return state / action.payload;
        case 'RESET':
            return state = 0;
    
        default:
            return state;
    }}

// imprimir la funciones del recuder  
    
console.log(reducer( 10, incrementadorAction ));
console.log(reducer( 10, decrementarAction ));
console.log(reducer( 10, multiplicarAction ));
console.log(reducer( 10, divisionAction ));
console.log(reducer( 10, resetAction ));