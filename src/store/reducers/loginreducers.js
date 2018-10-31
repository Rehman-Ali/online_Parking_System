import {SINGUP,ERRORS} from '../actions/loginactions';

function loginReducers(state={},action) {
    switch (action.type) {
        case SINGUP:
        alert("succes");
            state.message = "succfully singup";
            return state;

        case ERRORS:
        alert("errors");
            state.message = "server was down,, try again";
            return state;
    
        default:
              return state;
    }
}

export default loginReducers;