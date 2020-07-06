 
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;
import SectionActiviteesContent from '../components/content--infosactivites.js';



class SectionActivitees extends React.Component { 
 
     render(){
        return(       
          <div className="container">
  <SectionActiviteesContent/>
          </div>
      
        )
     }
}


const sectionContainer = document.querySelector('#section--infosactivites');
ReactDOM.render(e(SectionActivitees), sectionContainer);
