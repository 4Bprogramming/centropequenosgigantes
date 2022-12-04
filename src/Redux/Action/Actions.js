import { async } from "@firebase/util";
import axios from "axios";

const BASE_URL = 'http://localhost:3001'

//post profesionales
export async function postProfesionales(body){
    try {
        let res = await axios.post(`${BASE_URL}/profesionales`, body)  
        return res;
        
    } catch (error) {
        console.log(error) 
    }        
}

//LOGIN
export async function loginAction(loginData){
    try {
        let respuestaLogin = await axios.post(`${BASE_URL}/login`, loginData)
        console.log('respuesta de login****',respuestaLogin)
    } catch (e) {
        console.log('el error de LOGIN',e)
    }
}