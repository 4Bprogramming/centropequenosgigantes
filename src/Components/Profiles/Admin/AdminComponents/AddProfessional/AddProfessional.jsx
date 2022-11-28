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

// function validate(post){
//   let erros = {};
//   if (!post.email) erros.email = alert("email is required");

//   return erros;
// }

function AddProfessional() {
  // const dispatch = useDispatch();
  // let namePeritos1 = useSelector((state) => state.peritosByName);
  // let peritos = useSelector((state) => state.peritos);
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
    console.log(e);
    //e.preventDefault();
    try {
      let url = await uploadFile(e);
      setImageId(url);
    } catch (err) {
      console.log(err);
    }
  };

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
    idProfesional: "",
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
  console.log("profesional", newProfesional.nombre);
  // //==========================================================================

  let body;
  if (
    profesional[0] !== "" &&
    profesional[1] !== "" &&
    profesional[2] !== "" &&
    profesional[3] !== ""
  ) {
    body = [
      `idProfesional:"",``nombre: "",``apellido:"",``celular: "",``email: "",``password:"",``matricula:"",``especialidad: "",``imagenProfesional:""`,
    ];
  } else {
    body = ["Faltan completar Datos"];
  }

  // //=========================== HANDLE SUBMIT====================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    let error = await validate(post);

    if (Object.keys(error).length === 0) {
      try {
        

        setShow(true);

        NotificationManager.success("Bien Hecho!", "Profesional Añadido", 3000);
        setPost({
          nombre: "",
          celular: "",
          email: "",
          rol: "",
        });
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
    <div>
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
    </div>
  );
}

export default AddProfessional;
