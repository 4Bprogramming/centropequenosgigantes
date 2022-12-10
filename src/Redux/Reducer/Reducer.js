import { GET_PROFESIONALES, GET_PROFESIONAL_ID } from "../constants";

const initialState = {
  allProfessional: [],
  profesionalPorID: {},
  message: "",
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

    //profesionales por ID
    case GET_PROFESIONAL_ID:
      if (!action.payload.message) {
        return {
          ...state,
          profesionalPorID: {
            fullName:action.payload.fullName,
            celular:action.payload.celular,
            email:action.payload.email,
            especialidad:action.payload.especialidad,
            matricula:action.payload.matricula,
            turnos:action.payload.turnos
          }
        };
      } else {
        return {
          ...state,
          message: action.payload.message,
        };
      }
  }
};
