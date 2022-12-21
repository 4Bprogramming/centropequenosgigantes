import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { especialidades } from "../../SelectMultipleEspecialidades/Controllers";
import SelectEspecialidades from "../../SelectMultipleEspecialidades/SelectEspecialidades";

const ModalFormEdit = ({editFormInput, optionsDefault,  handleOnChange, handleImageId,handleSelect, handleSubmit, show, onHide, profesionalData, onClick}) => {
 
  return (
    <>
      
      <Modal show={show} onHide={onHide}> 
        <Modal.Header closeButton>
          <Modal.Title>Edite la informacion del Profesional </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          <Form.Label>D.N.I: </Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="text"
            value={editFormInput.idProfesional}
            name={"idProfesional"}
          />
        <br />
        <Form.Label>Nombre: </Form.Label>
            <Form.Control
              type="text"
              placeholder={`Nombre: ${profesionalData?.nombre}`}
              name="nombre"
              value={editFormInput.nombre}
              onChange={handleOnChange}
            />
            <br />
            <Form.Label>Apellido: </Form.Label>
            <Form.Control
              type="text"
              placeholder={`Apellido: ${profesionalData?.nombre}`}
              name="apellido"
              value={editFormInput.apellido}
              onChange={handleOnChange}
            />
            <br />
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="text"
              placeholder={`Email: ${profesionalData?.email}`}
              name="email"
              value={editFormInput.email}
              onChange={handleOnChange}
            />
            <br />
            <Form.Label>N° de contacto: </Form.Label>
            <Form.Control
              type="text"
              placeholder={`N° de contacto: ${profesionalData?.celular}`}
              name="celular"
              value={editFormInput.celular}
              onChange={handleOnChange}
            />
            <br />
            <Form.Label>Matrícula: </Form.Label>
            <Form.Control
              type="text"
              placeholder={`Matrícula: ${profesionalData?.matricula}`}
              name="matricula"
              value={editFormInput.matricula}
              onChange={handleOnChange}
            />
            <br />
            <Form.Label>Especialidades: </Form.Label>
           <SelectEspecialidades
             handleSelelect={handleSelect}
             options={especialidades}
             defaultValue={optionsDefault}
            />
            <br/>
            <Form.Label style={{"marginRight":10}}>Imagen de Perfil:  </Form.Label>
            <a
            href={`${editFormInput.imageId}`}
            target="_blank"
          >
             Ver imagen actual
          </a>
            <Form.Control
              type="file"
              name="idImage"
              onChange={(e) => handleImageId(e.target.files[0])}
            />
             <Button
              variant="secondary"
              className="closeBtn" 
              onClick={onClick}
              style = {{"marginTop":10}}

            >
              Cerrar
            </Button>
            <Button variant="success" style = {{"marginLeft":3,"marginTop":10}}  className="submitBtn" type="submit">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
  
      
    </>
  );
};
export default ModalFormEdit;
