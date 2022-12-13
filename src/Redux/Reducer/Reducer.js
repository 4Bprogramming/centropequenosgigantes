import { GET_PROFESIONALES, HORAS_CREADAS, POST_TURNOS } from "../constants"

const initialState={
    allProfessional:[],
    message:'',
    horasCreadas:[],
    horasCreadasParaMostar:[],
    turnosCreados:[]
}
 
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PROFESIONALES:  
         if(action.payload.message){
            
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
        case HORAS_CREADAS:
            console.log('REDUCER HORAS_CREADAS===>', action.payload)
            if(action.payload.message){
                return{
                    ...state,
                     message:action.payload.message
                }
                }
            
            else{
                let horas=[...action.payload]
                horas.pop()
                console.log('horas reducidas', horas)
                return{
                    ...state,
                    horasCreadas:action.payload,
                    horasCreadasParaMostar:horas
                }

            }
        case POST_TURNOS:
            console.log('REDUCER POST_TURNOS===>', action.payload)
            if(action.payload.message){
            
                return{
                    ...state,
                     message:action.payload.message
                }
                }
            else{
                
                return{
                    ...state,
                    message:action.payload
                }

            }


    }
}