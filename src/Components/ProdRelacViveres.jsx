import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Head2 from './Head2';

const url = "https://appiyudith.herokuapp.com/tienda?Tipo=Viveres";

export default class ProdRelacViveres extends Component {

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
               
                <div>
          <h1>Productos Relacionados</h1>
          <div className="container row row-cols-1 row-cols-md-5 g-4 py5 md-auto" >
              <div className="d-flex ">
               { this.state.tienda.map((tienda)=>
                {
                  return(
                    
                    
                    <div className=" w-150 m-2">
                        <div className="card-body">
                          <img
                            src={tienda.Imagen}
                            className=""
                            alt="..."
                            width="200px"
                            height="220px"
                          />
                          <h6 className="card-title">$ {tienda.Precio} </h6>
                          <h9 className="card-text">{tienda.Producto}</h9>
                        </div>
                        <div className="d-grid gap-2">
                          <Link to={`/detalle/${tienda.id}`}>
                            <button className="btn boton_morado" type="button">
                              Agregar
                            </button>
                          </Link>
                        </div>
                  </div>)
                }
                )
                  }
          </div>
          </div>
      </div>
            </div>
        )
    }
}
