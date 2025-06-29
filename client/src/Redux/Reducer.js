import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./action"


const initialState = {
    data : null,
    loading : false,
    error : null,
    // isAuthenticated : false,
    // user : null,
    // token : null
}

const dataReducer = (state = initialState, action) =>{
        switch(action.type){
            case FETCH_DATA_REQUEST :
                return {...state, loading : true};
            case FETCH_DATA_SUCCESS :
                return {...state, loading : false, data : action.payload};
            case FETCH_DATA_FAILURE :
                return {...state, loading : false, error : action.payload};
            // case "LOGOUT" : 
            //     return {...state, isAuthenticated : false, user : null, token : null};
            // case "LOGIN_SUCCESS" :
            //     return {...state, isAuthenticated : true, user : action.payload.user, token : action.payload.token}
            default : return state
        }
}

export default dataReducer