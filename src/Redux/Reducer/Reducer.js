

import {
  GET_PROFESIONALES,
  HORAS_CREADAS,
  POST_TURNOS,
  GET_PROFESIONAL_ID,
  GET_TURNOS,
  POST_HISTORIA,
  GET_USUARIOS,
  REGISTER,
  SESIONACTIVA,
  GET_HISTORIAS
} from "../constants";

const initialState = {
  allProfessional: [],
  message: "",
  horasCreadas: [],
  horasCreadasParaMostar: [],
  turnosCreados: [],
  todosTurnos: [],
  todosUsuarios:[],
  usuarioRegistrado:{},
  profesionalPorID:{},
  sesionAbierta: '',
  historiasClinicas:[]
};  

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //todos los profesionales
    case GET_PROFESIONALES: 
      if (action.payload.message) {
        return {
          ...state,
          message: action.payload.message,
        };
      } else {
        return {
          ...state,
          allProfessional: action.payload,
        };
      }

    case HORAS_CREADAS:
      // console.log("REDUCER HORAS_CREADAS===>", action.payload);
      if (action.payload.message) {
        return {
          ...state,
          message: action.payload.message,
        };
      } else {
        let horas = [...action.payload];
        horas.pop();
        // console.log("horas reducidas", horas);
        return {
          ...state,
          horasCreadas: action.payload,
          horasCreadasParaMostar: horas,
        };
      }
    case POST_TURNOS:
      // console.log("REDUCER POST_TURNOS===>", action.payload);
      if (action.payload.message) {
        return {
          ...state,
          message: action.payload.message,
        };
      } else {
        return {
          ...state,
          message: action.payload,
        };
      }
    case POST_HISTORIA:
      console.log("REDUCER POST_HISTORIA===>", action.payload);
      if (action.payload.message) {
        return {
          ...state,
          message: action.payload.message,
        };
      } else {
        return {
          ...state,
          message: action.payload,
        };
      }

    //profesionales por ID
    case GET_PROFESIONAL_ID:
      if (!action.payload.message) {
        return {
          ...state,
          profesionalPorID: {
            fullName: action.payload.fullName,
            celular: action.payload.celular,
            email: action.payload.email,
            especialidad: action.payload.especialidad,
            matricula: action.payload.matricula,
            turnos: action.payload.turnos,
          },
        };
      } else {
        return {
          ...state,
          message: action.payload.message,
        };
      }
      case GET_TURNOS:
        return{
          ...state,
          todosTurnos: action.payload,
        }
      case GET_USUARIOS:
        console.log('usuarios??===>', action.payload);
        return{
          ...state,
          todosUsuarios: action.payload,
        }
      case GET_HISTORIAS:
        return{
          ...state,
          historiasClinicas: action.payload
        }
  


        //usuario registrado
        case REGISTER:
          return{
            ...state,
            usuarioRegistrado:action.payload
          }

       //sesion activa
       case SESIONACTIVA:
          
          return {
            ...state,
            sesionAbierta: action.payload
          }

  }//LLAVE QUE CIERRA EL SWITCH
};
