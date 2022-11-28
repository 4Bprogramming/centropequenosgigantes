import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddModals from "../Modals/AddModals";

import SelectEspecialidades from "../SelectMultipleEspecialidades/SelectEspecialidades";
import { especialidades } from "../SelectMultipleEspecialidades/Controllers";

function FormAddProfessional({
  handleChange,
  handleSubmit,
  handleSelelect,
  handleImageId,
  post,
  professional,
  errors,
}) {
  console.log('especialidades===>', especialidades);
  let style = { display: "flex", alignItems: "flex-end" };
  return (
    <div>
      <Link to="/user">
        {/* <Button variant="secondary" style={{ display: "flex" }}>
          Volver
        </Button> */}
      </Link>
      <div style={{ paddingRight: "30%", paddingLeft: "25%" }}>
        <h2>AÑADIR PROFESIONAL</h2>
      </div>

      <Form
        style={{ paddingRight: "30%", paddingLeft: "25%", marginTop: "5%" }}
      >
        {/* Nombre */}
        <FloatingLabel
          controlId="floatingInput"
          label="Dni"
          className="mb-3"
          //   required
        >
          <Form.Control
            onChange={handleChange}
            type="text"
            value={post.id}
            name={"id"}
          />
        </FloatingLabel>
        
        <FloatingLabel
          controlId="floatingInput"
          label="Nombre"
          className="mb-3"
         
        >
          <Form.Control
            onChange={handleChange}
            type="text"
            value={post.nombre}
            name={"nombre"}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Apellido"
          className="mb-3"
         
        >
          <Form.Control
            onChange={handleChange}
            type="text"
            value={post.apellido}
            name={"apellido"}
          />
        </FloatingLabel>
       
   
        <FloatingLabel
          controlId="floatingInput"
          label="celular"
          className="mb-3"
          required
        >
          <Form.Control
            type="text"
            value={post.celular}
            onChange={handleChange}
            placeholder="name@example.com"
            name="celular"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="email"
          className="mb-3"
          required
        >
          <Form.Control
            type="text"
            value={post.email}
            onChange={handleChange}
            placeholder="name@example.com"
            name="email"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="password"
          className="mb-3"
          required
        >
          <Form.Control
            type="text"
            value={post.password}
            onChange={handleChange}
            name="password"
          />
        </FloatingLabel>
        <Form.Label>Imagen de Perfil: </Form.Label>
                <Form.Control
                  type="file"
                  name="idImage"
                  onChange={(e) => handleImageId(e.target.files[0])}
                 
                />
        <FloatingLabel
          controlId="floatingInput"
          label="matricula"
          className="mb-3"
          required
        >
          <Form.Control
            type="text"
            value={post.matricula}
            onChange={handleChange}
            name="matricula"
          />
        </FloatingLabel>
 

        <Form.Group>
              <Form.Label>Especialidad: </Form.Label> 
              <SelectEspecialidades handleSelelect={handleSelelect} options={especialidades}/>         
            
  
        </Form.Group>

        <AddModals
          body={professional}
          agreeBotton={handleSubmit}
          nameBottom={"Confirmar"}
          title={"Verifique si la información del profesional es correcta"}
          type={"submit"}
          titleBotton={"Guardar"}
          style={style}
        />
      </Form>
    </div>
  );
}

export default FormAddProfessional;
