import { async } from "@firebase/util";
import axios from "axios";
import { GET_PROFESIONALES, MESSAGE } from "../constants";

const BASE_URL = 'http://localhost:3001'

//post profesionales
export function postProfesionales(body){
    return async function(dispatch){
    try {
        let res = await axios.post(`${BASE_URL}/profesionales`, body)  
        return res;
        return dispatch({type:MESSAGE, payload: res.data})
        
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
export function getProfesionales(){
    return async function(dispatch){
        try {
            let res = await axios.get(`${BASE_URL}/profesionales`)
            return dispatch({type:GET_PROFESIONALES, payload:res.data});
            
        } catch (error) {
            console.log(error) 
        }        

    }
}
