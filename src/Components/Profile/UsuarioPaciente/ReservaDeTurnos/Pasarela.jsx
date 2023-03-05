import React from 'react'
import KR from '@lyracom/embedded-form-glue'
<<<<<<< HEAD
function Pasarela({body, handleSubmit}) {
=======
import { useNavigate } from "react-router-dom"
function Pasarela() {

 
>>>>>>> d22b49fe293474cc539c5fc3c43fa1d9475b4f55

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
        console.log('respuesta==>',res)
        
        KR.loadLibrary("https://api.micuentaweb.pe","99230689:testpublickey_JufZDB7BdtsOYHnpaVJ2FACUkbuHbtbSu1rEZMsAG6YKj")
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

//   const docum = (event) => {
    

//   }


//   <script type="text/javascript">
//   $(document).ready(function() {
//         KR.onError( function(event) {
//           var code = event.errorCode;
//           var message = event.errorMessage;
//           var myMessage = code + ": " + message;

//           try {
//             /* if client answer exists, a refused transaction has been created */
//             /* it's not always the case. For example, if the form is empty,    */
//             /* error is raised before transaction creation                     */
//             var uuid = event.metadata.answer.clientAnswer.transactions[0].uuid;
//             myMessage += "\ntansaction uuid: " + uuid;
//           } catch{}

//           document.getElementsByClassName("customerror")[0].innerText = myMessage;
//         });
//   });
// </script>

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