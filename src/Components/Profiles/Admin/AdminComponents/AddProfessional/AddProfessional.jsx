import React, { useState } from "react";

import FormAddProfessional from "./FormAddProfessional";
import { validate } from "./Validate";
//Alert notifications
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { uploadFile } from "../../../../../Firebase/Firebase";
import { postProfesionales } from "../../../../../Redux/Action/Actions";


function AddProfessional() {
  const [errors, setErrors] = useState({});
  const [imageId, setImageId] = useState({});
  const [post, setPost] = useState({
    idProfesional: "",
    nombre: "",
    apellido: "",
    celular: "",
    email: "",
    password: "",
    matricula: "",
    especialidad: "",
    imagenProfesional: "",
  });

  // //======= HANDLE SELECT ==================
  const handleSelelect = (seletedOptions) => {
    const selection = seletedOptions.map((e) => e.value).toString();
    setPost({ ...post, especialidad: selection });
    // console.log('Options selected', seletedOptions);
    console.log("Options selections======>", selection);
    // console.log('Options selections2', selection.toString().split(','));
  };

  // // ===================HANDLE IMAGE===============================================

  const handleImageId = async (e) => {
    console.log('evento imagen',e);
    //e.preventDefault();
    try {
      let url = await uploadFile(e);
      setImageId(url);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log('imagen', imageId)

  // //======================= HANDLE CHANGE=========================================
  const handleChange = (e) => {
    e.preventDefault();
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...post,
      })
    );
  };
  // //===============================================================
  let newProfesional = {
    idProfesional: post.idProfesional, 
    nombre: post.nombre
      ?.split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.toLowerCase().slice(1))
      .join(" "),
    apellido: post.apellido
      ?.split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.toLowerCase().slice(1))
      .join(" "),
    celular: post.celular,
    email: post.email,
    password: post.password,
    matricula: post.matricula,
    especialidad: post.especialidad,
    imagenProfesional: imageId,
  };
 
//==========================================================================

  let body = [
      `DNI:${newProfesional.idProfesional},`,`Nombre:${newProfesional.nombre},`,`Apellido:${newProfesional.apellido},`,`Celular: ${ newProfesional.celular},`,`Email: ${newProfesional.email},`,`Password:${newProfesional.password},`,`Matricula:${newProfesional.matricula},`,`Especialidad: "${newProfesional.especialidad},`
    ];
  

  // //=========================== HANDLE SUBMIT====================================
  
  //AGREGAR TOKEN PARA MANDAR A LA ACTION

  async function handleSubmit (e) {
    e.preventDefault();

    let error = await validate(post);
    // console.log('error de la validacion ==>', error);
    // console.log('error de la validacion cantidad ==>', Object.keys(error).length);


    if (Object.keys(error).length === 0) {
      try {
        // console.log('entre en el try del submit');
       let doc= await postProfesionales(newProfesional)
        // setShow(true);
       
        NotificationManager.success("Bien Hecho!", "Profesional Añadido", 3000);
        setPost({
            idProfesional: "",
            nombre: "",
            apellido: "",
            celular: "",
            email: "",
            password: "",
            matricula: "",
            especialidad: "",
            imagenProfesional: "",
         });
      } catch (e) {
        console.log("error de firebase", error);
      }
    } else {
      let errorA = Object.values(error).join(', ');

      NotificationManager.error(`${errorA}`, "ATENCION!", 10000);
      // setShowE(true);
      // setErr(errorA);
    }
  };

  return (
    <>


      <FormAddProfessional
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSelelect={handleSelelect}
        handleImageId={handleImageId}
        post={post}
        errors={errors}
        profesional={body}
      />
      <NotificationContainer />
    </>
  );
}

export default AddProfessional;
