'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;
import TextTruncate from 'react-text-truncate';

import ContenttabJeunesActiviteesGestion from '../components/content--tabJeunesActiviteesGestion.js';
import SectionActiviteesContent from '../components/content--infosactivites.js';

//QUAND TU APPUIE SUR GO
function Modal1(props) {
  return <div className="modal fade" id="Modal--Workflow1" tabIndex="-1" role="dialog" aria-labelledby="Modal--Workflow1Label" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="row--modal">
                <h5 className="modal-title" id="exampleModalLabel">Inscription</h5> 
                
                <img src="../src/img/Step0.svg"/>
              </div>

              <div className="row--modal">
                <div className="set--ClubSportDate col-lg-4 col-sm-6 col-xs-12"> 
                  <img src="../src/img/icon-tubas.svg" className="img-responsive"/>
                  <div className="title--ClubSportDate">
                    <span>CLUB</span>
                    <h1>Plongé</h1>
                    <h3>Du 15 au 17/09/18</h3>
                  </div>                
                </div>

                <div className="container--badgesHeaderModal col-lg-4 col-sm-6 col-xs-12">
                  <h3>Badges Requis</h3>
                    <img src="../src/img/Badge1--HeaderLightbox.svg"/>
                    <img src="../src/img/Badge2--HeaderLightbox.svg"/>
                    <img src="../src/img/Badge3--HeaderLightbox.svg"/>
                </div>               
              </div>
                        
            </div>
            <div className="modal-body">
              <div className="row row--title">
              <h1>Selection Jeune</h1>
             <p>Cliquez sur le jeune que vous voulez inscrire au club plongée du 15 au 17/09/18</p>
              </div>
          <div className="row row--containeridentite">
            <div className=" col-lg-5 col-sm-8 container--identite">
                <div className="row">
                <div className="col-sm-4">
                  <img src="../src/img/Profil-picture.png" className=" img-responsive"/>
                </div>
                <div className="col-sm-8">
                  <h3>Penny Mclean</h3>
                  <p>Maison des oiseaux verts</p>
                  <img src="../src/img/jauge.svg" alt="jauge" className="img--jauge img-responsive"/>
                </div>
                </div>
                <div className="row row--badges">                
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>           
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                 
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                 
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>
                 </div>               
              </div>
              <div className=" col-lg-5 col-sm-8  container--identite">
                <div className="row">
                <div className="col-sm-4">
                  <img src="../src/img/Profil-picture.png" className=" img-responsive"/>
                </div>
                <div className="col-sm-8">
                  <h3>Penny Mclean</h3>
                  <p>Maison des oiseaux verts</p>
                  <img src="../src/img/jauge.svg" alt="jauge" className="img--jauge img-responsive"/>
                </div>
                </div>
                <div className="row row--badges">                
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>           
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                 
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                 
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>
                 </div>               
              </div>
              <div className=" col-lg-5 col-sm-8  container--identite">
                <div className="row">
                <div className="col-sm-4">
                  <img src="../src/img/Profil-picture.png" className=" img-responsive"/>
                </div>
                <div className="col-sm-8">
                  <h3>Penny Mclean</h3>
                  <p>Maison des oiseaux verts</p>
                  <img src="../src/img/jauge.svg" alt="jauge" className="img--jauge img-responsive"/>
                </div>
                </div>
                <div className="row row--badges">                
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>           
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                 
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                 
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>
                 </div>               
              </div>
              <div className=" col-lg-5 col-sm-8  container--identite">
                <div className="row">
                <div className="col-sm-4">
                  <img src="../src/img/Profil-picture.png" className=" img-responsive"/>
                </div>
                <div className="col-sm-8">
                  <h3>Penny Mclean</h3>
                  <p>Maison des oiseaux verts</p>
                  <img src="../src/img/jauge.svg" alt="jauge" className="img--jauge img-responsive"/>
                </div>
                </div>
                <div className="row row--badges">                
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>           
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                 
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                 
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>                
                     <img src="../src/img/badge--2.png"className="col-item--badges img-responsive"/>
                 </div>               
              </div>
            </div>
          
           
            </div>
            <div className="modal-footer">
              <a  className="link--website">Help me !</a>
            <ul className="d-flex m-lAuto">
              <li className="prev slick-arrow" >
                <a href="#">
                <i className="fas fa-angle-left"></i>
                </a>
              
                </li>
                <li className="next slick-arrow">
                <a href="#">
                  <i className="fas fa-angle-right">
                    </i>
                    </a>
                    </li></ul>
            </div>
          </div>
        </div>
      </div>
}

//QUAND TU APPUIE SUR REPONDRE
function Modal2(props){
return    <div className="modal fade" id="Modal--Workflow2" tabIndex="-1" role="dialog" aria-labelledby="Modal--Workflow1Label" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <div className="row--modal">
        <h5 className="modal-title" id="exampleModalLabel">Inscription</h5> 
        <img src="../src/img/Step1.svg"/>
      </div>
      <div className="row--modal">
        <div className="set--ClubSportDate col-lg-4 col-md-5 col-sm-6 col-xs-12">   
          <img src="../src/img/icon-tubas.svg" className="img-responsive"/>
          <div className="title--ClubSportDate">
            <span>CLUB</span>
            <h1>Plongé</h1>
            <h3>Du 15 au 17/09/18</h3>
          </div>                
        </div>
        <div className="container--badgesHeaderModal  col-lg-4 col-md-5 col-sm-6 col-xs-12">
          <h3>Badges Requis</h3>
          <img src="../src/img/Badge1--HeaderLightbox.svg"/>
          <img src="../src/img/Badge2--HeaderLightbox.svg"/>
          <img src="../src/img/Badge3--HeaderLightbox.svg"/>
        </div>
        <div className="profil--identite col-lg-4 col-md-6 col-sm-7 col-xs-12">
        <div className="title--PhotoNom">
            <img src="../src/img/Profil-picture.png"/>
            <h1 className="text-italic">Caroline<span>van Aerschot</span></h1>
        </div> 
        </div>
      </div>
    </div>
    <div className="modal-body">
      <div className="row row--title">
      <h1>Condition d'accées</h1>
      </div>    
     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
  <div className="container--conditiondaccees">
   <p><b>Avant de t'inscrire, lis bien ce qui suit</b></p>
     <ul>
       <li>Lorem ipsum</li>
       <li>Lorem ipsum</li>
       <li>Lorem ipsum</li>
       <li>Lorem ipsum</li>
       <li>Lorem ipsum</li>
       <li>Lorem ipsum</li>
     </ul>
   </div>
   <p className="warning--container"><span>Attention!</span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
     <form>
        <div className="checkbox--container">  
                <label className="container">J'ai lu et compris
                <input type="checkbox"/>
                <span className="checkmark"></span>
                </label>

                <label className="container">J'ai lu et compris
                <input type="checkbox"/>
                <span className="checkmark"></span>
                </label>           
        </div>
   </form>
          
    </div>
    <div className="modal-footer">
      <a  className="link--website">Help me !</a>
       <button>
         SUIVANT  <i className="fas fa-angle-right"></i>
       </button>
  </div>
</div>
</div>
</div>
}
function Modal3(props){
  return   <div className="modal fade" id="Modal--Workflow3" tabIndex="-1" role="dialog" aria-labelledby="Modal--Workflow3Label" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
    <div className="modal-header">
      <div className="row--modal">
        <h5 className="modal-title" id="exampleModalLabel">Inscription</h5> 
        <img src="../src/img/Step2.svg"/>
      </div>
      <div className="row--modal">
        <div className="set--ClubSportDate col-lg-4 col-md-5 col-sm-6 col-xs-12">   
          <img src="../src/img/icon-tubas.svg" className="img-responsive"/>
          <div className="title--ClubSportDate">
            <span>CLUB</span>
            <h1>Plongé</h1>
            <h3>Du 15 au 17/09/18</h3>
          </div>                
        </div>
        <div className="container--badgesHeaderModal  col-lg-4 col-md-5 col-sm-6 col-xs-12">
          <h3>Badges Requis</h3>
          <img src="../src/img/Badge1--HeaderLightbox.svg"/>
          <img src="../src/img/Badge2--HeaderLightbox.svg"/>
          <img src="../src/img/Badge3--HeaderLightbox.svg"/>
        </div>
        <div className="profil--identite col-lg-4 col-md-6 col-sm-7 col-xs-12">
        <div className="title--PhotoNom">
            <img src="../src/img/Profil-picture.png"/>
            <h1 className="text-italic">Caroline<span>van Aerschot</span></h1>
        </div> 
        </div>
      </div>
    </div>
      <div className="modal-body">
        <div className="row row--title">
        <h1>Badges Requis</h1>
     
        </div>
        <h3>Badge ERF Racyclage</h3>
        <div className="row row--badges">
     
          <div className="col-sm-2">
            <img src="../src/img/badge--1.png"/>
          
          </div>
          <div className="col-sm-7">
            <h3>Badge ERF Racyclage</h3>
            <p>Lorem ipsum</p>
          </div>
        </div>

        <h3>Badge ERF Racyclage</h3>
        <div className="row row--badges">
     
          <div className="col-sm-2">
            <img src="../src/img/badge--1.png"/>
          
          </div>
          <div className="col-sm-7">
            <h3>Badge ERF Racyclage</h3>
            <p>Lorem ipsum</p>
          </div>
        </div>
        <div className="row row--badges">
     
          <div className="col-sm-2">
            <img src="../src/img/badge--1.png"/>
          
          </div>
          <div className="col-sm-7">
            <h3>Badge ERF Racyclage</h3>
            <p>Lorem ipsum</p>
          </div>
        </div>
        <div className="row row--badges">
     
          <div className="col-sm-2">
            <img src="../src/img/badge--1.png"/>
          
          </div>
          <div className="col-sm-7">
            <h3>Badge ERF Racyclage</h3>
            <p>Lorem ipsum</p>
          </div>
        </div>
        <h3>Badge ERF Racyclage</h3>
        <div className="row row--badges">
     
          <div className="col-sm-2 col-xs-12">
            <img src="../src/img/badge--1.png"/>
          
          </div>
          <div className="col-sm-5 col-xs-12">
            <h3>Badge ERF Racyclage</h3>
            <p>Lorem ipsum</p>
          </div>
          <div className="col-sm-4 col-xs-12">
          <button>Trouver une date</button>
          
      
        </div>
        </div>           
      </div>
      <div className="modal-footer">
        <a  className="link--website">Help me !</a>          
    </div>
  </div>
</div>
</div>
}
function Modal4(props){
  return <div className="modal fade" id="Modal--Workflow4" tabIndex="-1" role="dialog" aria-labelledby="Modal--Workflow3Label" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
    <div className="modal-header">
      <div className="row--modal">
        <h5 className="modal-title" id="exampleModalLabel">Inscription</h5> 
        <img src="../src/img/Step2.svg"/>
      </div>
      <div className="row--modal">
        <div className="set--ClubSportDate col-lg-4 col-md-5 col-sm-6 col-xs-12">   
          <img src="../src/img/icon-tubas.svg" className="img-responsive"/>
          <div className="title--ClubSportDate">
            <span>CLUB</span>
            <h1>Plongé</h1>
            <h3>Du 15 au 17/09/18</h3>
          </div>                
        </div>
        <div className="container--badgesHeaderModal  col-lg-4 col-md-5 col-sm-6 col-xs-12">
          <h3>Badges Requis</h3>
          <img src="../src/img/Badge1--HeaderLightbox.svg"/>
          <img src="../src/img/Badge2--HeaderLightbox.svg"/>
          <img src="../src/img/Badge3--HeaderLightbox.svg"/>
        </div>
        <div className="profil--identite col-lg-4 col-md-6 col-sm-7 col-xs-12">
        <div className="title--PhotoNom">
            <img src="../src/img/Profil-picture.png"/>
            <h1 className="text-italic">Caroline<span>van Aerschot</span></h1>
        </div> 
        </div>
      </div>
    </div>
      <div className="modal-body">
        <div className="row--title">
        <h1>Badges Requis</h1>
        </div>   
        <h3>Badge ERF Racyclage</h3>
        <div className="row--badges">
     
          <div className="col-sm-2 col-xs-12">
            <img src="../src/img/badge--1.png"/>
          
          </div>
          <div className="col-sm-12 col-xs-12">
            <h3>Badge ERF Racyclage</h3>
            <p>Lorem ipsum <span><b>Mercredi 12 décembre 2012</b></span></p>
          </div>
         
        </div>
        <h3>Badge ERF Racyclage</h3>
        <div className="row--badges">
     
          <div className="col-sm-2 col-xs-12">
            <img src="../src/img/badge--1.png"/>
          
          </div>
          <div className="col-sm-12 col-xs-12">
            <h3>Badge ERF Racyclage</h3>
            <p>Lorem ipsum <span><b>Mercredi 12 décembre 2012</b></span> </p>
          </div>
          
        </div>
        <div className="row--badges">
     
          <div className="col-sm-2 col-xs-12">
            <img src="../src/img/badge--1.png"/>
          
          </div>
          <div className="col-sm-12 col-xs-12">
            <h3>Badge ERF Racyclage</h3>
            <p>Lorem ipsum <span><b>Mercredi 12 décembre 2012</b></span> </p>
          </div>
         
        </div>
        <div className="row--badges">
     
          <div className="col-sm-2 col-xs-12">
            <img src="../src/img/badge--1.png"/>
          
          </div>
          <div className="col-sm-12 col-xs-12">
            <h3>Badge ERF Racyclage</h3>
            <p>Lorem ipsum <span><b>Mercredi 12 décembre 2012</b></span> </p>
          </div>
        
        </div>
    
              
      </div>
      <div className="modal-footer">
        <a  className="link--website">Help me !</a>
         <button>
           SUIVANT  <i className="fas fa-angle-right"></i>
         </button>
    </div>
  </div>
</div>
</div>
}
function Modal5(props){
  return <div className="modal fade" id="Modal--Workflow5" tabIndex="-1" role="dialog" aria-labelledby="Modal--Workflow5Label" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
    <div className="modal-header">
      <div className="row--modal">
        <h5 className="modal-title" id="exampleModalLabel">Inscription</h5> 
        <img src="../src/img/Step3.svg"/>
      </div>
      <div className="row--modal">
        <div className="set--ClubSportDate col-lg-4 col-md-5 col-sm-6 col-xs-12">   
          <img src="../src/img/icon-tubas.svg" className="img-responsive"/>
          <div className="title--ClubSportDate">
            <span>CLUB</span>
            <h1>Plongé</h1>
            <h3>Du 15 au 17/09/18</h3>
          </div>                
        </div>
        <div className="container--badgesHeaderModal  col-lg-4 col-md-5 col-sm-6 col-xs-12">
          <h3>Badges Requis</h3>
          <img src="../src/img/Badge1--HeaderLightbox.svg"/>
          <img src="../src/img/Badge2--HeaderLightbox.svg"/>
          <img src="../src/img/Badge3--HeaderLightbox.svg"/>
        </div>
        <div className="profil--identite col-lg-4 col-md-6 col-sm-7 col-xs-12">
        <div className="title--PhotoNom">
            <img src="../src/img/Profil-picture.png"/>
            <h1 className="text-italic">Caroline<span>van Aerschot</span></h1>
        </div> 
        </div>
      </div>
    </div>
      <div className="modal-body">
        <div className="row--title">
        <h1>Inscription</h1>
      </div>
      <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Explique en quelques mots pourquoi tu souhaites t'inscrire au club de plongé</label>
                                    <textarea className="form-control3Pommes" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Cette zone est reservée si l'éducateur souhaite ajouter un text à la demande</label>
                                    <textarea className="form-control3Pommes" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
      </div>
      <div className="modal-footer">
        <a  className="link--website">Help me !</a>
         <button>
           terminer ma demande d'inscription  <i className="fas fa-angle-right"></i>
         </button>
    </div>
  </div>
</div>
</div>
}
function Modal6(props){
  return <div className="modal fade" id="Modal--Workflow6" tabIndex="-1" role="dialog" aria-labelledby="Modal--Workflow6Label" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
    <div className="modal-header">
      <div className="row--modal">
        <h5 className="modal-title" id="exampleModalLabel">Inscription</h5> 
        <img src="../src/img/Step4.svg"/>
      </div>
      <div className="row--modal">
        <div className="set--ClubSportDate col-lg-4 col-md-5 col-sm-6 col-xs-12">   
          <img src="../src/img/icon-tubas.svg" className="img-responsive"/>
          <div className="title--ClubSportDate">
            <span>CLUB</span>
            <h1>Plongé</h1>
            <h3>Du 15 au 17/09/18</h3>
          </div>                
        </div>
        <div className="container--badgesHeaderModal  col-lg-4 col-md-5 col-sm-6 col-xs-12">
          <h3>Badges Requis</h3>
          <img src="../src/img/Badge1--HeaderLightbox.svg"/>
          <img src="../src/img/Badge2--HeaderLightbox.svg"/>
          <img src="../src/img/Badge3--HeaderLightbox.svg"/>
        </div>
        <div className="profil--identite col-lg-4 col-md-6 col-sm-7 col-xs-12">
        <div className="title--PhotoNom">
            <img src="../src/img/Profil-picture.png"/>
            <h1 className="text-italic">Caroline<span>van Aerschot</span></h1>
        </div> 
        </div>
      </div>
    </div>
      <div className="modal-body">
        <div className="row--title">
          <h1>Félicitations !</h1>
          <p>Ton inscription à été pris en compte.
            Elle sera validée dans les plus brefs délais.
          </p>
       
          <img src="../src/img/Picture--Congratulations.svg" />
         
       
        </div>   
      </div>
      <div className="modal-footer">
        <a  className="link--website">Help me !</a>
         <button>
           SUIVANT  <i className="fas fa-angle-right"></i>
         </button>
    </div>
  </div>
</div>
</div>
}
function Modal7(props){
    return <div className="modal fade" id="Modal--TabsJeunesActiviteesGestion" tabIndex="-1" role="dialog" aria-labelledby="Modal--Workflow6Label" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
      <div className="modal-header">
        <div className="row--modal">
          <h5 className="modal-title" id="exampleModalLabel">Inscription</h5> 
          <img src="../src/img/Step4.svg"/>
        </div>
        <div className="row--modal">
          <div className="set--ClubSportDate col-lg-4 col-md-5 col-sm-6 col-xs-12">   
            <img src="../src/img/icon-tubas.svg" className="img-responsive"/>
            <div className="title--ClubSportDate">
              <span>CLUB</span>
              <h1>Plongé</h1>
              <h3>Du 15 au 17/09/18</h3>
            </div>                
          </div>
          <div className="container--badgesHeaderModal  col-lg-4 col-md-5 col-sm-6 col-xs-12">
            <h3>Badges Requis</h3>
            <img src="../src/img/Badge1--HeaderLightbox.svg"/>
            <img src="../src/img/Badge2--HeaderLightbox.svg"/>
            <img src="../src/img/Badge3--HeaderLightbox.svg"/>
          </div>
          <div className="profil--identite col-lg-4 col-md-6 col-sm-7 col-xs-12">
          <div className="title--PhotoNom">
              <img src="../src/img/Profil-picture.png"/>
              <h1 className="text-italic">Caroline<span>van Aerschot</span></h1>
          </div> 
          </div>
        </div>
      </div>
        <div className="modal-body">
        <ContenttabJeunesActiviteesGestion/>
        </div>
        <div className="modal-footer">
          <a  className="link--website">Help me !</a>
           <button>
             SUIVANT  <i className="fas fa-angle-right"></i>
           </button>
      </div>
    </div>
  </div>
  </div>
  }
  function Modal8(props){
    return <div className="modal fade" id="Modal--SectionActiviteesContent" tabIndex="-1" role="dialog" aria-labelledby="Modal--Workflow6Label" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
      <div className="modal-header">
        <div className="row--modal">
          <h5 className="modal-title" id="exampleModalLabel">Inscription</h5> 
          <img src="../src/img/Step4.svg"/>
        </div>
        <div className="row--modal">
          <div className="set--ClubSportDate col-lg-4 col-md-5 col-sm-6 col-xs-12">   
            <img src="../src/img/icon-tubas.svg" className="img-responsive"/>
            <div className="title--ClubSportDate">
              <span>CLUB</span>
              <h1>Plongé</h1>
              <h3>Du 15 au 17/09/18</h3>
            </div>                
          </div>
          <div className="container--badgesHeaderModal  col-lg-4 col-md-5 col-sm-6 col-xs-12">
            <h3>Badges Requis</h3>
            <img src="../src/img/Badge1--HeaderLightbox.svg"/>
            <img src="../src/img/Badge2--HeaderLightbox.svg"/>
            <img src="../src/img/Badge3--HeaderLightbox.svg"/>
          </div>
          <div className="profil--identite col-lg-4 col-md-6 col-sm-7 col-xs-12">
          <div className="title--PhotoNom">
              <img src="../src/img/Profil-picture.png"/>
              <h1 className="text-italic">Caroline<span>van Aerschot</span></h1>
          </div> 
          </div>
        </div>
      </div>
        <div className="modal-body">
        <SectionActiviteesContent/>
        </div>
        <div className="modal-footer">
          <a  className="link--website">Help me !</a>
           <button>
             SUIVANT  <i className="fas fa-angle-right"></i>
           </button>
      </div>
    </div>
  </div>
  </div>
  }
class SectionLightBoxes extends React.Component {
    render() {
        return(
          <React.Fragment>
        <section className="section--Lightboxes">      
        <div className="container container--Lightboxes">
            <h1>LightBoxes</h1>
                    <button data-toggle="modal" data-target="#Modal--Workflow1">Selection jeunes</button>
                    <button data-toggle="modal" data-target="#Modal--Workflow2">Condition d'accees</button>
                    <button data-toggle="modal" data-target="#Modal--Workflow3">Badges requis</button>
                    <button data-toggle="modal" data-target="#Modal--Workflow4">Badges requis</button>
                    <button data-toggle="modal" data-target="#Modal--Workflow5">Inscription</button> 
                    <button data-toggle="modal" data-target="#Modal--Workflow6">Félicitations</button>     
                    <button data-toggle="modal" data-target="#Modal--TabsJeunesActiviteesGestion">TabsJeunesActiviteesGestion</button>    
                    <button data-toggle="modal" data-target="#Modal--SectionActiviteesContent">SectionActiviteesContent</button>        
            
            </div> 
                    
        </section>

      {/* MODAL 1 */}
      <Modal1/>
      {/* MODAL 2 */}
      <Modal2/>
      {/* MODAL 3 */}
      <Modal3/>
      {/* MODAL 4 */}
      <Modal4/>
       {/* MODAL 5 */}
       <Modal5/>
        {/* MODAL 6 */}
      <Modal6/>

       {/* MODAL 7 */}
       <Modal7/>

         {/* MODAL 8 */}
         <Modal8/>

      </React.Fragment>
        )
      }
}

const sectionContainer = document.querySelector('#section--lightboxes');
ReactDOM.render(e(SectionLightBoxes), sectionContainer);