import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


// import FormAddProfessional from "./FormAddProfessional";
import { validate } from "./Validate";
//Alert notifications



// function validate(post){    
//   let erros = {};
//   if (!post.email) erros.email = alert("email is required");
  
//   return erros;
// }
 

function AddProfessional() {
  // const dispatch = useDispatch();
  // let namePeritos1 = useSelector((state) => state.peritosByName);
  // let peritos = useSelector((state) => state.peritos);
  // const [created, setCreated]= useState('')
  // const [show,setShow]=useState(false)
  // const [showE, setShowE]=useState(false)
  // const [err, setErr]=useState({})
  // const [errors, setErrors] = useState({});

  // const [post, setPost] = useState({
  //   nombre: "",
  //   celular: "",
  //   email: "",
  //   rol: "",
  // });

  // //======= HANDLE SELECT ==================
  // let handleSelect = (value, action) => {
  //   if (action.name === "rol") {
  //     setPost({
  //       ...post,
  //       rol: value.value,
  //     });
  //   }
  // }
  // //================================================================
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setPost({
  //     ...post,
  //     [e.target.name]: e.target.value,
  //   });
  //   setErrors(validate({                 
  //     ...post,                        
  //   }));
  // };
  // //===============================================================
  // let newPerito = {
  //   nombre: post.nombre?.split(' ')
  //     .map((el) => el.charAt(0).toUpperCase() + el.toLowerCase().slice(1))
  //     .join(" "),
  //   celular: "+54" + post.celular,
  //   email: post.email,
  //   rol: post.rol,
  // };
  // let perito = Object.values(newPerito);
  // //console.log('perito', newPerito.nombre)
  // //==========================================================================

  // let body;
  // if (
  //   perito[0] !== "" &&
  //   perito[1] !== "" &&
  //   perito[2] !== "" &&
  //   perito[3] !== ""
  // ) {
  //   body = [
  //     `Apellido y Nombre : ${perito[0]}`,
  //     `Número de Contacto: ${perito[1]}`,
  //     `Email: ${perito[2]}`,
  //     `Rol Asignado: ${perito[3]}`,
  //   ];
  // } else {
  //   body = ["Faltan completar Datos"];
  // }

  // //================================================================
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   let error = await validate(post);

  //   if (Object.keys(error).length === 0) {
  //     try {
  //       await createPer(newPerito);
  //       let peritoWhatsap = newPerito;
  //       let body = {
  //         token: "ppxsdnbulhx73mnv",
  //         to: `${peritoWhatsap.celular}`,
  //         body: `${peritoWhatsap.nombre} ya puedes registrarte en el sistema`,
  //         priority: "10",
  //       };
  //        dispatch(postWhatsapp(body)); 
  //       setCreated(peritoWhatsap.nombre)
  //       setShow(true)
  //       const message= peritoWhatsap.nombre + 'Fue añadido correctamente'
      
  //       NotificationManager.success('Bien Hecho!', 'Perito Añadido',3000);
  //       setPost({
  //         nombre: "",
  //         celular: "",
  //         email: "",
  //         rol: "",
  //       });
  //     } catch (e) {
  //       console.log("error de firebase", error);
  //     }
  //   } else {
  //     let errorA = Object.values(error);
  //     //console.log('errorA',errorA)
  //     setShowE(true)
  //     setErr(errorA)
  //   //   alert(`No se puede guardar el caso presenta el/los siguiente/s error/s:
  //   //        ${errorA}    
  //   // `);
  //   }
  // };
  // //console.log('created', created);

  return(
  <div style={{ paddingTop: "0%" }}>
    <h1>Añadir Profesional</h1>
{/*     
{
        showE &&
        <div style={{     paddingRight: '10%',
            paddingLeft: '25%',
            marginTop: '10px',
            fontSize: '20px',
            display: 'flex',
            justifyContent: 'space-between'}}>
        <Alert variant="danger" onClose={() => setShowE(false)} dismissible style={{ paddingRight: "8%", paddingLeft: "5%" }}>
        <Alert.Heading>
            <p style={{color:'black', fontSize:'15px'}}>No se puede guardar el caso presenta el/los siguiente/s error/s:</p>
                 {
                 err?.map(el=>{
                    return <ol style={{fontSize:'15px'}}>{el}</ol>
                 })
                 }
            
    </Alert.Heading>
        
      </Alert>
        </div>

}
     
      <FormAddProfessional
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSelect={handleSelect}
        post={post}
        errors={errors}
        perito={body}
        style={{ paddingRight: "30%", paddingLeft: "25%", marginTop: "20px" }}
      />
      <NotificationContainer/>  */}
    </div>


  )
}

export default AddProfessional;
