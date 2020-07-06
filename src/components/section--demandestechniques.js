'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;
class demandesTechniques extends React.Component {
    render() {  
        return(
<section className="section--demandestechniques">
        <div className="container">
          <h3>Demandes techniques</h3>
          <div className="row row--demandestechniques">
            <div className="col-sm-9">
              <h3>Cartouches d'encre</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="col-sm-3 t-right">
              <i className="fas fa-eye"></i>
            </div>
          </div>
          <div className="set-CallToAction col-sm-12">
    
            <button>Faire une demande technique</button>
            <a className="link--website" href="#">Historique de tes demandes techniques</a>
          </div>
    
    
        </div>
      </section>
        )  
      }
}

const sectionContainer = document.querySelector('#section--demandestechniques');
ReactDOM.render(e(demandesTechniques), sectionContainer);