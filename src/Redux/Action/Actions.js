import { async } from "@firebase/util";
import axios from "axios";
import {
  GET_PROFESIONALES,
  GET_TURNOS,
  MESSAGE,
  GET_PROFESIONAL_ID,
  HORAS_CREADAS,
  POST_TURNOS,
  POST_HISTORIA,
  RESERVA_TURNO_ADMIN,
  GET_USUARIOS,
  REGISTER,
  SESIONACTIVA,
  GET_HISTORIAS,
} from "../constants";

//const BASE_URL = "http://localhost:3001";
const BASE_URL = "https://pequenos4b.onrender.com"

//post profesionales
export async function postProfesionales(body, token) {
  //header sin pasarlo por parametro
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  try {
    let res = await axios.post(`${BASE_URL}/profesionales`, body);
    getProfesionales(token);
    return res;
    // return dispatch({type:MESSAGE, payload: res.data})
  } catch (e) {
    console.log("error", e.response.data.message);
  }
}
export function editProfesionales(id, body, token) {
  //header sin pasarlo por parametro
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  return async function (dispatch) {
    try {
      let res = await axios.put(`${BASE_URL}/editarprofesional/${id}`, body);
      // getProfesionales(token)

      return res;
      // return dispatch({type:MESSAGE, payload: res.data})
    } catch (e) {
      return dispatch({
        type: MESSAGE,
        payload: e.response.data,
      });
    }
  };
}

//get profesionales
export function deleteProfesional(email, body) {
  return async function (dispatch) {
    try {
      let res = await axios.put(`${BASE_URL}/altabaja/${email}`, body);

      return res.data.message;
    } catch (error) {
      return dispatch({
        type: MESSAGE,
        payload: error.response.data,
      });
    }
  };
}
export function getProfesionales(token) {
  //header sin pasarlo por parametro

  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  return async function (dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/profesionales`);

      return dispatch({ type: GET_PROFESIONALES, payload: res.data });
    } catch (error) {
      return dispatch({
        type: MESSAGE,
        payload: error.response.data,
      });
    }
  };
}

//get profesional by ID
export function getProfesionaPorId(idProfesional, token) {
  // axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  return async function (dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/profesionales/${idProfesional}`);

      return dispatch({
        type: GET_PROFESIONAL_ID,
        payload: res.data,
      });
    } catch (e) {
      return dispatch({
        type: MESSAGE,
        payload: e.response.data,
      });
    }
  };
}
//get Turnos
export function getTurnos(token) {
  // axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  return async function (dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/turnos`);

      return dispatch({ type: GET_TURNOS, payload: res.data });
    } catch (error) {
      return dispatch({
        type: MESSAGE,
        payload: error,
      });
    }
  };
}
//modificar Turnos
export function modificarTurnos(payload, token) {
  // axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  return async function (dispatch) {
    try {
      let res = await axios.put(`${BASE_URL}/turnos`, payload);

      return dispatch({ type: RESERVA_TURNO_ADMIN, payload: res.data });
    } catch (error) {
      return dispatch({
        type: MESSAGE,
        payload: error.response.data,
      });
    }
  };
}
//Muestra turnos creados
export function horariosTurnosCreados(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.post(`${BASE_URL}/turnos/horas`, payload);

      return dispatch({
        type: HORAS_CREADAS,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: MESSAGE,
        payload: error.response.data,
      });
    }
  };
}

//Guardar turnos en base de Datos
export function subirTurnos(payload, token) {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  return async function (dispatch) {
    try {
      var json = await axios.post(`${BASE_URL}/turnos`, payload);

      //ACA LLAMO A getTurnos()
      return dispatch({
        type: POST_TURNOS,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: MESSAGE,
        payload: error.response.data,
      });
    }
  };
}
//Guardar historia clinica en base de Datos
export function guardarHistoria(payload, token) {
  // axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  return async function (dispatch) {
    try {
      var json = await axios.post(`${BASE_URL}/historiaclinica`, payload);

      return dispatch({
        type: POST_HISTORIA,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: MESSAGE,
        payload: error.response.data,
      });
    }
  };
}

export function getHistorias(token) {
  // axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  return async function (dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/historiaclinica`);

      return dispatch({ type: GET_HISTORIAS, payload: res.data });
    } catch (error) {
      return dispatch({
        type: MESSAGE,
        payload: error.response.data,
      });
    }
  };
}

//REGISTER
export function registerAction(resgisterData) {
  return async function (dispatch) {
    try {
      const dbResponse = await axios.post(
        `${BASE_URL}/usuarios`,
        resgisterData
      );

      return dispatch({
        type: REGISTER,
        payload: dbResponse.data,
      });
    } catch (e) {
      return dispatch({
        type: REGISTER,
        payload: e.response.data,
      });
    }
  };
}

//LOGIN
export async function loginAction(loginData) {
  try {
    let respuestaLogin = await axios.post(`${BASE_URL}/login`, loginData);

    return respuestaLogin.data;
  } catch (e) {
    return e.response.data.message;
  }
}

//USUARIOS
export function getUsuarios(token) {
  // axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  return async function (dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/usuarios`);

      return dispatch({ type: GET_USUARIOS, payload: res.data });
    } catch (error) {
      return dispatch({
        type: MESSAGE,
        payload: error.response.data,
      });
    }
  };
}
//RECUPERAR PASSWORD
export async function passwordOlvidado(body) {
  try {
    let respuestaPasswordOlvidado = await axios.post(
      `${BASE_URL}/password-olvidado`,
      body
    );
    return respuestaPasswordOlvidado.data;
  } catch (e) {
    return e.response.data;
  }
}

//RESET-PASSWORD
export async function resetPassword(body, token) {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  try {
    let respuestaResetPassword = await axios.post(
      `${BASE_URL}/resetPassword`,
      body
    );
    return respuestaResetPassword.data;
  } catch (e) {
    return e.response.data;
  }
}

//sesion activa
export function sesionActiva(token) {
  return async function (dispatch) {
    try {
      return dispatch({ type: SESIONACTIVA, payload: token });
    } catch (e) {
      console.log(e);
    }
  };
}
