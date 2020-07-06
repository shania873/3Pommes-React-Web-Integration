 
'use strict';

const e = React.createElement;


function CardRoueIcon(props) {

  return <div className="card">
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

  return  <div className="card">
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

  return  <div className="card">
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

  return <div className="card">
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

  return <div className="card">
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


  export default  {CardRoueIcon, CardTubasIcon,CardMontagne,CardCuillereTubas};