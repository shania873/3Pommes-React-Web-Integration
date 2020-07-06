'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

function SectionLogin(){
    return(
        <React.Fragment>
            <div className="container">
            <div className=" container--login">
                <div className="login--left col-lg-6 col-md-6 col-sm-12 col-xs-12">  
                    <a className="logo--containerLogin" id="btn--HomeMenuOpen" href="#">
                        <img src="../src/img/logo.png" alt="logo--3pommes"/>
                        </a>
                        <h3>Bienvenue</h3>   
                    <form> 
                            <div className="form-group">
                                <label htmlFor="form-input--1">Pseudo <span className="asterix">*</span></label>
                                <input type="text" className="form-control3Pommes" id="form-input--1"/>
                            </div>   
                            <div className="form-group">
                                <label htmlFor="form-input--2">Mot de passe  <span className="asterix">*</span></label>
                                <input type="text" className="form-control3Pommes" id="form-input--2"/>
                            </div>                      
                                
                            <button type="submit" className="btn--principal">Se connecter</button>
                    </form>
                            <span>Vous avez oublié votre mot de passe ?  <a href="#" className="link--website">Contactez-nous</a></span>
                            <h5>Nous contacter</h5>
                            <p>3pommes.org Chemin de  la caracole72 5000 Namur Tél 061 44 80 50 - Fax 061 31 08 46-info@3pommes.org</p> 
                </div>
                <div className="login--right col-lg-6 col-md-6 col-sm-12 col-xs-12">
                       <img src="https://images.unsplash.com/photo-1587613842352-3022a317a088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80" className="img-responsive"/>
                </div>
                </div>
                <div className="container--contentLogin">
                    <div className="col-lg-6 col-md-5  col-sm-5 col-xs-12">
                    <h4>Contacter le membre de l'équipe</h4>
                                    <ul>
                                        <li>Raf - Administrateur délégué:06444806 - <span className="link--website">raf@3pommes.org</span></li>
                                        <li>Raf - Administrateur délégué:06444806 - <span className="link--website">raf@3pommes.org</span></li>
                                        <li>Raf - Administrateur délégué:06444806 - <span className="link--website">raf@3pommes.org</span></li>
                                        <li>Raf - Administrateur délégué:06444806 - <span className="link--website">raf@3pommes.org</span></li>
                                        <li>Raf - Administrateur délégué:06444806 - <span className="link--website">raf@3pommes.org</span></li>
                                        <li>Raf - Administrateur délégué:06444806 - <span className="link--website">raf@3pommes.org</span></li>
                                    </ul>
                    </div>    
                    <div className="col-lg-6 col-md-7  col-sm-7 col-xs-12">
                    <h4>Contacter un coach</h4>
               
                                     <ul className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <li>Jem: 08144 80 60 - <span className="link--website">raf@3pommes.org</span> </li>
                                        <li>Jem: 08144 80 60 - <span className="link--website">raf@3pommes.org</span> </li>
                                        <li>Jem: 08144 80 60 - <span className="link--website">raf@3pommes.org</span> </li>
                                        <li>Jem: 08144 80 60 - <span className="link--website">raf@3pommes.org</span> </li>
                                        <li>Jem: 08144 80 60 - <span className="link--website">raf@3pommes.org</span> </li>
                                        <li>Jem: 08144 80 60 - <span className="link--website">raf@3pommes.org</span> </li>                                     
                                    </ul>
           
                   
                                     <ul className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <li>Jem: 08144 80 60 - <span className="link--website">raf@3pommes.org</span> </li>
                                        <li>Jem: 08144 80 60 - <span className="link--website">raf@3pommes.org</span> </li>
                                        <li>Jem: 08144 80 60 - <span className="link--website">raf@3pommes.org</span> </li>
                                        <li>Jem: 08144 80 60 - <span className="link--website">raf@3pommes.org</span> </li>
                                        <li>Jem: 08144 80 60 - <span className="link--website">raf@3pommes.org</span> </li>
                                        <li>Jem: 08144 80 60 - <span className="link--website">raf@3pommes.org</span> </li>                                     
                                    </ul>
                  
                                  
                    </div>             
                </div>
               
         
            
                </div>
               
         
            
     
             </React.Fragment>
    )
      
     
    
}

const sectionContainer = document.querySelector('#section--login');
ReactDOM.render(e(SectionLogin), sectionContainer);
