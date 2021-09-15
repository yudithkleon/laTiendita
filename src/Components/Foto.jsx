import React, { Component } from "react";


export default class Foto extends Component {
  render() {
    return (
      
    <div className="carousel-inner">
      <div className="carousel-inner active">
          
         <img
              className="w-100 d-block img-fluid"
              src="https://res.cloudinary.com/danimel/image/upload/v1631652080/WorkShop2/banner_hkkg1y.png"
              alt="First slide"
            />
          <div className="carousel-caption d-none d-md-block">
          <h5 className="text-white">¡Adquiere todos tus productos favoritos al mejor precio!</h5>
          </div>
      </div>
    </div>  
    );
  }
}
