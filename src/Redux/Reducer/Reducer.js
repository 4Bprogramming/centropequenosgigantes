import {
  GET_PROFESIONALES,
  HORAS_CREADAS,
  POST_TURNOS,
  GET_PROFESIONAL_ID,
} from "../constants";

const initialState = {
  allProfessional: [],
  message: "",
  horasCreadas: [],
  horasCreadasParaMostar: [],
  turnosCreados: [],
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
      console.log("REDUCER HORAS_CREADAS===>", action.payload);
      if (action.payload.message) {
        return {
          ...state,
          message: action.payload.message,
        };
      } else {
        let horas = [...action.payload];
        horas.pop();
        console.log("horas reducidas", horas);
        return {
          ...state,
          horasCreadas: action.payload,
          horasCreadasParaMostar: horas,
        };
      }
    case POST_TURNOS:
      console.log("REDUCER POST_TURNOS===>", action.payload);
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
  }
};
