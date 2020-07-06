'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

class sectionleseducateurs extends React.Component {
    render() {  
        return  <section className="section--leseducateurs">
        <div className="container">
        <div className="set-title--leseducateurs relative">
          <h2>Les éducateurs</h2>
          <ul>
            <li className="prev"><a href="#"><i className="fas fa-angle-left"></i></a></li>
            <li className="next"><a href="#"><i className="fas fa-angle-right"></i></a></li>
          </ul>
        </div>  
            <div className="col-sm-4">
                <div className="row row--leseducateurs">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--leseducateurs">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--leseducateurs">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--leseducateurs">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--leseducateurs">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--leseducateurs">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--leseducateurs">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--leseducateurs">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--leseducateurs">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
           
        </div>
      </section>
      }
}

const sectionContainer = document.querySelector('#section--leseducateurs');
ReactDOM.render(e(sectionleseducateurs), sectionContainer);