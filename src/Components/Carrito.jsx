import React, { Component, useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import Head2 from './Head2';

const url = "http://localhost:4000/tienda";

let contador = 1;
export default class Carrito extends Component {
    constructor() {
        super();
        this.state = {
            tienda: [],
            searchTerm: "",
            error: "",
        };
    }

    async componentDidMount() {
        const resp = await fetch(url);
        const data = await resp.json();
        this.setState({ tienda: data });
        console.log(this.state.tienda);
    }

    
    render() {



      
        return (
            <div>
                <Head2/>
                {
                contador == 0
                    ?
                    <div>
                        <h1>El carrito esta vacio</h1>
                        <img
                            src="https://res.cloudinary.com/danimel/image/upload/v1631633224/WorkShop2/Compras_ix0lz1.png"
                            alt=""
                        />
                    </div>
                    :
                    <div>
                        <h1>Su carrito contiene </h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.tienda.map((carrito) => {
                                    return (
                                        <tr key={carrito.id}>
                                            <td>
                                                <td>{carrito.id}</td>
                                                <td><img
                                                    src={carrito.Imagen}
                                                    width="50px"
                                                    height="70px"
                                                    alt=""
                                                /></td>

                                            </td>
                                            <td>{carrito.Producto}</td>
                                            <td>{carrito.Precio}</td>
                                            <td>{carrito.Cantidad} </td> 
                                            {" "}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                 }
                 <Link to={"/Pagar"}>
                      <button className="btn boton_morado vw-100" type="button">
                       Pagar
                      </button>
                    </Link>
            </div>
        )
}
}

