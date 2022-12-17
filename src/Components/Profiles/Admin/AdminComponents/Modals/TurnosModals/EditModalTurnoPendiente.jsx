import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


//Alert notifications
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { uploadFile } from "../../../../../../Firebase/Firebase";
import ModalFormEdit from "./ModalFormEdit";
import { editProfesionales, getProfesionales } from "../../../../../../Redux/Action/Actions";


const EditModalTurnoPendiente = (props) => {
    // const TurnoData = props.TurnoData[0];
    // let especialidadTrae=TurnoData?.especialidad?.split(',')
    // let optionsDefault= especialidadTrae?.map(e=>{return({
    //   label:e, value:e
    // })})
    const token=props.token

    const  [editFormInput, setEditFormInput] = useState({});
    const dispatch = useDispatch();
  useEffect(()=>{
        setEditFormInput({
          //  idProfesional:TurnoData?.idProfesional,
          //   nombre:TurnoData?.nombre,
          //   apellido:TurnoData?.apellido,
          //   email:TurnoData?.email,
          //   celular:TurnoData?.celular,
          //   matricula:TurnoData?.matricula,
          //   especialidades:optionsDefault,
          //   imageId:TurnoData?.imagenProfesional
        })
  },[props])
  
  
  //========== HANDLE CHANGE =======
  function handleOnChange(e) {
    e.preventDefault();
    if (e.target.value !== 'undefined') {
      setEditFormInput({ ...editFormInput, [e.target.name]: e.target.value });
    }
    else{
      // setEditFormInput({...editFormInput,[e.target.name]:TurnoData[e.target.name]})
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
  // console.log('que es??==>', typeof esto);
  // console.log('Array.isArray(esto)==>',Array.isArray(esto));
  if(Array.isArray(editFormInput.especialidades)){
    let especialidadesSinCambios = editFormInput.especialidades?.map((e) => e.value).toString();
    setEditFormInput({ ...editFormInput, especialidades: especialidadesSinCambios })
  }
  let newProfesional = {
    // idProfesional: editFormInput.idProfesional, 
    // nombre: editFormInput.nombre
    // ?.split(" ")
    // .map((el) => el.charAt(0).toUpperCase() + el.toLowerCase().slice(1))
    // .join(" "),
    // apellido: editFormInput.apellido
    // ?.split(" ")
    // .map((el) => el.charAt(0).toUpperCase() + el.toLowerCase().slice(1))
    // .join(" "),
    // celular: editFormInput.celular,
    // email: editFormInput.email,
    // password: editFormInput.password,
    // matricula: editFormInput.matricula,
    // especialidad: editFormInput.especialidades,
    // imagenProfesional: editFormInput.imageId,
  };
  
  // console.log('editForm Especialidades==>', editFormInput.especialidades);
  //========== HANDLE SUBMIT =======
  /* console.log('editForm', editFormInput) */
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log('evento trae===>',e);
    try {
        // console.log('newProfesional==>', newProfesional);

        //it closes the Modal after submit
        // await dispatch(editProfesionales(TurnoData.idProfesional, newProfesional, token)) 
        //actualiza el estado con el cambio
        // await dispatch(getProfesionales(token)) 
        //this commando triggers the alert! 
        NotificationManager.success('Profesional actualizado!','Bien Hecho!',3000);  
        props.close()
              
        
    } catch (error) {console.log('error de catch',e)}
  }

  return (
    <>
      <ModalFormEdit editFormInput={editFormInput} handleOnChange={handleOnChange}
       handleSubmit={handleSubmit} show={props.show} onHide={props.close} TurnoData={props.TurnoData} onClick={props.close}/>
       
      {/* alert after submit */}
      <NotificationContainer/>
      
      
    </>
  );
};
export default EditModalTurnoPendiente;
