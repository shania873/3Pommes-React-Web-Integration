'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

import TextTruncate from 'react-text-truncate'; 
import LightBox from "./LightBox.js";
import SimpleReactLightbox from "simple-react-lightbox"; 

import button_lightbox from './button_lightbox.js';

const photos = [
  {
    src: '/src/img/trekking-montagne.jpg'  
  },
  {
    src: '/src/img/picture_randonne--2.jpg',
    width: 1,
    height: 1
  },
  {
    src: '/src/img/picture_randonne--2.jpg',
    width: 1,
    height: 1
  },
  {
    src: '/src/img/picture_randonne--2.jpg',
    width: 1,
    height: 1
  },
  {
    src: '/src/img/picture_randonne--2.jpg',
    width: 1,
    height: 1
  }
];
 console.log(photos);
function Gallery(props){
  return <div className="row gallery--infosrandonne">
     
              <div className="gallery--singleImage">
                <img src={props.imagessrc1} style={{width: '100' + '%'}}/>
              </div>
            <div className="gallery--multipleImage">         
              <div className="row--gallery">
                <div style={{width: '50' + '%'}} >
                  <img src={props.imagessrc2} className="img-responsive" />
                </div>
                <div style={{width: '50' + '%'}} >
                  <img src={props.imagessrc3} className="img-responsive"/>
                </div>
              </div>
              <div className="row--gallery">
                <div  style={{width: '50' + '%'}}>
                  <img src={props.imagessrc4} className="img-responsive"/>
                </div>
                <div className="add--photos"  style={{width: '50' + '%'}} >
                  <div className="title--photos">
                    <p>
                      <span>+25</span>Photos</p>
                  </div>
                  
                </div>
              </div>          
            </div>
  </div>
}

class SectionRandonneInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Participer à la conversation...'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
  }
    render() {   
        return  <section className="section--infosrandonne">
  
  <div className="container--infosrandonne container">
        <div className="divBlock">
          <div className="vl hidden-xs"></div>
          <div className="posts--infosrandonne row">
            <div className="col-sm-2  d-flex hidden-xs">
              <img src="../src/img/Picture--Actu.png"/>
            </div>
            <div className="content--infosrandonne">
              <div className="text--infosrandonne col-lg-7 col-md-7 col-sm-5 col-xs-12">
                <span className="date--infosrandonne">5/10/2019</span>
                <h5 className="title--infosrandonne">Retour au camps</h5>
                <TextTruncate line={4} element="span" truncateText="…" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias illo officia, ea nobis blanditiis expedita dolores impedit ad deleniti omnis aliquid voluptate magnam magni placeat? impedit ad deleniti omnis aliquid voluptate magnam magni placeat?" />
              </div>
              <div className="img--infosrandonne col-lg-5 col-md-5 col-sm-7 col-xs-12">  
               <LightBox imagessrc1={photos[0].src} imagessrc2={photos[1].src} imagessrc3={photos[2].src} imagessrc4={photos[3].src} imagessrc5={photos[4].src}  />
              </div>
            </div>
          </div>
         
          <div className="posts--infosrandonne row">
            <div className="col-sm-2 hidden-xs d-flex">
              <img src="../src/img/Picture--Actu.png"/>
            </div>
            <div className="content--infosrandonne">
              <div className="text--infosrandonne col-xs-12">
                <span className="date--infosrandonne">5/10/2019</span>
                <h5 className="title--infosrandonne">Retour au camps</h5>
                <TextTruncate line={3} element="span" truncateText="…" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias illo officia, ea nobis blanditiis expedita dolores impedit ad deleniti omnis aliquid voluptate magnam magni placeat? impedit ad deleniti omnis aliquid voluptate magnam magni placeat?or sit amet consectetur adipisicing elit. Alias illo officia, ea nobis blanditiis expedita dolores impedit" />
              </div>
            </div>
          </div>
    
          <div className="posts--infosrandonne row">
            <div className="col-sm-2 hidden-xs d-flex">
              <img src="../src/img/Picture--Actu.png"/>
            </div>
            <div className="content--infosrandonne">
              <div className="text--infosrandonne col-xs-12">
                <span className="date--infosrandonne">5/10/2019</span>
                <h5 className="title--infosrandonne">Retour au camps</h5>
                <TextTruncate line={3} element="span" truncateText="…" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias illo officia, ea nobis blanditiis expedita dolores impedit ad deleniti omnis aliquid voluptate magnam magni placeat? impedit ad deleniti omnis aliquid voluptate magnam magni placeat?or sit amet consectetur adipisicing elit. Alias illo officia, ea nobis blanditiis expedita dolores impedit" />
              </div>
            </div>
          </div>
  </div>
        </div>
        <div className="form-infosrandonne container p-0">
            <form onSubmit={this.handleSubmit}>          
                 <input type="text" value={this.state.value} onChange={this.handleChange}/>    
                 <a href="#"><i className="fas fa-plus-circle"></i></a>    
            </form>
        </div>
      </section>
      }
}

const sectionContainer = document.querySelector('#section--infosrandonneInput');
ReactDOM.render(e(SectionRandonneInput), sectionContainer);