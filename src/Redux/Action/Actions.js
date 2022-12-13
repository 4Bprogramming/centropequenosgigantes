import { async } from "@firebase/util";
import axios from "axios";
import {
  GET_PROFESIONALES,
  GET_TURNOS,
  MESSAGE,
  GET_PROFESIONAL_ID,
  HORAS_CREADAS,
  POST_TURNOS
} from "../constants";

const BASE_URL = "http://localhost:3001";

//post profesionales
export async function postProfesionales(body, token) {
  //header sin pasarlo por parametro
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  try {
    let res = await axios.post(`${BASE_URL}/profesionales`, body);
    getProfesionales(token)
    return res;
    // return dispatch({type:MESSAGE, payload: res.data})
  } catch (e) {
    console.log("error", e.response.data.message);
  }
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

//get profesionales
export function getProfesionales(token){
    
    //header sin pasarlo por parametro
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    
    return async function(dispatch){
        
        try {
            let res = await axios.get(`${BASE_URL}/profesionales`)
           
            return dispatch({type:GET_PROFESIONALES, payload:res.data});
            
        } catch (e) {
            console.log('error getPRofesionales===>', e);
            
            return dispatch({type:GET_PROFESIONALES, payload:e.response.data})
        }        
}
}
export async function deleteProfesional(email, body) {
  try {
    let res = await axios.put(`${BASE_URL}/altabaja/${email}`, body);
    console.log("res delete", res);
    return res.data.message;
  } catch (error) {
    console.log(error);
  }
}
//get Turnos
export function getTurnos() {
  return async function (dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/turnos`);
      return dispatch({ type: GET_TURNOS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

//get profesional by ID
export function getProfesionaPorId(idProfesional, token) {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  return async function (dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/profesionales/${idProfesional}`);
      return dispatch({
        type:GET_PROFESIONAL_ID,
        payload:res.data
      })
    } catch (e) {
        return dispatch({ 
            type: GET_PROFESIONAL_ID, 
            payload: e.response.data 
        });
    }
  };
}

//Muestra turnos creados
export function horariosTurnosCreados(payload) {
    console.log('payload action', payload);
    return async function (dispatch) {
      try {
        var json = await axios.post(`${BASE_URL}/turnos/horas`, payload);
        console.log("recibo en action==>", json.data);
        return dispatch({
          type: HORAS_CREADAS,
          payload: json.data,
        });
      } catch (error) {
        // console.log("no recibo en action por este error==>", error);
        return dispatch({
            type: HORAS_CREADAS,
            payload: json.data,
          });
      }
    };
  }

  //Guardar turnos en base de Datos
  export function subirTurnos(payload){
    console.log('payload====>', payload);
    return async function (dispatch) {
        try {
          var json = await axios.post(`${BASE_URL}/turnos`, payload);
          console.log("recibo en action==>", json.data);
          //ACA LLAMO A getTurnos()
          return dispatch({
            type: POST_TURNOS,
            payload: json.data,
          });
        } catch (error) {
          console.log("no recibo en action por este error==>", error);
          return dispatch({
              type: POST_TURNOS,
              payload: json.data,
            });
        }
    }
}
  
