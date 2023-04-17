import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import BodyModal from "./BodyModal";
import SelectFormaPago from "./SelectFormaPago/SelectFormaPago";
import InputValorPago from "./InputValorPago";
import InputEmailPaciente from "./InputEmailPaciente";

function ModalReserva({
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
  turno
}) {
 
  return (
    <>
      <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title> {title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BodyModal body={body} />
          <SelectFormaPago handlePago={handlePago} />
          <InputValorPago handlePago={handlePago} turno={body[0]?.valor} />
          <InputEmailPaciente handlePago={handlePago} />
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
            Reservar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalReserva;
