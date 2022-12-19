import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import AddModals from "../Modals/AddModals";
import styles from './AddProfesional.module.css';
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
        <h2 className={styles.addProfesionalH2}>Añadir Profesionales</h2>
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
            name="apellido"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Celular"
          className="mb-3"
          required
        >
          <Form.Control
            type="text"
            value={post.celular}
            onChange={handleChange}
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
            name="email"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Password"
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

        <Form.Control      
          type="file"
          name="idImage"
          onChange={(e) => handleImageId(e.target.files[0])}
          className="mb-3"
          
        />

        <FloatingLabel
          controlId="floatingInput"
          label="Matricula"
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
