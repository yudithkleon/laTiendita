import React, { Component } from "react";
import { Link } from "react-router-dom";
import Head2 from "./Head2";

export default class Pagar extends Component {
  render() {
    return (
      <div>
        <Head2 />
        <div><br />
          <form>
              <h1>Formulario de Pago</h1> <br /><br />
            <div>
              <h3>Correo Electronico</h3>
              <input
                type="text"
                placeholder="Email"
                className="form-control"
                name="emal"
              /> <br />
            </div>
            <div>
              <h3>Informacion de la Tarjeta</h3>
              <div>
                <input
                  type="text"
                  placeholder="1234 1234 1234 "
                  className="form-control"
                  name="tarjeta"
                />
                <img src="https://res.cloudinary.com/danimel/image/upload/v1631633224/WorkShop2/Cards_1_hsbfo5.png" />
              </div>
              <input
                type="text"
                placeholder="MM / YY "
                className="form-control"
                name="tarjeta"
              /><br />
            </div>
            <div>
              <h3>Nombre de la tarjeta</h3>
              <input
                type="text"
                placeholder="Nombre de la Tarjeta "
                className="form-control"
                name="detras"
              /> <br />
            </div>
            <Link to={"/Gracias"}>
              <button className="btn boton_morado" type="button">
                Pagar
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
