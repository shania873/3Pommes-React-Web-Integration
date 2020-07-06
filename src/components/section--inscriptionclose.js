'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

class sectionInscriptionclose extends React.Component {
    render() {  
        return  <section className="section--inscriptionclose">
        <div className="container">
          <div className="row row--inscriptionclose">
              <div className="col-sm-4 col-xs-12 img--inscriptionclose">
                  <img src="../src/img/picture--inscriptionclose.svg" className="img--inscriptionCloses"/>
              </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <h3>Inscription fermée</h3>
              <p>Ouverture des inscriptions le 18 février</p>
              <div className="set-CallToAction--inscriptionclose col-sm-12">
              <button>Faire une demande technique</button>
            </div>
            </div>
          </div>
        </div>
      </section>
      }
}

const sectionContainer = document.querySelector('#section--inscriptionclose');
ReactDOM.render(e(sectionInscriptionclose), sectionContainer);