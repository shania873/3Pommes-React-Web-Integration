'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;



class Header extends React.Component {
    render() {
        return (
          <React.Fragment>
<section className="section--mainmenu ">
        <div className="container--menu">
          <nav className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#navbarCollapse" aria-expanded="false">
    
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand navbar-image" id="btn--HomeMenuOpen" href="#"><img src="../src/img/logo.png" alt="logo--3pommes"/></a>
              </div>
    
              <div className="collapse navbar-collapse collapse" id="navbarCollapse" aria-expanded="false" style={{height: '1'+'px'}}>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#" className="hvr-underline-from-left">Trouver une activité</a></li>
                  <li><a href="#" className="hvr-underline-from-left" style={{minWidth: '184'+'px'}}>Demander du soutiens scolaire</a></li>
                  <li><a href="#" className="hvr-underline-from-left">Participer à un concours</a></li>
                  <li><a href="#" className="hvr-underline-from-left">Badges & Karma</a></li>
                  <li><a href="#" className="hvr-underline-from-left">Tout savoir sur 3pommes</a></li>
    
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    
    <section id="HomeMenuOpen">
        <div className="container--HomeMenuOpen">
          <div className="container--carre col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <h1><a href="#activites" className="link--HomeMenuOpen">Activités</a></h1>
          </div>
          <div className="container--carre col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <h1><a href="#activites" className="link--HomeMenuOpen">Soutiens scolaires</a></h1> 
          </div>
          <div className="container--carre col-lg-4 col-md-4 col-sm-6 col-xs-12">
           <h1><a href="#" className="link--HomeMenuOpen">Jobs</a></h1> 
          </div>
          <div className="container--carre col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <h1><a href="#" className="link--HomeMenuOpen">Travail institution</a></h1> 
          </div>
          <div className="container--carre col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <h1><a href="#" className="link--HomeMenuOpen">Travail institution</a></h1> 
          
          </div>
          <div className="container--carre col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <ul>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Lorem Ipsum</a>
              </li>
              <li>
              <a href="#">Lorem Ipsum</a>
              </li>
              <li>
              <a href="#">Lorem Ipsum</a>
              </li>
              <li>
              <a href="#">Lorem Ipsum</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </React.Fragment>
        )
  
      }
}




const headerContainer = document.querySelector('#header--3pommes');
ReactDOM.render(e(Header), headerContainer);