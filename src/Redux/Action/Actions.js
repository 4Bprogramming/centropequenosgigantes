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