import { GET_PROFESIONALES } from "../constants"

const initialState={
    allProfessional:[],
    message:''
}
 
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFESIONALES:
            console.log('action.payload', action.payload)
         if(action.payload.message){
            console.log('aca');
            return{
                ...state,
                 message:action.payload.message
            }
            }
            else{
                return{
                    ...state,
                    allProfessional:action.payload
                }

            }
    }
}