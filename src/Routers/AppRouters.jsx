import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Agregar from '../Components/Agregar';
import  Carrito  from '../Components/Carrito';
import Principal from '../Container/Principal';
import Detalle from '../Components/Detalle';
import Gracias from '../Components/Gracias';
import Pagar from '../Components/Pagar';




const AppRouters = () => {

    return (
            <Router>
                <Switch>
                    <Route exact path="/"   component={Principal} />
                    <Route exact path="/Agregar"   component={Agregar} />
                    <Route exact path="/Carrito"   component={Carrito} />
                    <Route exact path="/Gracias"   component={Gracias} />
                    <Route exact path="/Pagar"   component={Pagar} />
                    <Route exact path="/detalle/:id" component={Detalle}/>
                </Switch>
            </Router>
    )
}

export default AppRouters

