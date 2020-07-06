'use strict';

const e = React.createElement;

class HomeMenuOpen extends React.Component {
    render() {
        return (
          <React.Fragment>
    <section id="HomeMenuOpen">
        <div className="container container--HomeMenuOpen">
          <div className="container--carre col-lg-4 col-sm-4 col-xs-12">
            <h1><a href="#">Activitésfdsfds</a></h1>
          </div>
          <div className="container--carre col-lg-4 col-sm-4 col-xs-12">
            <h1><a href="#">Soutiens scolaires</a></h1>
          </div>
          <div className="container--carre col-lg-4 col-sm-4 col-xs-12">
            <h1><a href="#">Jobs</a></h1>
          </div>
          <div className="container--carre col-lg-4 col-sm-4 col-xs-12">
            <h1><a href="#">Travail institution</a></h1>
          </div>
          <div className="container--carre col-lg-4 col-sm-4 col-xs-12">
            <h1><a href="#">Kot émancipation</a></h1>
          </div>
          <div className="container--carre col-lg-4 col-sm-4 col-xs-12">
            <ul>
              <li>
              <a href="#"> Contact</a>
              </li>
              <li>
              <a href="#"> FAQ</a>
              </li>
              <li>
              <a href="#">Lorem Ipsum</a>
              </li>
              <li>
              <a href="#">Lorem Ipsum</a>
              </li>
              <li>
              <a href="#">Lorem Ipsum</a>
              </li>
              <li>
              <a href="#">Lorem Ipsum</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </React.Fragment>
        )
  
      }
}

const Container = document.querySelector('#HomeMenuOpen');
ReactDOM.render(e(HomeMenuOpen), HomeMenuOpen);

export default HomeMenuOpen;