import React from 'react'
import KR from '@lyracom/embedded-form-glue'
import { useParams, useNavigate } from "react-router-dom";
function Pasarela({body, handleSubmit}) {

  const navigate = useNavigate();

 const valor= Number(body.valor)*100

const data = localStorage.getItem("usuarioDB");
const { email } = JSON.parse(data);

  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: valor, //al colocar 9000 se cobran 90 soles
      currency: "PEN",
      customer: {
        email: email,
      },
      orderId: "pedido-9",
    }),
  };
  const startForm = () => {
    fetch("http://localhost:3001/api/createPayment", header)
      .then((res) => res.json())
      .then((res) => {
        // console.log('respuesta==>',res)
        
        KR.loadLibrary("https://api.micuentaweb.pe","21153887:testpublickey_x7XzvPMuzh7n8Cx5HXpHzSpjdTIjtlQgVIhoVezfTfdk0")
        .then(({KR}) => KR.setFormConfig({
          formToken: res.formToken, 
          
          // formToken:data.formToken,
        }        ))
        
        .then(({ KR }) => KR.onSubmit(validatePayment))
        .then(({ KR }) => KR.addForm("#paymentForm"))
        .then(({ KR, result }) => KR.showForm(result.formId))
        .then(({ KR }) =>console.log(KR))
        console.log('KR==>', KR)
        
        
      });
  };


  const validatePayment = (event) => {
    fetch("http://localhost:3001/api/validatePayment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res == "Valid Payment") {
          // console.log('validado==>', res);
          handleSubmit(res)
          
        }
        // navigate('/boleta')
      });
  };


  
  
  
  return ( 
    <div>
      <button onClick={startForm}>Ingresar datos de tarjeta</button>
      <div id="paymentForm" ></div>
    </div>
  )
}

export default Pasarela