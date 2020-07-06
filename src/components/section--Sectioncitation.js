'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

class SectionCitation extends React.Component {
    render() {
        return  <section className="section--Sectioncitation">
        <div className="container">
          <div className="row row--Sectioncitation">
            <div className="container--Sectioncitation-left col-lg-4 col-md-5 col-sm-12 col-xs-12">
              <div className="content--Sectioncitation">
                <img src="../src/img/photo--pictureSectionCitation.png" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi doloremque tempora tempore est,
                  reiciendis suscipit eaque? Rerum expedita in, libero incidunt aspernatur exercitationem? Repellat.</p>
                <span className="nom--Sectioncitation">Sophie K</span>
                <span className="date--Sectioncitation">15/04/2019</span>
              </div> 
            </div>
            <div className="container--Sectioncitation-right col-lg-8 col-md-7 col-sm-12 col-xs-12 overflow--hidden p-0">
              <img src="../src/img/imgBig--pictureSectionCitation.jpg" alt=""/>
            </div>
          </div>
        </div>
      </section>
      }
}

const sectionContainer = document.querySelector('#section--Sectioncitation');
ReactDOM.render(e(SectionCitation), sectionContainer);