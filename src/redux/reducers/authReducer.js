import {
  FORGET_PASSWORD_PENDING,
  FORGET_PASSWORD_REJECTED,
  FORGET_PASSWORD_SUCCESS,
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_SUCCESS,
  RESET_AUTH_STATE,
} from "../actions/types/authType";

const initialState = {
  isLoading: false,
  accessToken: null,
  error: null,
  flag: false,
};

//Way 1:
// const authReducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case LOGIN_PENDING:
//     case FORGET_PASSWORD_PENDING:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         accessToken: payload,
//       };
//     case FORGET_PASSWORD_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         flag: true,
//       };
//     case RESET_AUTH_STATE:
//       return {
//         ...state,
//         isLoading: false,
//         accessToken: null,
//         error: null,
//         flag: false,
//       };
//     case FORGET_PASSWORD_REJECTED:
//     case LOGIN_REJECTED:
//       return {
//         ...state,
//         isLoading: false,
//         error: payload,
//       };
//     default:
//       return state;
//   }
// };

//`Way 2:
const authReducer =(state = initialState , action){
  const authHandlers = {
    [LOGIN_PENDING]:()=>({...state, isLoading:true} ),
    [FORGET_PASSWORD_PENDING]:()=>({...state, isLoading:true} ),
    [LOGIN_SUCCESS]:()=>({...state, isLoading:false, accessToken:action.payload} ),
    [FORGET_PASSWORD_SUCCESS]:()=>({...state, isLoading:false, flag:true} ),
    [RESET_AUTH_STATE]:()=>({...state, isLoading:false, accessToken:null, error:null, flag:false} ),
    [FORGET_PASSWORD_REJECTED]:()=>({...state, isLoading:false, error:action.payload} ),
    [LOGIN_REJECTED]:()=>({...state, isLoading:false, error:action.payload} ),
  };
  return authHandlers[action.type] ? authHandlers[action.type]():state;
};

export default authReducer;
