import { useState } from "react";

export function useLocalStorage(key, initialValue){


    const [storedValue, setStoreValue]=useState(()=>{
        try {
            const item= window.localStorage.getItem(key)
            return item? JSON.parse(item) : initialValue
        } catch (e) {
            return initialValue
        }
    })

    const setValue= value=>{
        try {
            setStoreValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            console.log(e)
        }

    }

    return [storedValue, setValue]
}

/*
para utilizarlo lo importamos en el componente a utilizar: import{useLocalStarorage} from '(donde esta guardado)'
si quiero guardar un email ejemplo:
    const[email, setEmail]= useLocalStorage('email, '')

    en el onChange ejecuto setEmail(e.targe.value)
*/