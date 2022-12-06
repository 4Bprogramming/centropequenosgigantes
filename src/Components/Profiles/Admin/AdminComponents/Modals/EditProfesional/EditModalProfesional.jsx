import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Select from "react-select"
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { especialidades } from "../../SelectMultipleEspecialidades/Controllers";



//Alert notifications
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const EditModalProfesional = (props) => {
    let profesional = useSelector((state) => state.allProfessional);
    const profesionalData = props.profesionalData[0];


    const  [editFormInput, setEditFormInput] = useState({});
    const dispatch = useDispatch();
  useEffect(()=>{
        setEditFormInput({
            nombre:profesionalData?.nombre,
            email:profesionalData?.email,
            celular:profesionalData?.celular,
            especialidades:profesionalData?.especialidades,
        })
  },[props])
  

  
  //========== HANDLE CHANGE =======
  function handleOnChange(e) {
      e.preventDefault();
      if (e.target.value !== 'undefined') {
          setEditFormInput({ ...editFormInput, [e.target.name]: e.target.value });
          console.log('******************el estadoo****',editFormInput)
        }
        else{
            let  nameL = e.target.name
            setEditFormInput({...editFormInput,[e.target.name]:profesionalData[e.target.name]})
        }
    }
//========== HANDLE SELECT =======
    let handleSelect = (value, action) => {
     
      if (action.name === "especialidades") {
        setEditFormInput({
          ...editFormInput,
          especialidades: value.value,
        });
      }
      
  
    };
    let newProfesional = {
      nombre: editFormInput.nombre?.split(' ')
        .map((el) => el.charAt(0).toUpperCase() + el.toLowerCase().slice(1))
        .join(" "),
      celular: editFormInput.celular,
      email: editFormInput.email,
      rol: editFormInput.especialidad,
    };
   

    //========== HANDLE SUBMIT =======
    /* console.log('editForm', editFormInput) */
    async function handleSubmit(e) {
      e.preventDefault();
      
      try {
       
        // let edit = await updatePeritos(props.caseData[0].id, newPerito);
        
      
      //  console.log('caseData[0].id',caseData[0].id)
      // let peritoWhatsap = peritos.find(
      //   (el) => el.nombre === editFormInput.perito
      //   );
        
        // setTimeout(()=>{ props.actualizar()}, 2500)
       
        
        
        //it closes the Modal after submit
        props.close()
        
        //this commando triggers the alert! 
        NotificationManager.success('Bien Hecho!', 'Campo actualizado!',3000);  
        //actualiza el estado con el cambio
        props.actualizar()
        
        // let body = {
        //   token: "ppxsdnbulhx73mnv",
        //   to: `${peritoWhatsap.celular}`,
        //   body: `${peritoWhatsap.nombre} sus datos han sido modificados ${editFormInput.Numero}`,
        //   priority: "10",
        // };
        // dispatch(postWhatsapp(body));
        
        
    } catch (error) {console.log('error de catch',e)}
  }

  
  return (
    <>
      
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Edite la informacion del Profesional </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder={`Apellido y Nombre: ${props.profesionalData[0]?.nombre}`}
              name="nombre"
              value={editFormInput.nombre}
              onChange={handleOnChange}
            />
            <br />
            <Form.Control
              type="text"
              placeholder={`Email: ${props.profesionalData[0]?.email}`}
              name="email"
              value={editFormInput.email}
              onChange={handleOnChange}
            />
            <br />
            <Form.Control
              type="text"
              placeholder={`N° de contacto: ${props.profesionalData[0]?.celular}`}
              name="celular"
              value={editFormInput.celular}
              onChange={handleOnChange}
            />
            <br />
            <Select
            // onChange={handleSelect}
            // name={"rol"}
            // options={rol}
            // placeholder="Seleccione un rol"
            // styles={customStyles1}
            // defaultValue={{ label:caseData?.rol,value:caseData?.rol }}
          />
             <Button
              variant="secondary"
              className="closeBtn mt-2" 
              onClick={props.close}
            >
              Cerrar
            </Button>
            <Button variant="success" className="submitBtn mt-2" type="submit">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* alert after submit */}
        <NotificationContainer/>  
      
    </>
  );
};
export default EditModalProfesional;
