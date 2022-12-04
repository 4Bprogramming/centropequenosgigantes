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
        
    } catch (error) {
        console.log(error) 
    }  
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
