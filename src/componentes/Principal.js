import React from 'react';
import "./styles/main.css"
import prueba from '../img/prueba.png';

class Principal extends React.Component{
    render(){
        return (
            <body>
            <div id="mailing" className="card">
                <h3>NUEVA VERSION...</h3>
                <h2>ACTUALIZACIONES DISPONIBLES</h2>
                <h1 id="discount">v 10</h1>
                <header id="home">
        <div id="div-imagen">
          <img src={prueba} alt="a" />
        </div>
        <div id="text">
          <h1>lorem ipsum</h1>
          <h2> adtempore temporibus.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est animi
            quaerat neque, deleniti molestias asperiores minima similique
            recusandae magni dolorum ratione pariatur, accusantium perspiciatis
            sapiente quasi voluptatibus odit minus cumque!
          </p>
        </div>
      </header>

     
      <section>
        <div id="funcionalidades-intro">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            doloremque? Aut quas sapiente
          </p>
        </div>
        
        <div id="caracteristicas">
          
          <div class="item ">
            <i class="fab fa-android"></i>
            <h4>Potenciado por Android</h4>
          </div>
          <div class="item ">
            <i class="fas fa-battery-full"></i>
            <h4>Autonomia optimizada</h4>
          </div>
          <div class="item ">
            <i class="fas fa-camera"></i>
            <h4>DxOmark #1</h4>
          </div>
        </div>
      </section>
      
      <section className="evento">
        <div className="overlay">
          <div id="contenido-evento">
            <h1>EVENTO DE LANZAMIENTO</h1>
            <h3>Septiembre 30</h3>
            <p
              href="#"
              className="btn"
              >VER MAS</p>
          </div>
        </div>
      </section>
    </div>
  </body>
        );
    }
}

export default Principal;