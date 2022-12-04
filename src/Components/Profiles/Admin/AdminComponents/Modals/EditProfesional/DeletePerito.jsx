import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useDispatch, useSelector } from "react-redux";
import "../EditCase/TableTestModal.css"

//Alert notifications
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';



function DeleteProfesional(props) {
  let profesionales = useSelector((state) => state.allProfesionales);

  const profData = props.profesionalData[0];

 
  const  [editFormInput, setEditFormInput] = useState({});
  const dispatch = useDispatch();
useEffect(()=>{
      setEditFormInput({
          nombre:profData?.nombre,
          email:profData?.email,
          celular:profData?.celular,
          especialidad:profData?.especialidad,
      })
},[props])



  //========== HANDLE SUBMIT =======
  /* console.log('editForm', editFormInput) */
  async function handleSubmit(e) {
    e.preventDefault();
    console.log('idPerito',props.profData[0].id )
    
    try {
     
      // let edit = await deleteProfesional(props.profData[0].id);    
      
      //it closes the Modal after submit
      props.close()
      
      //this commando triggers the alert! 
      NotificationManager.success('Bien Hecho!', 'Profesional eliminado!',3000);  
      //actualiza el estado con el cambio
      props.actualizar()
      
     
      
      
  } catch (error) {console.log('error de catch',e)}
}


return (
  <>
    
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header closeButton>
        <Modal.Title>¿Seguro de eliminar el siguiente profesional?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
         {`Apellido y Nombre: ${props.profData[0]?.nombre}`}
           
          <br />
          {`Email: ${props.profData[0]?.email}`}
           
          <br />
          {`N° de contacto: ${props.profData[0]?.celular}`}
          
          <br />
          
           <Button
            variant="secondary"
            className="closeBtn mt-2" 
            onClick={props.close}
          >
            Cerrar
          </Button>
          <Button variant="success" className="submitBtn mt-2" type="submit">
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