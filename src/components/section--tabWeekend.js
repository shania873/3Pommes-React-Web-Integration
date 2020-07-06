
// import sectionListparticipants from './section--listparticipants.js';
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
const e = React.createElement;

function InfosPratiques(){
    return  <section className="section--TabsPratiqueInfos">
       
          <div className="row">
            <div className="col-sm-4 col--badges">
            <h4>Du vendredi 17 au mardi 19</h4>
                <p>
                 Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 g
             </p>
            </div>
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
                   <div className="col-lg-3 col-sm-3">
                        <img src="../src/img/Picture--Actu.png" className="img-responsive"/>                 
                </div>
                <div className="col-lg-9 col-sm-9">
                       <h5>Raf</h5>
                       <span className="tel--coach">Tél. 0471/55.55.55</span>          
                       <span className="email--coach">raf@3pommes.com</span>       
                </div>
               </div>
               <div className="row row--coordonneeduc">
                   <div className="col-lg-3 col-sm-3">
                        <img src="../src/img/Picture--Actu.png" className="img-responsive"/>                 
                </div>
                <div className="col-lg-9 col-sm-9">
                       <h5>Raf</h5>
                       <span className="tel--coach">Tél. 0471/55.55.55</span>          
                       <span className="email--coach">raf@3pommes.com</span>       
                </div>
               </div>
               <div className="row row--coordonneeduc">
                   <div className="col-lg-3 col-sm-3">
                        <img src="../src/img/Picture--Actu.png" className="img-responsive"/>                 
                </div>
                <div className="col-lg-9 col-sm-9">
                       <h5>Raf</h5>
                       <span className="tel--coach">Tél. 0471/55.55.55</span>          
                       <span className="email--coach">raf@3pommes.com</span>       
                </div>
               </div>
              
              
            </div>
          </div>
      
        </section>
}
function SlideContent(props){
    return(
        <React.Fragment>
            <div className="col-sm-4">
                <div className="row row--listparticipants">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--listparticipants">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--listparticipants">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--listparticipants">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--listparticipants">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--listparticipants">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--listparticipants">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--listparticipants">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row row--listparticipants">
                    <div className="col-sm-4"><img src="../src/img/Profil-picture.png" className="img-responsive"/></div>
                    <div className="col-sm-8">
                        <h4>Joseph W. Kane</h4>
                        <p>Centre d'acceuil saint Unions</p>
                    </div>
                </div>
            </div> 
</React.Fragment>
    )   
}
function ListParticipants(props){
    return  <section className="section--Tabslistparticipants">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={40}
                    totalSlides={3}>    

        <div className="set-title--listparticipants">
            <div className="col-sm-9 col-xs-12">
                <h2>Les participants</h2>
            </div>
           <div className="col-sm-3 col-xs-12">
           <ul>
                <li className="prev">
                <ButtonBack>
                    <i className="fas fa-angle-left"></i>                                
                </ButtonBack>   
                </li>
                <li className="next">
                <ButtonNext>
                    <i className="fas fa-angle-right"></i>
                </ButtonNext>  
                </li>
            </ul>
           </div>           
        </div>  

                    <Slider>
                        <Slide index={0}><SlideContent/></Slide>
                        <Slide index={1}><SlideContent/></Slide>
                        <Slide index={2}><SlideContent/></Slide>
                    </Slider>                   
                </CarouselProvider>
       
   
  </section>
}
class sectiontabWeekend extends React.Component {
    render() {  
        return   <section className="section--tabWeekend">
      <div className="container">
      <ul className="nav nav-tabs">
                <li className="active">
                    <a data-toggle="tab" href="#Week1">
                        <h3>Weekend 2</h3>
                        <span>Du 15 au 17/10/18</span>
                    </a>
                </li>
                <li>
                <a data-toggle="tab" href="#Week2">
                        <h3>Weekend 2</h3>
                        <span>Du 15 au 17/10/18</span>
                    </a>    
                   
                </li>
                <li>
                <a data-toggle="tab" href="#Week3">
                        <h3>Weekend 2</h3>
                        <span>Du 15 au 17/10/18</span>
                    </a>    
                  
                </li>
                <li>
                <a data-toggle="tab" href="#Week4">
                        <h3>Weekend 2</h3>
                        <span>Du 15 au 17/10/18</span>
                    
                    </a>
                </li>
            </ul>

            <div className="tab-content">
            <div id="Week1" className="tab-pane fade in active">
              
            <InfosPratiques/>
                <ListParticipants/>
            </div>
            <div id="Week2" className="tab-pane fade">
            <InfosPratiques/>
                <ListParticipants/>
            </div>
            <div id="Week3" className="tab-pane fade">
            <InfosPratiques/>
                <ListParticipants/>
              
            </div>
            <div id="Week4" className="tab-pane fade">
            <InfosPratiques/>
                <ListParticipants/>
               
             </div>
            </div>
      </div>
        </section>
      }
}

const sectionContainer = document.querySelector('#section--tabWeekend');
ReactDOM.render(e(sectiontabWeekend), sectionContainer);