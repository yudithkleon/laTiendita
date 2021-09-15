import React, { Component } from "react";
import Foto from "../Components/Foto";
import Head from "../Components/Head";
import Productos from "../Components/Productos";
import 'bootstrap/dist/css/bootstrap.min.css'



const url = "https://appiyudith.herokuapp.com/tienda";

export default class Principal extends Component {
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
    const handleSubmit = async (e) => {
      e.preventDefault();
      const resp = await fetch(url);
      const data = await resp.json();
      this.setState({ tienda: data });
    };

    return (
      <div>
          <div>
             <Head/> 
             <Foto/>
          </div>
        <div className="container row row-cols-1 row-cols-md-4 g-4 py-5 text-center ms-5">
          {this.state.tienda.map((tienda, index) => {
            return <Productos key={index} tienda={tienda} />;
          })}
        </div>
      </div>
    );
  }
}
