'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

import ContenttabJeunesActiviteesGestion from '../components/content--tabJeunesActiviteesGestion.js';

class tabJeunesActiviteesGestion extends React.Component {
    render() {
        return  <React.Fragment>
            <div className="container">
                <ContenttabJeunesActiviteesGestion/>
            </div>
           
        </React.Fragment>
        
      }
}

const sectionContainer = document.querySelector('#section--tabJeunesActivitesGestion');
ReactDOM.render(e(tabJeunesActiviteesGestion), sectionContainer);