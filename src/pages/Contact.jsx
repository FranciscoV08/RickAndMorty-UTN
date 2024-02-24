import { Navegator } from "../components/Navegator";
import "./contact.css"

export const Contact = () => {
  return (
    <div>
        <Navegator valuePage="contact" />

        <div className="formulario d-flex-column container mt-5 text-center p-5">
          <h2>Contact</h2>
          <p className="fs-3">Leave us yout information so we can contact you</p>
          <form className="row">

            <div className="col-md-6">
              <label className="w-100" htmlFor="nombre">Nombre:</label>
              <input className="form-control w-50 m-auto" type="text" id="nombre" value={"hola"} />
            </div>

            <div className="col-md-6">
              <label className="w-100" htmlFor="email">Email:</label>
              <input className="form-control w-50 m-auto" type="text" name="email" id="email" />
            </div>

            <div className="col-md-12">
              <label className="w-100 " htmlFor="message">Message:</label>
              <textarea className="form-control w-50 m-auto" name="message" id="message"></textarea>
            </div>

          </form>
            <button className="mt-3" type="submit">Send</button>
        </div>
    </div>
  );
};