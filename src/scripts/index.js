import '../styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery/src/jquery';
window.jQuery = $;
window.$ = $;
import boostrap from 'bootstrap';
import './slick.js';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Fresco from '@staaky/fresco';
import '../components/header.js';
import '../components/footer.js';
import './script_menuOpen.js';
import '@fortawesome/fontawesome-free/js/all.js';
var arrow = document.querySelectorAll("slick-arrow");

arrow.innerHTML = "";



$.extend(Fresco.Skins, {
    'fresco' : {
      ui: 'outside',      
      maxHeight: 500,
      maxWidth: 500,
      thumbnails: true
  
    }
  });
