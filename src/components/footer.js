'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

class Footer extends React.Component {
    render() {
       return(
        <React.Fragment>
<div className="container">

<div className="row">

  <div className="col-sm-2">
    <h6>3POMMES 2016</h6><img src="../src/img/logo.png" className="img-responsive"/>
    <p>Il est temps de vivre la vie que tu t'es imaginée</p>
  </div>
  <div className="col-sm-2">
    <h6>Contacts</h6>
    <ul>
      <li>Chemin de la Caracole 72 5000 Namur</li>
      <li>Tél. 081 44 80 50</li>
      <li>Fax 081 31 08 46</li>
      <li>info@3pommes.org</li>
    </ul>
  </div>
  <div className="col-sm-2">
    <h6>FAQ</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolor, totam expedita quod incidunt
      eveniet!</p>
  </div>
  <div className="col-sm-3">
    <h6>Code couleurs des activitées</h6>
    <ul>
      <li><span className="badge-yellow"></span>Clubs</li>
      <li><span className="badge-purple"></span>Les jobs sous forme de club</li>
      <li><span className="badge-red"></span>Les jobs dates libres</li>
      <li><span className="badge-green"></span>Les activités open</li>
    </ul>
  </div>
  <div className="col-sm-3">
    <h6>Légende des icones</h6>
    <ul>
      <li><span><i className="fas fa-eye"></i></span><a href="#Edito" data-toggle="modal" data-target="#Edito">Consulter/Voir plus</a></li>
      <li><span><i className="fas fa-pencil-alt"></i></span>Editer/Modifier</li>
      <li><span><i className="fas fa-plus-circle"></i></span>Ajouter/Créer</li>
    </ul>
  </div>
</div>
</div>

{/* // MODAL */}
<div className="modal fade" id="Edito" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
<div className="modal-content">         
  <div className="modal-body">
  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true"><i className="fas fa-times"></i></span>
    </button>
    <div className="col-lg-6 col-md-5 col-sm-6 hidden-sm d-flex p-0">
      <img src="../src/img/img--edito.PNG" alt="edito" className="img-responsive"/>
    </div>
    <div className="col-lg-5 col-md-7 col-sm-12 content--modal">
      <h3>Edito</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has bth desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard ies, but also the leaptially
        unchanged. It was popularised in the 19
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesd.
        It was popularised in the 1960s with the release blishing software like Aldu
        PageMaker including versions of Lorem Ipsum.
      </p>
      <div className="set--signature">
          <p>Caroline</p>
          <p className="italic">Directeur des opérations</p>
          <a href="#" className="link--website">caroline@3pommes.com</a>
      </div>
    </div>
  </div>            
</div>
</div>
</div>
</React.Fragment>
       )  
      }
}

const footerContainer = document.querySelector('#footer--3pommes');
ReactDOM.render(e(Footer), footerContainer);