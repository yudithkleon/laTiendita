import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ProdRelacionado from "./ProdRelacionado";
import ProdRelacViveres from "./ProdRelacViveres";
import Head2 from "./Head2";

const url = "https://appiyudith.herokuapp.com/tienda?id=";

function Detalle() {
  const [frutas, setFrutas] = useState([]);

  const { id } = useParams();

  const peticionGet = async () => {
    await axios
      .get(url + id)
      .then((res) => {
        console.log(res.data);
        setFrutas(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
      
    <div>
        <Head2/>
      <figure className="figure d-flex container">
        <img
          src={frutas.Imagen}
          className="figure-img img-fluid rounded m-3"
          alt="imagen"
        />
        <div>
          <h4 className="m-3">{frutas.Producto}</h4>
          <figcaption className="figure-caption m-3">
            {frutas.Descripcion}
          </figcaption>
          <h6 className="m-3">Tipo de Hortaliza: {frutas.Tipo}</h6>
          <h6 className="m-3">Precio: {frutas.Precio}</h6>
          
          {frutas.Tipo == "Fruta" 
          ? 
               <select name="valor">
                  <option value="1">Maduro (Para Hoy)</option>
                  <option value="2">Normal (3-5 días) </option>
                  <option value="3">Verde (7 días)</option>
            </select>

            : " " }
        </div>
      </figure>
      <div>
         {frutas.Tipo == "Fruta" ? <ProdRelacionado /> : <ProdRelacViveres />} 
      </div>
    </div>
  );
}

export default Detalle;
