import PruebaActionTypes from './prueba.types';

const INITIAL_STATE = {
    hidden: true
}

const pruebaReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PruebaActionTypes.TOGGLE_PRUEBA_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default pruebaReducer;