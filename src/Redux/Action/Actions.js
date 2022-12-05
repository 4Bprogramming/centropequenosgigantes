import { async } from "@firebase/util";
import axios from "axios";
import { GET_PROFESIONALES, GET_TURNOS, MESSAGE } from "../constants";

const BASE_URL = 'http://localhost:3001'

//post profesionales
export function postProfesionales(body){
    return async function(dispatch){
    try {
        let res = await axios.post(`${BASE_URL}/profesionales`, body)  
        return res;
        // return dispatch({type:MESSAGE, payload: res.data})
        
    } catch (e) {
        console.log(e.response.data.message) 
    }        
}
}  

//LOGIN
export async function loginAction(loginData){
    try {
        let respuestaLogin = await axios.post(`${BASE_URL}/login`, loginData)
        return respuestaLogin.data
    } catch (e) {
        return e.response.data.message
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
            return e.response.data.message
        }        

    }
}
export async function deleteProfesional(email, body){
        try {
            let res = await axios.put(`${BASE_URL}/altabaja/${email}`,body)
            console.log('res delete', res);  
            return res.data.message
            
        } catch (error) {
            console.log(error) 
        }        
}
//get Turnos
export function getTurnos(){
    return async function(dispatch){
        try {
            let res = await axios.get(`${BASE_URL}/turnos`)  
            return dispatch({type:GET_TURNOS, payload:res.data});
            
        } catch (error) {
            console.log(error) 
        }        

    }
}
