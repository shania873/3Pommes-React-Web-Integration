 
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;


function CardRoueIcon(props) {

  return <div className="card col-lg-4 col-md-4 col-sm-6 col-xs-12">
<div className="card--content">
    <img src="../src/img/img--card1.png" className="card-img-top img-responsive" alt="img-card1"/>
    <div className={props.borderOrange}>
      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-9">
          <span className="type--club title-orange">CLUB</span>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Ton inscription est validé</p>
        </div>
        <div className="content-card--icon col-lg-3 col-md-3 col-sm-3 hidden-xs">
          <img className="img--cardIcon img-responsive" src="../src/img/icon--wheel.svg" alt="roue"/>
        </div>
      </div>
    </div>
  </div>
  </div>
  

}
function CardTubasIcon(props) {

  return  <div className="card col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div className="card--content" >
    <img src="../src/img/img--card3.png" className="card-img-top img-responsive" alt="img-card3"/>
    <div className={props.borderOrange}>
      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-9">
          <span className="type--club title-orange">CLUB</span>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Ton inscription est validé</p>
        </div>
        <div className="content-card--icon col-lg-3 col-md-3 col-sm-3 hidden-xs">
          <img className="img--cardIcon img-responsive" src="../src/img/icon-tubas.svg" alt="roue"/>
        </div>
      </div>
    </div>
  </div>
    
    
    </div>

}

function CardMontagne(props) {

  return  <div className="card col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div className="card--content">
        <img src="../src/img/img--card1.png" className="card-img-top img-responsive" alt="img-card1"/>
        <div className={props.borderBlue}>
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-9">
              <span className="type--club title-blue">CLUB</span>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Ton inscription est validé</p>
            </div>
            <div className="content-card--icon col-lg-3 col-md-3 col-sm-3 hidden-xs">
              <img className="img--cardIcon img-responsive" src="../src/img/icon--montagne.svg" alt="roue"/>
            </div>
          </div>
        </div>
      </div>
  </div> 

}

function CardCuillereTubas(props) {

  return <div className="card col-lg-4 col-md-4 col-sm-6 col-xs-12">
 <div className="card--content">
    <img src="../src/img/img--card2.png" className="card-img-top img-responsive" alt="img-card2"/>
    <div className={props.borderRouge}>
      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-9">
          <span className="type--club title-rouge">CLUB</span>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Ton inscription est validé</p>
        </div>
        <div className="content-card--icon col-lg-3 col-md-3 col-sm-3 hidden-xs">
          <img className="img--cardIcon img-responsive" src="../src/img/icon-cuilleretubas.svg" alt="roue"/>
        </div>
      </div>
    </div>
  </div>
  </div> 
  
 

}

function CardMap(props) {

  return <div className="card col-lg-4 col-md-4 col-sm-6 col-xs-12">
   <div className="card--content">
    <img src="../src/img/img--card2.png" className="card-img-top img-responsive" alt="img-card2"/>
    <div className={props.borderOrange}>
      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-9">
          <span className="type--club title-rouge">CLUB</span>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Ton inscription est validé</p>
        </div>
        <div className="content-card--icon col-lg-3 col-md-3 col-sm-3 hidden-xs">
          <img className="img--cardIcon img-responsive" src="../src/img/icon-cuilleretubas.svg" alt="roue"/>
        </div>
      </div>
    </div>
  </div>
  </div> 


}

  
  const slide = {
    borderOrange: 'card-body border-orange', 
    borderBlue: 'card-body border-blue', 
    borderRouge: 'card-body border-rouge'
  };
  

class SectionSoutiensScolaire extends React.Component {
    render() {
        return  <section className="section--pageattitude">
<div className="row--pageattitude col-sm-6">
                   <div className="d-flex line-dropdown">
                   J'ai
                                    <div className="dropdown">
                                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">12 ans
                                            <span className="caret"></span></button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                </ul>
                                        </div>
                                            je cherche
                                            <div className="dropdown">
                                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">un club, job..
                                            <span className="caret"></span></button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                </ul>
                                        </div>
                                      </div>
                                      <div className="d-flex line-dropdown">
                                        dans la catégorie
                                            <div className="dropdown">
                                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">sport, cuisine..
                                            <span className="caret"></span></button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                </ul>
                                        </div>
                                    </div>
                               </div>
                             <div className="container">
                             <div className="container--card">
                                
                                <div className="card--container-set">
                                  <CardRoueIcon borderOrange={slide.borderOrange}/>
                                  <CardTubasIcon borderOrange={slide.borderOrange}/>
                                  <CardMontagne borderBlue={slide.borderBlue}/>
                                  <CardCuillereTubas borderRouge={slide.borderRouge}/>    
                                  <CardRoueIcon borderOrange={slide.borderOrange}/>
                                  <CardTubasIcon borderOrange={slide.borderOrange}/>
                                  <CardCuillereTubas borderRouge={slide.borderRouge}/> 
                                  <CardRoueIcon borderOrange={slide.borderOrange}/>
                                  <CardTubasIcon borderOrange={slide.borderOrange}/>
                                </div>
                                    
                                

                            </div>

                             </div>
    
        </section>
      }
}

const sectionContainer = document.querySelector('#section--pageattitude');
ReactDOM.render(e(SectionSoutiensScolaire), sectionContainer);