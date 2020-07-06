'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

class detailsinfosactiviteesPurple extends React.Component {
    render() {
        return  <section className="section--detailsinfosactivitees">
           
               
               <div className="row--detailsinfosactivitees">
                  
               <div className="container container--link">
                        
                        <span><i className="fas fa-arrow-left"></i></span>
                            <a href="#" className="link--website"> 
                               Retour à la liste de recherche
                            </a>
                  
                        
                    </div>

                 

                <div className="container setTitle--detailsinfosactivitees">
                            <div className="col-lg-6 col-md-6  col-sm-8 col-xs-12">
                                <span className="purple--Typo">Activité open</span>
                                    <h3>Multi activitées sport nature 8/11</h3>
                                </div>
                                <div className="col-lg-1 col-sm-1 xs-hidden">
                                    <img src="../src/img/icon--montagne.png"/>
                                </div>
                            </div>  
                 </div>        
                    <div className="setContent--detailsinfosactivitees purple--Bg">
                        <div className="container">
                            <div className="col-sm-7 leftCol--detailsinfosactivitees">
                                <p id="p--detailsinfosactivites">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequuntur assumenda adipisci, veniam numquam impedit voluptatem praesentium eaque, dolores ducimus unde, magni cumque debitis dicta voluptas. Eum obcaecati eveniet velit qui suscipit saepe, illum et soluta cum sequi, ex, rem nihil odio. Facere, esse omnis corporis quia quam reiciendis delectus, consectetur quisquam, quasi voluptatum harum iure quas ut mollitia eligendi tempore. Animi sapiente placeat reiciendis mollitia cum dignissimos libero neque corrupti nihil laboriosam in, voluptas porro aliquid aspernatur. Consequatur praesentium hic quae dolorem blanditiis reprehenderit nulla pariatur, tempora fuga eaque necessitatibus laudantium recusandae ipsam ducimus, distinctio cum dolores deserunt sit.</p>
                            </div>
                            <div className="col-sm-4 rightCol--detailsinfosactivitees ">
                                <img src="../src/img/multiactivite--picture.PNG" className="img-responsive"/>
                            </div> 
                        </div>
                     </div>
                 
              
      </section>
      }
}

const sectionContainer = document.querySelector('#section--detailsinfosactiviteesPurple');
ReactDOM.render(e(detailsinfosactiviteesPurple), sectionContainer);

import '../scripts/script_menuOpen.js';