import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styles from "./Editor.module.css";

function EditorTexto({ handleChange, handleSubmit, post }) {
  return (
    <Form className={styles.formContiner}>
      <Form.Label className={styles.paciente}>
        Nombre: {post.paciente}
      </Form.Label>
      <br />
      <Form.Label className={styles.formLabel}>
        Documento N°: {post.documento}
      </Form.Label>
      <br />
      <Form.Label className={styles.formLabel}>Fecha: {post.fecha}</Form.Label>
      <br />
      <Form.Label className={styles.formLabel}>Hora: {post.hora}</Form.Label>
      <br />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className={styles.formLabel}>
          Detalle la consulta:
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          onChange={handleChange}
          name="mensaje"
          placeholder="Escriba aquí"
          className={styles.placeHolder}
        />
      </Form.Group>
      <Button
        className={styles.button}
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        {" "}
        GUARDAR HISTORIA CLINICA
      </Button>
    </Form>
  );
}

export default EditorTexto;
