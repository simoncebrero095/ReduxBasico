
// Action es una interface
export interface Action {
    type: string;
    payload?: any;
}

export interface Reducer<T>{
(state:T,accion: Action):T  
}