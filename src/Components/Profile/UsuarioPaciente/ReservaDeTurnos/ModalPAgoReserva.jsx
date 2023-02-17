import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import Pasarela from './Pasarela';
import BodyModal from '../../Admin/AdminComponents/ReservaDeTurnos/ModalReservaTurno/BodyModal';


function ModalPagoReserva({
  body,
  title,
  handlePago,
  editFormInput,
  optionsDefault,
  handleOnChange,
  handleImageId,
  handleSelect,
  handleSubmit,
  show,
  onHide,
  profesionalData,
  onClick,
}) {
  return (
    <>

    <Modal show={show} onHide={onHide}  backdrop="static"
        keyboard={false}>
    <Modal.Header closeButton>
      <Modal.Title> {title} </Modal.Title>
    </Modal.Header>
    <Modal.Body> 
    <BodyModal body={body} />
    <Pasarela/>
    </Modal.Body>  
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>

            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            {" "}
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPagoReserva;
