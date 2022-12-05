import { GET_PROFESIONALES } from "../constants"

const initialState={
    allProfessional:[],
    message:''
}
 
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFESIONALES:
            console.log('TODOS LOS PROFESIONALES==>', action.payload);
        return{
            ...state,
            allProfessional:action.payload
        }
    }
}