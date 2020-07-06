'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

class SectionSoutiensScolaire extends React.Component {
    render() {
        return  <section className="section--prochainesactivitees">
        <div className="container">
          <h2>Tes prochaines activitées</h2>
          <div className="row row--flex">
          <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12">          
              <img src="../src/img/interogation--persos.svg"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12 content--prochainesactivitees">
              <p><span>Pas encore de soutiens scolaire ?</span> Fait vite une demande et nous pourrons t'aider à accomplir
                tes objectifs</p>
              <div className="set-CallToAction col-sm-12">
        
                <button>T'inscrire à une activité</button>
                <a className="link--website" href="#">Historique de tes activitées</a>
              </div>
            </div>
            
          </div>
        </div>
        </section>
      }
}

const sectionContainer = document.querySelector('#section--prochainesactivites');
ReactDOM.render(e(SectionSoutiensScolaire), sectionContainer);