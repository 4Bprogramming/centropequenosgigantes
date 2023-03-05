import React from 'react'
import KR from '@lyracom/embedded-form-glue'
function Pasarela({body, handleSubmit}) {

 const valor= Number(body.valor)*100
console.log('valor==<', valor);

  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: valor, //al colocar 9000 se cobran 90 soles
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
        // console.log('respuesta==>',res)
        KR.loadLibrary("https://api.micuentaweb.pe","99230689:testpublickey_JufZDB7BdtsOYHnpaVJ2FACUkbuHbtbSu1rEZMsAG6YKj")
        .then(({KR}) => KR.setFormConfig({
          formToken: res.formToken
          // formToken:data.formToken,
        }))
        .then(({ KR }) => KR.onSubmit(validatePayment))
        .then(({ KR }) => KR.addForm("#paymentForm"))
        .then(({ KR, result }) => KR.showForm(result.formId));
        // console.log('KR==>', KR)
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
          console.log('validado==>', res);
          handleSubmit(res)
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