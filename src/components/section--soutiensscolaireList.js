'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

class SectionSoutiensScolaire extends React.Component {
    render() {
        return  <section className="section--soutiensscolaireList">
        <div className="container">
          <h3>Tes soutiens scolaires</h3>
          <div className="row row--demandestechniques">
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <h3>Remédiation en mathématiques</h3>
              <p>3 x par semaine</p>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <h3>Ton professeur > Pierre Lambert</h3>
              <p>Tél. 02 123 456 789 / pierrelambert@gmail.com</p>
            </div>
            <div className="col-lg-2 col-sm-2 col-xs-12 t-right eye--container">          
              <i className="fas fa-eye"></i>           
            </div>
          </div>
          
          
          <div className="set-CallToAction col-sm-12">
    
            <button>Faire une demande de soutien scolaires</button>
            <a className="link--website" href="#">Historique de tes demandes techniques</a>
          </div>
    
    
        </div>
      </section>
      }
}

const sectionContainer = document.querySelector('#section--soutiensscolaireList');
ReactDOM.render(e(SectionSoutiensScolaire), sectionContainer);