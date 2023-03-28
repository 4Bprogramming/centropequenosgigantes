import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


//Alert notifications
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { uploadFile } from "../../../../../../Firebase/Firebase";
import ModalFormEdit from "./ModalFormEdit";
import { editProfesionales, getProfesionales } from "../../../../../../Redux/Action/Actions";


const EditModalProfesional = (props) => {
    const profesionalData = props.profesionalData[0];
    let especialidadTrae=profesionalData?.especialidad?.split(',')
    let optionsDefault= especialidadTrae?.map(e=>{return({
      label:e, value:e
    })})
    const token=props.token

    const  [editFormInput, setEditFormInput] = useState({});
    const dispatch = useDispatch();
  useEffect(()=>{
        setEditFormInput({
           idProfesional:profesionalData?.idProfesional,
            nombre:profesionalData?.nombre,
            apellido:profesionalData?.apellido,
            email:profesionalData?.email,
            celular:profesionalData?.celular,
            matricula:profesionalData?.matricula,
            especialidades:optionsDefault,
            imageId:profesionalData?.imagenProfesional
        })
  },[props])
  
  
  //========== HANDLE CHANGE =======
  function handleOnChange(e) {
    e.preventDefault();
    if (e.target.value !== 'undefined') {
      setEditFormInput({ ...editFormInput, [e.target.name]: e.target.value });
    }
    else{
      setEditFormInput({...editFormInput,[e.target.name]:profesionalData[e.target.name]})
    }
  }
  
  const handleImageId = async (e) => {
  
    try {
      let url = await uploadFile(e);
      setEditFormInput({ ...editFormInput,imageId:url});
    } catch (err) {
      console.log(err); 
    }
  };
  //========== HANDLE SELECT =======
  const handleSelect = (seletedOptions) => {
    const selection = seletedOptions.map((e) => e.value).toString();
    setEditFormInput({ ...editFormInput, especialidades: selection });
  };
  let esto=editFormInput.especialidades
  
  if(Array.isArray(editFormInput.especialidades)){
    let especialidadesSinCambios = editFormInput.especialidades?.map((e) => e.value).toString();
    setEditFormInput({ ...editFormInput, especialidades: especialidadesSinCambios })
  }
  let newProfesional = {
    idProfesional: editFormInput.idProfesional, 
    nombre: editFormInput.nombre
    ?.split(" ")
    .map((el) => el.charAt(0).toUpperCase() + el.toLowerCase().slice(1))
    .join(" "),
    apellido: editFormInput.apellido
    ?.split(" ")
    .map((el) => el.charAt(0).toUpperCase() + el.toLowerCase().slice(1))
    .join(" "),
    celular: editFormInput.celular,
    email: editFormInput.email,
    password: editFormInput.password,
    matricula: editFormInput.matricula,
    especialidad: editFormInput.especialidades,
    imagenProfesional: editFormInput.imageId,
  };
  
  //========== HANDLE SUBMIT =======
 
  async function handleSubmit(e) {
    e.preventDefault();

    try {
        

        //it closes the Modal after submit
        await dispatch(editProfesionales(profesionalData.idProfesional, newProfesional, token)) 
        //actualiza el estado con el cambio
        await dispatch(getProfesionales(token)) 
        //this commando triggers the alert! 
        NotificationManager.success('Profesional actualizado!','Bien Hecho!',3000);  
        props.close()
              
        
    } catch (error) {console.log('error de catch',e)}
  }

  return (
    <>
      <ModalFormEdit editFormInput={editFormInput} optionsDefault={optionsDefault} especialidadTrae={especialidadTrae} handleOnChange={handleOnChange} handleImageId={handleImageId} handleSelect={handleSelect}
       handleSubmit={handleSubmit} show={props.show} onHide={props.close} profesionalData={profesionalData} onClick={props.close}/>
       
      {/* alert after submit */}
      <NotificationContainer/>
      
      
    </>
  );
};
export default EditModalProfesional;
