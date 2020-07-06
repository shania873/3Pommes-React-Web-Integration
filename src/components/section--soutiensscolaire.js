'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

class SectionSoutiensScolaire extends React.Component {
    render() {
        return  <section className="section--soutiensscolaire">
        <div className="container">
          <h2>Tes soutiens scolaires</h2>
          <div className="row row--flex">
            <div
              className="col-lg-offset-4 col-sm-offset-3 col-xs-offset-0 col-lg-4 col-sm-5 col-xs-12 content--soutiensscolaire">
              <p><span>Pas encore de soutiens scolaire ?</span> Fait vite une demande et nous pourrons t'aider à accomplir
                tes objectifs</p>
              <div className="set-CallToAction--soutiensscolaire col-sm-12">
        
                <button>Faire une demande de soutiens scolaires</button>
                <a className="link--website" href="#">Historique de tes activitées</a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <img src="../src/img/img--soutiensscolaire.JPG" className="img-responsive"/>
            </div>
          </div>
        </div>
        </section>
      }
}

const sectionContainer = document.querySelector('#section--soutiensscolaire');
ReactDOM.render(e(SectionSoutiensScolaire), sectionContainer);