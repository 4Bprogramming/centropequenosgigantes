import React from 'react'
import KR from '@lyracom/embedded-form-glue'
function Pasarela() {

 


  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: 8000, //al colocar 9000 se cobran 90 soles
      currency: "PEN",
      customer: {
        email: "example9@gmail.com",
      },
      orderId: "pedido-9",
    }),
  };
  const startForm = () => {
    fetch("http://localhost:3001/api/createPayment", header)
      .then((res) => res.json())
      .then((res) => {
        console.log('respuesta==>',res)
        KR.loadLibrary("https://api.micuentaweb.pe","99230689:testpublickey_JufZDB7BdtsOYHnpaVJ2FACUkbuHbtbSu1rEZMsAG6YKj")
        .then(({KR}) => KR.setFormConfig({
          formToken: res.formToken
          // formToken:data.formToken,
        }))
        .then(({ KR }) => KR.onSubmit(validatePayment))
        .then(({ KR }) => KR.addForm("#paymentForm"))
        .then(({ KR, result }) => KR.showForm(result.formId));
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
     .then((res)=>console.log('res====>>>>>',res)) 
      .then((res) => {
        if (res == "Valid Payment") {
          document.getElementById("paymentForm").innerHTML =
            "<h1>Pago exitoso</h2>";
        }
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