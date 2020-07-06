'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

function Partlesjeunes(props){
    return <div className="col-lg-4 col-sm-6 set-tabJeunesActivitesGestion">
    <div className="row">
        <div className="col-lg-4 col-xs-4">
            <img src="../src/img/Profil-picture.png" className="img-responsive"/>
        </div>
        <div className="col-lg-8 col-xs-8">
            <h4>Roméo Elvis</h4>
            <div className="dropdown show  dropdown-tabJeunes">
                    <a className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink">
                       <i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i>
                    </a>
                <div className="dropdown-menu">
                    <ul>
                        <li><a className="dropdown-item" href="#">Voir Karma</a></li>
                        <li><a className="dropdown-item" href="#">Inscrire à une acitivité</a></li>
                        <li><a className="dropdown-item" href="#">Soutiens scolaire</a></li>
                        <li><a className="dropdown-item" href="#">Bloquer</a></li>
                    </ul>                   
                </div>
             </div>
            
            <p>Centre de formation</p>
            <img src="../src/img/jauge.svg" className="img-responsive jauge--tab"/>
        </div>
    </div>
    <div className="row">                           
            <img src="../src/img/badge--1.png" className=" col-item--badges img-responsive"/>
            <img src="../src/img/badge--2.png" className="col-item--badges img-responsive"/>
            <img src="../src/img/badge--3.png" className="col-item--badges img-responsive"/>
            <img src="../src/img/badge--4.png" className="col-item--badges img-responsive"/>
            <img src="../src/img/badge--5.png" className="col-item--badges img-responsive"/>
            <img src="../src/img/badge--6.png" className="col-item--badges img-responsive"/>
      
    </div>
</div>
  }
function Partactivites(props){
 return <div className="container container--partactivites">
            <ul className="nav nav-tabs">
                <li className="active">
                    <a data-toggle="tab" href="#home">
                        Prochaines acitivités
                        <span className="pins">4</span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="#menu1">
                        Prochains clubs
                        <span className="pins">4</span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="#menu2">
                            Prochains passages
                            <span className="pins">4</span>
                    </a>
                </li>            
                <li>
                    <a data-toggle="tab" href="#menu1">
                        Prochains jobs
                        <span className="pins">4</span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="#menu2">
                        Prochains badges
                        <span className="pins">4</span>
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div id="home" className="tab-pane fade in active">
                    <div className="row row--setkarmaoptionmenuTab">
                    <div className="row--karmaoption">
                                <div className="col-lg-9 col-sm-12 d-flex line-dropdown">
                                Tous les jeunes
                                    <div className="dropdown">
                                            <a className="btn btn-primary dropdown-toggle dropdown--TabsWebsite" data-toggle="dropdown">actif
                                            <span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                </ul>
                                        </div>
                                            , avec un karma 
                                            <div className="dropdown">
                                            <a className="btn btn-primary dropdown-toggle dropdown--TabsWebsite" data-toggle="dropdown">Positif
                                            <span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">PAGE2</a></li>
                                                    <li><a href="#">PAGE2</a></li>
                                                    <li><a href="#">PAGE2</a></li>
                                                </ul>
                                        </div>
                                    </div>
                               </div>
                               <div className="row--menuTab">
                                    <div className="set--searchExpand">
                                        <aside id="searchbartop">
                                            <input type="checkbox" id="searchbartopbtn"  />                                                
                                                    <form method="post" action="">
                                                        <div><input type="text" defaultValue="Recherche" /></div>
                                                    </form>
                                                <label htmlFor="searchbartopbtn" className="loupe">
                                                    <i className="fas fa-search"></i>
                                                </label>
                                        </aside>
                                    </div>
                            <div className="set--prevNext">
                                <ul>
                                    <li className="prev"><i className="fas fa-angle-left"></i></li>
                                    <li className="next"><i className="fas fa-angle-right"></i></li>
                                </ul>                 
                            </div>
                        </div> 
                    </div>
                  <div className="row row--lessons">                      
                      <div className="col-lg-4 col-sm-5">
                          <div className="row">
                              <div className="col-sm-4">
                                 <img src="../src/img/Profil-picture.png" className="img-responsive"/>
                              </div>
                              <div className="col-sm-5">
                                   <h3>Caroline van Aerschot</h3>
                              </div>
                          </div>
                        
                      </div>
                      <div className="col-lg-4 col-sm-3">
                          <h4>Cuisine et bien être</h4>
                          <p>15/04/2019 - 18/04/2019</p>
                      </div>
                      <div className="col-lg-4 col-sm-3">
                            <h4>Contacter le responsable</h4>
                          <p className="link--website">raf@3pommes.org</p>
                      </div>    
                  </div>
                  <div className="row row--lessons">                      
                      <div className="col-lg-4 col-sm-5">
                          <div className="row">
                              <div className="col-sm-4">
                                 <img src="../src/img/Profil-picture.png" className="img-responsive"/>
                              </div>
                              <div className="col-sm-5">
                                   <h3>Caroline van Aerschot</h3>
                              </div>
                          </div>
                        
                      </div>
                      <div className="col-lg-4 col-sm-3">
                          <h4>Cuisine et bien être</h4>
                          <p>15/04/2019 - 18/04/2019</p>
                      </div>
                      <div className="col-lg-4 col-sm-3">
                            <h4>Contacter le responsable</h4>
                          <p className="link--website">raf@3pommes.org</p>
                      </div>    
                  </div>
                   
                  <div className="row row--lessons">                      
                      <div className="col-lg-4 col-sm-5">
                          <div className="row">
                              <div className="col-sm-4">
                                 <img src="../src/img/Profil-picture.png" className="img-responsive"/>
                              </div>
                              <div className="col-sm-5">
                                   <h3>Caroline van Aerschot</h3>
                              </div>
                          </div>
                        
                      </div>
                      <div className="col-lg-4 col-sm-3">
                          <h4>Cuisine et bien être</h4>
                          <p>15/04/2019 - 18/04/2019</p>
                      </div>
                      <div className="col-lg-4 col-sm-3">
                            <h4>Contacter le responsable</h4>
                          <p className="link--website">raf@3pommes.org</p>
                      </div>    
                  </div>                   
                        <div className="row row--setButton">
                            <button>T'inscire pour d'autres acitivitées</button>
                            <a className="link--website" href="#">Historique de tes activitées</a>
                        </div>
                </div>
                <div id="menu1" className="tab-pane fade">
                <div className="row row--setkarmaoptionmenuTab">
                    <div className="row--karmaoption">
                    <div className="col-lg-9 col-sm-12 d-flex line-dropdown">
                                Tous les jeunes
                                    <div className="dropdown">
                                            <a className="btn btn-primary dropdown-toggle dropdown--TabsWebsite" data-toggle="dropdown">actif
                                            <span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                </ul>
                                        </div>
                                            , avec un karma 
                                            <div className="dropdown">
                                            <a className="btn btn-primary dropdown-toggle dropdown--TabsWebsite" data-toggle="dropdown">Positif
                                            <span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                </ul>
                                        </div>
                                    </div>
                               </div>
                               <div className="row--menuTab">
                                    <div className="set--searchExpand">
                                        <aside id="searchbartop">
                                            <input type="checkbox" id="searchbartopbtn"  />                                                
                                                    <form method="post" action="">
                                                        <div><input type="text" defaultValue="Recherche" /></div>
                                                    </form>
                                                <label htmlFor="searchbartopbtn" className="loupe">
                                                    <i className="fas fa-search"></i>
                                                </label>
                                        </aside>
                                    </div>
                            <div className="set--prevNext">
                                <ul>
                                    <li className="prev"><i className="fas fa-angle-left"></i></li>
                                    <li className="next"><i className="fas fa-angle-right"></i></li>
                                </ul>                 
                            </div>
                        </div> 
                    </div>
                  <div className="row row--lessons">                      
                      <div className="col-lg-4 col-sm-5">
                          <div className="row">
                              <div className="col-sm-4">
                                 <img src="../src/img/Profil-picture.png" className="img-responsive"/>
                              </div>
                              <div className="col-sm-5">
                                   <h3>Caroline van Aerschot</h3>
                              </div>
                          </div>
                        
                      </div>
                      <div className="col-lg-4 col-sm-3">
                          <h4>Cuisine et bien être</h4>
                          <p>15/04/2019 - 18/04/2019</p>
                      </div>
                      <div className="col-lg-4 col-sm-3">
                            <h4>Contacter le responsable</h4>
                          <p className="link--website">raf@3pommes.org</p>
                      </div>    
                  </div>
                  <div className="row row--lessons">                      
                      <div className="col-lg-4 col-sm-5">
                          <div className="row">
                              <div className="col-sm-4">
                                 <img src="../src/img/Profil-picture.png" className="img-responsive"/>
                              </div>
                              <div className="col-sm-5">
                                   <h3>Caroline van Aerschot</h3>
                              </div>
                          </div>
                        
                      </div>
                      <div className="col-lg-4 col-sm-3">
                          <h4>Cuisine et bien être</h4>
                          <p>15/04/2019 - 18/04/2019</p>
                      </div>
                      <div className="col-lg-4 col-sm-3">
                            <h4>Contacter le responsable</h4>
                          <p className="link--website">raf@3pommes.org</p>
                      </div>    
                  </div>
                   
                  <div className="row row--lessons">                      
                      <div className="col-lg-4 col-sm-5">
                          <div className="row">
                              <div className="col-sm-4">
                                 <img src="../src/img/Profil-picture.png" className="img-responsive"/>
                              </div>
                              <div className="col-sm-5">
                                   <h3>Caroline van Aerschot</h3>
                              </div>
                          </div>
                        
                      </div>
                      <div className="col-lg-4 col-sm-3">
                          <h4>Cuisine et bien être</h4>
                          <p>15/04/2019 - 18/04/2019</p>
                      </div>
                      <div className="col-lg-4 col-sm-3">
                            <h4>Contacter le responsable</h4>
                          <p className="link--website">raf@3pommes.org</p>
                      </div>    
                  </div>                   
                        <div className="row row--setButton">
                            <button>T'inscire pour d'autres acitivitées</button>
                            <a className="link--website" href="#">Historique de tes activitées</a>
                        </div>
                </div>
                <div id="menu2" className="tab-pane fade">
                <div className="row row--setkarmaoptionmenuTab">
                    <div className="row--karmaoption">
                    <div className="col-lg-9 col-sm-12 d-flex line-dropdown">
                                Tous les jeunes
                                    <div className="dropdown">
                                            <a className="btn btn-primary dropdown-toggle dropdown--TabsWebsite" data-toggle="dropdown">actif
                                            <span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                </ul>
                                        </div>
                                            , avec un karma 
                                            <div className="dropdown">
                                            <a className="btn btn-primary dropdown-toggle dropdown--TabsWebsite" data-toggle="dropdown">Positif
                                            <span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                    <li><a href="#">PAGE1</a></li>
                                                </ul>
                                        </div>
                                    </div>
                               </div>
                               <div className="row--menuTab">
                                    <div className="set--searchExpand">
                                        <aside id="searchbartop">
                                            <input type="checkbox" id="searchbartopbtn"  />                                                
                                                    <form method="post" action="">
                                                        <div><input type="text" defaultValue="Recherche" /></div>
                                                    </form>
                                                <label htmlFor="searchbartopbtn" className="loupe">
                                                    <i className="fas fa-search"></i>
                                                </label>
                                        </aside>
                                    </div>
                            <div className="set--prevNext">
                                <ul>
                                    <li className="prev"><i className="fas fa-angle-left"></i></li>
                                    <li className="next"><i className="fas fa-angle-right"></i></li>
                                </ul>                 
                            </div>
                        </div> 
                    </div>
                  <div className="row row--lessons">                      
                      <div className="col-lg-4 col-sm-5">
                          <div className="row">
                              <div className="col-sm-4">
                                 <img src="../src/img/Profil-picture.png" className="img-responsive"/>
                              </div>
                              <div className="col-sm-5">
                                   <h3>Caroline van Aerschot</h3>
                              </div>
                          </div>
                        
                      </div>
                      <div className="col-lg-4 col-sm-3">
                          <h4>Cuisine et bien être</h4>
                          <p>15/04/2019 - 18/04/2019</p>
                      </div>
                      <div className="col-lg-4 col-sm-3">
                            <h4>Contacter le responsable</h4>
                          <p className="link--website">raf@3pommes.org</p>
                      </div>    
                  </div>
                  <div className="row row--lessons">                      
                      <div className="col-lg-4 col-sm-5">
                          <div className="row">
                              <div className="col-sm-4">
                                 <img src="../src/img/Profil-picture.png" className="img-responsive"/>
                              </div>
                              <div className="col-sm-5">
                                   <h3>Caroline van Aerschot</h3>
                              </div>
                          </div>
                        
                      </div>
                      <div className="col-lg-4 col-sm-3">
                          <h4>Cuisine et bien être</h4>
                          <p>15/04/2019 - 18/04/2019</p>
                      </div>
                      <div className="col-lg-4 col-sm-3">
                            <h4>Contacter le responsable</h4>
                          <p className="link--website">raf@3pommes.org</p>
                      </div>    
                  </div>
                   
                  <div className="row row--lessons">                      
                      <div className="col-lg-4 col-sm-5">
                          <div className="row">
                              <div className="col-sm-4">
                                 <img src="../src/img/Profil-picture.png" className="img-responsive"/>
                              </div>
                              <div className="col-sm-5">
                                   <h3>Caroline van Aerschot</h3>
                              </div>
                          </div>
                        
                      </div>
                      <div className="col-lg-4 col-sm-3">
                          <h4>Cuisine et bien être</h4>
                          <p>15/04/2019 - 18/04/2019</p>
                      </div>
                      <div className="col-lg-4 col-sm-3">
                            <h4>Contacter le responsable</h4>
                          <p className="link--website">raf@3pommes.org</p>
                      </div>    
                  </div>                   
                        <div className="row row--setButton">
                            <button>T'inscire pour d'autres acitivitées</button>
                            <a className="link--website" href="#">Historique de tes activitées</a>
                        </div>
                </div>
            </div>

 </div>
 
 
        
}
function PartGestion(props){
 return <div className="container container--partactivites">
            <ul className="nav nav-tabs item--icons">
                <li className="active">
                    <a data-toggle="tab" href="#acitivites">
                        Demandes techniques
                        <span className="pins">4</span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="#menu1">
                        Cours particuliers
                        <span className="pins">4</span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="#menu2">
                        Nouveaux pseudos
                        <span className="pins">4</span>
                    </a>
                </li>            
                <li>
                    <a data-toggle="tab" href="#menu3">
                        Pseudos en attente
                        <span className="pins">4</span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="#menu4">
                        Activités 
                        <span className="pins">4</span>
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div id="gestion" className="tab-pane fade in active tabgestion"> 
                <div className="row--menuTab">
                    <div className="set--searchExpand">
                        <aside id="searchbartop">
                            <input type="checkbox" id="searchbartopbtn2"  />                                                
                                <form method="post" action="">
                                    <div><input type="text" defaultValue="Recherche" /></div>
                                </form>
                            <label htmlFor="searchbartopbtn2" className="loupe">
                                <i className="fas fa-search"></i>
                            </label>
                        </aside>
                </div>
                    <div className="set--prevNext">
                        <ul>
                            <li className="prev"><i className="fas fa-angle-left"></i></li>
                            <li className="next"><i className="fas fa-angle-right"></i></li>
                        </ul>                 
                    </div>
                </div>            
                  <div className="row--gestion table-responsive">   
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td><b>Demande de fourniture</b></td>
                                <td>Cartouche d'encre</td>
                                <td className="t-right text-italic"><b>15/04/2019 - 15h30</b></td>
                            </tr>
                            <tr>
                            <td><b>Demande de fourniture</b></td>
                                <td>Cartouche d'encre</td>
                                <td className="t-right text-italic"><b>15/04/2019 - 15h30</b></td>
                            </tr>
                            <tr>
                            <td><b>Demande de fourniture</b></td>
                                <td>Cartouche d'encre</td>
                                <td className="t-right text-italic"><b>15/04/2019 - 15h30</b></td>
                            </tr>
                            </tbody>
                        </table>
                      
                  </div>
                        <div className="row row--setButton">
                            <button>Faire une demande technique</button>
                            <a className="link--website" href="#">Historique de tes demandes techniques</a>
                        </div>
                </div>
             
            </div>

 </div>
 
 
        
}

class ContenttabJeunesActiviteesGestion extends React.Component {
    render() {
        return  <section className="section--tabJeunesActivitesGestion">
            <div className="container--tabJeunesActivitesGestion">
                <ul className="nav nav-tabs nav-headerTabs">
                    <li className="active"><a data-toggle="tab" href="#jeunes">Les jeunes</a></li>
                    <li><a data-toggle="tab" href="#activites">Activitées</a></li>
                    <li><a data-toggle="tab" href="#gestion">Gestion</a></li>
                </ul>

            <div className="tab-content">
            <div id="jeunes" className="tab-pane fade in active">
                   <Partlesjeunes/>
                   <Partlesjeunes/>
                   <Partlesjeunes/>
                   <Partlesjeunes/>
                   <Partlesjeunes/>
                   <Partlesjeunes/>
                   <Partlesjeunes/>
                   <Partlesjeunes/>
                   <Partlesjeunes/>
            </div>
                    <div id="activites" className="tab-pane fade">
                     
                        <Partactivites/>
                    </div>
                    <div id="gestion" className="tab-pane fade">
                        
                        <PartGestion/>
                    </div>
                </div>
            </div>
           

        </section>
        
      }
}

// const sectionContainer = document.querySelector('#section--tabJeunesActivitesGestion');
// ReactDOM.render(e(tabJeunesActiviteesGestion), sectionContainer);

export default ContenttabJeunesActiviteesGestion;