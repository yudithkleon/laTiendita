import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Productos extends Component {
    

    render() {
    
        const { id,Producto, Precio, Imagen } = this.props.tienda
        return (
                
                    <div className="container ms-3 text-center"  >
                    <div className="col ">
                        <div className="card-body">
                            <img src={Imagen} className="" alt="..." width="250px" height="290px" />
                            <h6  className="card-title">$ {Precio} </h6>
                            <h9 className="card-text">{Producto}</h9>
                        </div>
                        <div className="d-grid gap-2">
                          <Link to={`/detalle/${id}`}>
                                <button className="btn boton_morado" type="button">Agregar</button>
                           </Link>
                                
                        </div>
                    </div>
                </div>
                             
            
        )
    }
}
     

