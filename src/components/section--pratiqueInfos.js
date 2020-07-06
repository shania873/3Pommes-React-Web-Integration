'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

class sectionPratiqueInfos extends React.Component {
    render() {
        return  <section className="section--PratiqueInfos">
        <div className="container">
          
          <div className="row">
            <div className="col-sm-4 col--infospratiques">
            <h4>Infos Pratique</h4>
            <ul>
                <li>Lorem ipsum dolor sit </li>
                <li>Lorem ipsum dolor sit </li>
                <li>Lorem ipsum dolor sit </li>
                <li>Lorem ipsum dolor sit </li>
                <li>Lorem ipsum dolor sit </li>
                <li>Lorem ipsum dolor sit </li>
                <li>Lorem ipsum dolor sit </li>
                <li>Lorem ipsum dolor sit </li>
            </ul>
            </div>
            <div className="col-sm-4 col--coordonneeduc">
               <h4>Coachs</h4>
               <div className="row row--coordonneeduc">
                   <div className="col-lg-3 col-sm-4">
                        <img src="../src/img/Picture--Actu.png" className="img-responsive"/>                 
                </div>
                <div className="col-sm-9">
                       <h5>Raf</h5>
                       <span className="tel--coach">Tél. 0471/55.55.55</span>          
                       <span className="email--coach">raf@3pommes.com</span>       
                </div>
               </div>
               <div className="row row--coordonneeduc">
                   <div className="col-lg-3 col-sm-4">
                        <img src="../src/img/Picture--Actu.png" className="img-responsive"/>                 
                </div>
                <div className="col-sm-9">
                       <h5>Raf</h5>
                       <span className="tel--coach">Tél. 0471/55.55.55</span>          
                       <span className="email--coach">raf@3pommes.com</span>       
                </div>
               </div>
               <div className="row row--coordonneeduc">
                   <div className="col-lg-3 col-sm-4">
                        <img src="../src/img/Picture--Actu.png" className="img-responsive"/>                 
                </div>
                <div className="col-sm-9">
                       <h5>Raf</h5>
                       <span className="tel--coach">Tél. 0471/55.55.55</span>          
                       <span className="email--coach">raf@3pommes.com</span>       
                </div>
               </div>
            </div>
            <div className="col-sm-4 col--badges">
            <h4>Badges requis</h4>
            <div className="row">
                <img src="../src/img/badge--1.png"/>
                <img src="../src/img/badge--2.png"/>
                <img src="../src/img/badge--3.png"/>
            </div>
                <h4>Badges à gagner</h4>
            <div className="row">
                <img src="../src/img/badge--1.png"/>
                <img src="../src/img/badge--2.png"/>
                <img src="../src/img/badge--3.png"/>
            </div>
            </div>
          </div>
        </div>
        </section>
      }
}

const sectionContainer = document.querySelector('#section--pratiqueInfos');
ReactDOM.render(e(sectionPratiqueInfos), sectionContainer);