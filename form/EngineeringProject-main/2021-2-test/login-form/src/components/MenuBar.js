import React from 'react';
import {NavLink} from 'react-router-dom';
import './Album.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () =>{
    const activeStyle = {
        color:'green',
        fontSize:'2rem'
    };

    return (
        <div class = "navbar navbar-dark bg-dark shadow-sm menuBar">
            
            <div class="collapse" id="navbarHeader">
                <div class="bg-light shadow-3 p-4">
                    <button class="btn btn-link btn-block border-bottom m-0">Link 1</button>
                    <button class="btn btn-link btn-block border-bottom m-0">Link 2</button>
                    <button class="btn btn-link btn-block m-0">Link 3</button>
                </div>
            </div>
            <div class="container d-flex justify-content-between">
                <div class="d-flex align-items-center">
                <i class="fa fa-2x fa-camera m-2"></i> 
                    <h4><strong>Album</strong></h4>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" data-mdb-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
            </div>
        </div>
    );
};

export default Menu;