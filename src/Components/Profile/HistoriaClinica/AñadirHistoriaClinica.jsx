import React from 'react'
import { Form } from 'react-router-dom'
import EditorTexto from './EditorTexto'
import { useState } from 'react'

function AñadirHistoriaClinica(props) {
  //por props debería venir fecha, hora, usuarioEmail, nombre paciente, dni paciente
  console.log('props que llegan');
  const data = localStorage.getItem("usuarioDB");
  const tokenLocal = localStorage.getItem("token");
  const {
    celular, 
    email,
    fullName,
    idProfesional,
    imagenProfesional,
    matricula,
  } = JSON.parse(data);
  const token = JSON.parse(tokenLocal);
  const [post, setPost]=useState({
    mensaje:'',
    fecha:props.fecha,
    hora:props.hora,
    usuarioEmail:props.usuarioEmail,
    paciente:props.paciente,
    documento:props.documento,
    profesional:fullName
  })
  function handleChange(e){
    setPost({...post, mensaje:e.target.value})
    console.log('cambio==>', e.target.name)
  }
  function handleSubmit(e){
    if(post.mensaje!==''){
      try {
        let body={
          mensaje:post.mensaje,
          fecha:post.fecha,
          hora: post.hora,
          usuarioEmail:post.usuarioEmail,
          nombreProfesional: post.profesional
        }

        
      } catch (error) {
        
      }
    }else{

      console.log('voy a subir e==>', e)
    }
  }
  return (
    <>
    AñadirHistoriaClinica
      <EditorTexto 
      data={props}
      handleChange={handleChange} 
      handleSubmit={handleSubmit}
      post={post}
      />
 
    
    </>
  )
}

export default AñadirHistoriaClinica