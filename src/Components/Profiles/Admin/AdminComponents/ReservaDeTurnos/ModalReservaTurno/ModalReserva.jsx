import React from 'react'
import Modal from "react-bootstrap/Modal"

function ModalReserva({editFormInput, optionsDefault,  handleOnChange, handleImageId,handleSelect, handleSubmit, show, onHide, profesionalData, onClick}) {
  return (
    <>
    <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Edite la informacion del Profesional </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div>ModalReserva</div>
    </Modal.Body>
    </Modal>
    </>
  )
}

export default ModalReserva