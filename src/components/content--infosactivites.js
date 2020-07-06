 
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;
import Slider from "react-slick";

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

  return <div className="card col-lg-4 col-md-4 col-sm-6 col-xs-12">
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


class SectionActiviteesContent extends React.Component { 
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
        return (
          <section className="section--infosactivites">
        <div className="container--infosactivites">
        <div className="container--titleSlider relative">
          <h2>Tes prochaines activitées</h2>
          
          <ul>
            <li className="prev" onClick={this.previous}>
              <i className="fas fa-angle-left"></i>
            </li>
            <li className="next" onClick={this.next}>
              <i className="fas fa-angle-right"></i>
            </li>   
          </ul>
        </div>   
       
        <div className="container--card">
         <div className="card--container-set">
            <Slider ref={c => (this.slider = c)} {...settings}>            
                  <CardRoueIcon key={1} borderOrange={slide.borderOrange}/>  
                  <CardTubasIcon key={2} borderOrange={slide.borderOrange}/>            
                  <CardMontagne key={3} borderBlue={slide.borderBlue}/>           
                  <CardCuillereTubas key={4} borderRouge={slide.borderRouge}/>           
                  <CardRoueIcon  key={5} borderOrange={slide.borderOrange}/>
                  <CardTubasIcon key={6} borderOrange={slide.borderOrange}/>
                  <CardMontagne key={7} borderBlue={slide.borderBlue}/>
                  <CardCuillereTubas key={8} borderRouge={slide.borderRouge}/>  
             </Slider>
          </div>
        </div>
        
     
          <div className="set-CallToAction--infosactivites col-sm-12">
            <button>T'inscire pour d'autres activitées</button>
            <a className="link--website" href="#">Historique de tes activitées</a>
          </div>
    
        </div>
       
         
      
      </section>
        ) 
      }
}

export default SectionActiviteesContent;
