import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Head extends Component {
    render() {
        return (
            <div>
                <nav className="navbar-menu" >
                <nav className="navbar">
                    <div className="container-fluid">
                         <div class="menu" id="menu">
                            <ul class="navbar-nav ">
                                <div className= "titulo header">
                                <h1>La Tiendita</h1>
                                <Link to="/Carrito"> <button class="btn btn-outline-success" type="submit"><img src="https://res.cloudinary.com/danimel/image/upload/v1631633223/WorkShop2/Button_5_fgzzci.png" ></img></button></Link>
                               </div>
                                
                           </ul>
                          
                        </div>
                    </div>
                </nav>
            </nav>
            </div>
        )
    }
}
