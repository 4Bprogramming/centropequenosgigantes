import { async } from "@firebase/util";
import axios from "axios";
import {
  GET_PROFESIONALES,
  GET_TURNOS,
  MESSAGE,
  GET_PROFESIONAL_ID,
  HORAS_CREADAS,
  POST_TURNOS,
  POST_HISTORIA
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
export function editProfesionales(id,body, token) {
  //header sin pasarlo por parametro
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
return async function(dispatch){
  try {
    let res = await axios.put(`${BASE_URL}/editarprofesional/${id}`, body);
    // getProfesionales(token)
    // console.log('respuesta edit back=>', res);
    return res;
    // return dispatch({type:MESSAGE, payload: res.data})
  } catch (e) {
    console.log("error", e.response.data.message);
  }

}
}


//get profesionales
export  function deleteProfesional(email, body) {
  return async function(dispatch){
    try {
      // console.log('body', body);
      let res = await axios.put(`${BASE_URL}/altabaja/${email}`, body);
          
          // console.log("res delete", res);
          return res.data.message;
        } catch (error) {
          console.log(error);
        }
        
      }
    }
    export function getProfesionales(token){
      //header sin pasarlo por parametro
      // console.log('llego a get profesionales');
      axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
      
      return async function(dispatch){
        
        try {
          let res = await axios.get(`${BASE_URL}/profesionales`)
          // console.log('actualizo get profesionales==>',res);
          
          return dispatch({type:GET_PROFESIONALES, payload:res.data});
          
        } catch (e) {
          // console.log('error getPRofesionales===>', e);
          
          return dispatch({type:GET_PROFESIONALES, payload:e.response.data})
        }        
}
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
//get Turnos
export function getTurnos(token) {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  return async function (dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/turnos`);
      console.log('respuesta get turnos', res);
      return dispatch({ type: GET_TURNOS, payload: res.data });
    } catch (error) {
      console.log(error);
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
  export function subirTurnos(payload,token){
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    console.log('payload====>', payload); 
    return async function (dispatch) {
        try {
          var json = await axios.post(`${BASE_URL}/turnos`, payload);
          // console.log("recibo en action==>", json.data);
          //ACA LLAMO A getTurnos()
          return dispatch({
            type: POST_TURNOS,
            payload: json.data,
          });
        } catch (error) {
          // console.log("no recibo en action por este error==>", error);
          return dispatch({
            type: POST_TURNOS,
            payload: json.data,
          });
        }
      }
    }
  //Guardar historia clinica en base de Datos
  export function guardarHistoria(payload,token){
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    // console.log('payload historia====>', payload); 
    return async function (dispatch) {
        try {
          var json = await axios.post(`${BASE_URL}/historia`, payload);
          console.log("recibo en action historia posteada==>", json.data);
         
          return dispatch({
            type: POST_HISTORIA,
            payload: json.data,
          });
        } catch (error) {
          // console.log("no recibo en action por este error de historia==>", error);
          return dispatch({
            type: POST_HISTORIA,
            payload: json.data,
          });
        }
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