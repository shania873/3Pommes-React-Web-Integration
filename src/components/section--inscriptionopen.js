'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

class sectionInscriptionopen extends React.Component {
    render() {  
        return  <section className="section--inscriptionopen">
        <div className="container">        
          <div className="row row--inscriptionopen">
            <div className="col-sm-12">
              <h3>Cartouches d'encre</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="set-CallToAction--inscriptionopen col-sm-12">    
              <button>Faire une demande technique</button>          
            </div>
            </div>         
          </div>
        </div>
      </section>
      }
}

const sectionContainer = document.querySelector('#section--inscriptionopen');
ReactDOM.render(e(sectionInscriptionopen), sectionContainer);