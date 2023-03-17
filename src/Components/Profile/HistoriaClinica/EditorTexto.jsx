import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function EditorTexto({handleChange, handleSubmit, post}) {
  return (
    <Form >
        <Form.Label>Nombre: {post.paciente}</Form.Label>
        <br/>
        <Form.Label>Documento N°: {post.documento}</Form.Label>
        <br/>
        <Form.Label>Fecha: {post.fecha}</Form.Label>
        <br/>
        <Form.Label>Hora: {post.hora}</Form.Label>
        <br/>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Detalle la consulta:</Form.Label>
        <Form.Control
        as="textarea" 
        rows={10} 
        onChange={handleChange}
        name='mensaje'
        placeholder="Escriba aquí"
        />
      </Form.Group>
      <Button  onClick={(e) => {
              handleSubmit(e)}}> {" "}GUARDAR HISTORIA CLINICA</Button>
    </Form>
  );
}

export default EditorTexto;