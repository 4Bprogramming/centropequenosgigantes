import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useDispatch, useSelector } from "react-redux";


//Alert notifications
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { deleteProfesional, getProfesionales, getTurnos } from "../../../../../../Redux/Action/Actions";



function DeleteProfesional(props) {
  let profesionales = useSelector((state) => state.allProfesionales);
 
  const profData = props?.profesionalData[0]

 
  const  [editFormInput, setEditFormInput] = useState({});
  const dispatch = useDispatch();
useEffect(()=>{
      setEditFormInput({
          // nombre:profData[]?.nombre,
          // email:profData?.email,
          // celular:profData?.celular,
          // especialidad:profData?.especialidad,
      })
},[props])



  //========== HANDLE SUBMIT =======
  
  async function handleClick() {
    // e.preventDefault();
    
    try { 
      let body={select:'profesional'}
    
      let token= props.token
     let edit = await dispatch(deleteProfesional(profData.email,body));
     await dispatch(getProfesionales(token)   ) 
      await dispatch(getTurnos(token))
      //it closes the Modal after submit
      props.close() 
      
      //this commando triggers the alert! 
    NotificationManager.success('Bien Hecho!', 'Profesional eliminado!',3000);  
      // //actualiza el estado con el cambio
      // props.actualizar()
   
  } catch (error) {console.log('error de catch', error)}
}



return (
  <>
    
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header closeButton>
        <Modal.Title>¿Seguro desea <span style={{"color":"red","fontStyle":"italic"}}>eliminar</span> el siguiente profesional?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div>
             <strong >Apellido y Nombre:</strong> <span style={{"fontStyle":"italic"}}>{`${profData?.fullName}`}</span>
          </div> 
           
          <div>
             <strong >Email:</strong> <span style={{"fontStyle":"italic"}}>{`${profData?.email}`}</span>
          </div> 
          
          <div>
             <strong >N° de contacto:</strong> <span style={{"fontStyle":"italic"}}>{`${profData?.celular}`}</span>
          </div> 
           <Button
            variant="secondary"
            className="closeBtn " 
            onClick={props.close}
            style = {{"marginTop":10}}
          >
            Cerrar
          </Button>
          <Button variant="success" style = {{"marginLeft":3,"marginTop":10}} className="submitBtn" onClick={handleClick}>
            Eliminar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>

    {/* alert after submit */}
      <NotificationContainer/>  
    
  </>
);
}

export default DeleteProfesional