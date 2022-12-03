import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

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

// function validate(post){
//   let erros = {};
//   if (!post.email) erros.email = alert("email is required");

//   return erros;
// }

function AddProfessional() {

  // const dispatch=useDispatch()

  const [created, setCreated] = useState("");
  const [show, setShow] = useState(false);
  const [showE, setShowE] = useState(false);
  const [err, setErr] = useState({});
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

  console.log('imagen', imageId)

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
  let profesional = Object.values(newProfesional);
  console.log('newProfesional==>', newProfesional);
//==========================================================================

  let body;
  if (
    newProfesional.idProfesional !== "" &&
    newProfesional.nombre !== "" &&
    newProfesional.apellido !== "" &&
    newProfesional.email !== ""  &&
    newProfesional.celular !== ""  &&
    newProfesional.password !== ""  &&
    newProfesional.especialidad !== "" 
  ) {
    body = [
      `DNI:${newProfesional.idProfesional},`,`Nombre:${newProfesional.nombre},`,`Apellido:${newProfesional.apellido},`,`Celular: ${ newProfesional.celular},`,`Email: ${newProfesional.email},`,`Password:${newProfesional.password},`,`Matricula:${newProfesional.matricula},`,`Especialidad: "${newProfesional.especialidad},`
    ];
  } else {
    body = ["Faltan completar Datos"];
  }

  // //=========================== HANDLE SUBMIT====================================
  
  //AGREGAR TOKEN PARA MANDAR A LA ACTION

  async function handleSubmit (e) {
    e.preventDefault();

    let error = await validate(post);
    // console.log('error de la validacion ==>', error);
    // console.log('error de la validacion cantidad ==>', Object.keys(error).length);


    if (Object.keys(error).length === 0) {
      try {
        console.log('entre en el try del submit');
       let doc= await postProfesionales(newProfesional)
        // setShow(true);

        NotificationManager.success("Bien Hecho!", "Profesional Añadido", 3000);
        // setPost({
        //   nombre: "",
        //   celular: "",
        //   email: "",
        //   rol: "",
        // });
      } catch (e) {
        console.log("error de firebase", error);
      }
    } else {
      let errorA = Object.values(error);

      setShowE(true);
      setErr(errorA);
    }
  };

  return (
    <>
      {/* {showE && (
        <div
          style={{
            paddingRight: "10%",
            paddingLeft: "25%",
            marginTop: "10px",
            fontSize: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Alert
            variant="danger"
            onClose={() => setShowE(false)}
            dismissible
            style={{ paddingRight: "8%", paddingLeft: "5%" }}
          >
            <Alert.Heading>
              <p style={{ color: "black", fontSize: "15px" }}>
                No se puede guardar el caso presenta el/los siguiente/s error/s:
              </p>
              {err?.map((el) => {
                return <ol style={{ fontSize: "15px" }}>{el}</ol>;
              })}
            </Alert.Heading>
          </Alert>
        </div>
      )} */}

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
