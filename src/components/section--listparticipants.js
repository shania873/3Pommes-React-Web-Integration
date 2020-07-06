'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
const e = React.createElement;
// import 'pure-react-carousel/dist/react-carousel.es.css';



function SlideContent(){
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


class sectionListparticipants extends React.Component {
    render() {  
        return  <section className="section--listparticipants">
        <div className="container">
               <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={40}
                    totalSlides={3}
                   
                >     
                  <div className="set-title--listparticipants">       
                  <h2>Les participants</h2>
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
                    <Slider>
                        <Slide index={0}><SlideContent/></Slide>
                        <Slide index={1}><SlideContent/></Slide>
                        <Slide index={2}><SlideContent/></Slide>
                    </Slider>                   
                </CarouselProvider>
               
        </div>
      </section>
      }
}



const sectionContainer = document.querySelector('#section--listparticipants');
ReactDOM.render(e(sectionListparticipants), sectionContainer);

export default sectionListparticipants;