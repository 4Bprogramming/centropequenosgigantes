import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  //mail aqui
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d4n8uu8",
        "template_b91p3lr",
        e.target,
        "m161GBw_7jaymvDc3"
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <div className="content">
        <div className="continer">
          <div className="row align-items-stretch no-gutters contact-wrap">
            <div className="col-md-8">
              <div className="form h-100">
                <h3>Contáctanos</h3>
                <form
                  onSubmit={(e) => sendEmail(e)}
                  className="mb-5"
                  method="post"
                  id="contactForm"
                  name="contactForm"
                >
                  <div className="row">
                    <div className="col-md-6 form-group mb-5">
                      <label for="" className="col-form-label" style={{color:'black'}}>
                        Nombre *
                      </label>
                      <input
                        type="text"
                        className="formulario"
                        name="nombre"
                        id="nombre"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-5">
                      <label for="" className="col-form-label" style={{color:'black'}}>
                        Correo *
                      </label>
                      <input
                        type="email"
                        className="formulario"
                        name="email"
                        id="email"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group mb-5">
                      <label for="" className="col-form-label" style={{color:'black'}}>
                        Teléfono
                      </label>
                      <input
                        type="text"
                        className="formulario"
                        name="phone"
                        id="phone"
                      />
                    </div>
                    {/* <div className="col-md-6 form-group mb-5">
                      <label for="" className="col-form-label">
                        Empresa
                      </label>
                      <input
                        type="text"
                        className="formulario"
                        name="company"
                        id="company"
                      />
                    </div> */}
                  </div>

                  <div className="row">
                    <div className="col-md-12 form-group mb-5">
                      <label for="message" className="col-form-label" style={{color:'black'}}>
                        Mensaje o sugerencia*
                      </label>
                      <textarea
                        className="formulario"
                        name="message"
                        id="message"
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input
                        type="submit"
                        value="Enviar"
                        className="btn btn-primary rounded-0 py-2 px-4"
                      />
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>

                <div id="form-message-warning mt-4"></div>
                <div id="form-message-success">Mensaje enviado</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info h-100">
                <h3>Información de Contacto </h3>
                <p className="mb-5">
                  Nuestro equipo de Asesores en Recuperación Física te
                  contactará para ayudarte a resolver cualquier interrogante.
                </p>
                <p>
              <span style={{color:'red'}}>*</span>Por temas de privacidad la mayoría de las fotos usadas son
                  referenciales.{" "}
                </p>
                <ul className="list-unstyled">
                  <li className="d-flex">
                    <span className="wrap-icon icon-room mr-3"></span>
                    <span className="text">
                     
                Nuestro Centro es la opción preferida para familias y parejas.
                    </span>
                   
                  </li>
                  <li className="d-flex">
                    <span className="wrap-icon icon-room mr-3"></span>
                    <span className="text">
                     
                  Av. Riva Agüero 961 El Agustino, Perù.
                    </span>
                   
                  </li>
                  <li className="d-flex">
                    <span className="wrap-icon icon-phone mr-3"></span>
                    <span className="text">991 341 292</span>
                  </li>
                  <li className="d-flex">
                    <span className="wrap-icon icon-envelope mr-3"></span>
                    <span className="text">info@mywebsite.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
