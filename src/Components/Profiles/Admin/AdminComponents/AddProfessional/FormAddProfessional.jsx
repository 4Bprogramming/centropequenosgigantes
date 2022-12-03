import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import AddModals from "../Modals/AddModals";

import SelectEspecialidades from "../SelectMultipleEspecialidades/SelectEspecialidades";
import { especialidades } from "../SelectMultipleEspecialidades/Controllers";

function FormAddProfessional({
  handleChange,
  handleSubmit,
  handleSelelect,
  handleImageId,
  post,
  profesional,
  errors,
}) {

  
  return (
    <>
      <div>
        <h2>AÑADIR PROFESIONAL</h2>
      </div>

      <Form>
        
        <FloatingLabel
          controlId="floatingInput"
          label="Dni"
          className="mb-3"
          //   required
        >
          <Form.Control
            onChange={handleChange}
            type="text"
            value={post.idProfesional}
            name={"idProfesional"}
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
          <SelectEspecialidades
            handleSelelect={handleSelelect}
            options={especialidades}
          />
        </Form.Group>

        <AddModals
          body={profesional}
          agreeBotton={handleSubmit}
          nameBottom={"Confirmar"}
          title={"Verifique si la información del profesional es correcta"}
          type={"submit"}
          titleBotton={"Guardar"}
         
        />
      </Form>
    </>
  );
}

export default FormAddProfessional;
