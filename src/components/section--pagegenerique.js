'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

class SectionSoutiensScolaire extends React.Component {
    render() {
        return <section className="section--pagegenerique">
        <div className="container">
            <div className="title--pagegenerique">
                <span>TOUT SAVOIR SUR 3POMMES</span>
                <h2>Soutiens scolaire</h2>
                <p>
                    Nous proposons 3 services de soutien scolaire:
                </p>
            </div>
            <div className="row row--flex row--pagegenerique">
                <div className="col-sm-5">
                <h3>« écoles de devoirs » en maison d’accueil</h3>

                    <p>Un professeur peut venir 2 fois par semaine pour gérer une classe de devoirs et répondre à tes problèmes d’organisation, 
                        de méthodologie ainsi qu’aux difficultés que tu rencontres à l’école.</p>

                    <p class="text-italic">C’est ta responsabilité d’y participer, ne passe pas à côté de cette occasion d’être régulier dans ton travail! 
                        C’est la clé de la réussite!</p>
                </div>
                <div className="col-sm-6 col-sm-push-1">
                    <img className="img-responsive" src="../src/img/img1--pagegenerique.PNG"/>
                </div>
            </div>
            <div className="row row--flex row--pagegenerique">
            <div className="col-sm-6">
                    <img className="img-responsive" src="../src/img/img2--pagegenerique.PNG"/>
                </div>
                <div className="col-sm-5  col-sm-push-1">
                <h3>Week-end remédiation scolaire à la Caracole</h3>

<p>Une fois par mois, nous organisons des sessions de travail pour te permettre d’être à jour dans tes travaux. Différents thèmes sont abordés tout au long de l’année afin de t’aider à gérer au mieux ta scolarité (nous avons même prévu un week-end spécial dédié à la préparation du CEB).
Venir à ces week-ends, c’est aussi venir s’amuser ensemble : nous te proposerons des activités pour te détendre et te changer les idées! Quoi de mieux pour repartir sur le bon pied?</p>


                </div>
              
            </div>
            <div className="row row--flex row--pagegenerique">
                <div className="col-sm-8 m-auto">
                    <h2 className="text-italicCitation">Pour ce qui est de l'avenir, il ne s'agit pas de le prévoir, mais de le rendre possible. </h2>
                    <p className="t-right">Antoine Exuspery</p>
                    </div>
            </div>
            <div className="row row--flex row--pagegenerique">
                <div className="col-sm-5">
                    <h3>Cours particuliers en maison d’accueil</h3>
                    
                        <p>Tu fais partie d’un club? Cela veut dire que tu t’investis chez nous et ça te privilégie pour certaines choses. Comme, par exemple, pouvoir introduire une demande pour avoir des cours particuliers en maison d’accueil!</p>
                </div>
                <div className="col-sm-6  col-sm-push-1">
                    <img className="img-responsive" src="../src/img/img3--pagegenerique.PNG"/>
                </div>
            </div>

            <div className="row row--flex row--pagegenerique">
                <div className="set-CallToAction--soutiensscolaire d-flex col-sm-12">
                    <button>Faire une demande de soutien scolaires</button>
                </div>
            </div>

        </div>
    </section>
      }
}

const sectionContainer = document.querySelector('#section--pagegenerique');
ReactDOM.render(e(SectionSoutiensScolaire), sectionContainer);