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
  // console.log('props==>', props);
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
  /* console.log('editForm', editFormInput) */
  async function handleClick() {
    // e.preventDefault();
    
    try {
      let body={select:'profesional'}
      // console.log('idProfesional',profData.email )
      // console.log('body',body )
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
        <Modal.Title>¿Seguro de eliminar el siguiente profesional?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
         {`Apellido y Nombre: ${profData?.fullName}`}
           
          <br />
          {`Email: ${profData?.email}`}
           
          <br />
          {`N° de contacto: ${profData?.celular}`}
          
          <br />
          
           <Button
            variant="secondary"
            className="closeBtn mt-2" 
            onClick={props.close}
          >
            Cerrar
          </Button>
          <Button variant="success" className="submitBtn mt-2" onClick={handleClick}>
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