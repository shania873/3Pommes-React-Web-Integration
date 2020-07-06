'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

class SectionCitation extends React.Component {
    render() {
        return  <section className="section--pageformulaire">
        <div className="container">
            <div className="container container--titlePagegenerique">
            <div className="col-sm-6 title--pagegenerique">
                <span>3POMMES</span>
                <h2>Les éléments de formulaire</h2>
            </div>
            </div>
           

            <div className="container container--champsdebase">
                <div className="col-sm-6">
                <form>
                <h3>Champs de base</h3>
                <div className="row">
                    <div className="col-sm-6">                
                            <div className="form-group">
                                <label htmlFor="form-input--1">Nom ou chef éducateur <span className="asterix">*</span></label>
                                <input type="text" className="form-control3Pommes" id="form-input--1"/>
                            </div>   
                            <div className="form-group">
                                <label htmlFor="form-input--2">Email  <span className="asterix">*</span></label>
                                <input type="text" className="form-control3Pommes" id="form-input--2" />
                            </div>  
                        </div>

                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="form-input--3">GSM</label>
                                <input type="email" className="form-control3Pommes" id="form-input--3"/>
                            </div>      
                    </div>   
                </div>      
             </form>
                </div>
              
            </div>
          <div className="container container--menuderoulant">
              <div className="col-sm-6">
              <form>
            <h3>Menu déroulant</h3>
            <div className="row">
                <div className="col-sm-6">                
                        <div className="form-group">
                            <label htmlFor="form-select--1">Lorem ipsum  <span className="asterix">*</span></label>
                            <select className="form-control3Pommes" id="form-select--1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                </div>

                    <div className="col-sm-6">
                    <div className="form-group">
                            <label htmlFor="form-select--2">Lorem ipsum  <span className="asterix">*</span></label>
                            <select className="form-control3Pommes" id="form-select--2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>  
                </div>   
            </div>      
           </form>
              </div>
         
          </div>
           <div className="container container--cacheacocher">
               <div className="col-sm-6">
               <form>
            <div className="row">
                <div className="col-sm-6 checkbox--container">  
                    <h3>Radio</h3>
                    <label htmlFor="form-checkbox">Lorem ipsum  <span className="asterix">*</span></label>
                        <label className="container">One
                        <input type="checkbox" defaultChecked="checked" id="form-checkbox"/>
                        <span className="checkmark"></span>
                        </label>

                        <label className="container">Two
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                        </label>

                        <label className="container">Three
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                        </label>

                        <label className="container">Four
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                        </label>

                     
                </div>
                  <div className="col-sm-6 radio--container">
                  <h3>Checkbox</h3>
                  <label htmlFor="form-radio--1">Lorem ipsum  <span className="asterix">*</span></label>
                        <label className="container">One
                        <input type="radio" name="radio" id="form-radio--1"/>
                        <span className="checkmark"></span>
                        </label>
                        <label className="container">Two
                        <input type="radio" name="radio"/>
                        <span className="checkmark"></span>
                        </label>
                        <label className="container">Three
                        <input type="radio" name="radio"/>
                        <span className="checkmark"></span>
                        </label>
                        <label className="container">Four
                        <input type="radio" name="radio"/>
                        <span className="checkmark"></span>
                        </label>
                </div>   
            </div>      
           </form>
               </div>
         
           </div>
           <div className="container container--datepicker">
              <div className="col-sm-6">
              <form method="post">
            <h3>Datepicker</h3>
                <div className="row">
                <div className="col-sm-6">
                <label className="control-label" htmlFor="date--1">Du *</label>
                    <div className="form-group picker-container"> 
                   
                        <input className="form-control3Pommes date" className="date" name="date" placeholder="jj/mm/aaaa" id="date--1" type="text"/>
                    </div>
                </div>    
                <div className="col-sm-6">
                <label className="control-label" htmlFor="date--2">Au *</label>
                    <div className="form-group picker-container"> 
                   
                        <input className="form-control3Pommes date" className="date" name="date" placeholder="jj/mm/aaaa" id="date--2" type="text"/>
                    </div>
                </div>   
                </div>
            </form>
              </div>
       
          </div>
          <div className="container container--textaria">
                <div className="col-sm-6">
                    <form>
                    <h3>Textarea</h3>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="textaera">Example textarea</label>
                                    <textarea className="form-control3Pommes" id="textaera" rows="3"></textarea>
                                    <span className="required--info-textaria">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container container--buttons">
                <div className="col-sm-8">
                    <form className="form-inline">
                        <div className="row">
                            <div className="col-sm-6">
                                    <button type="submit" className="btn--principal">Button principal</button>
                                    <button type="submit" className="btn--secondaire">Button secondaire</button>
                                    <a href="#" className="link--website">Back</a>
                            </div>
                        </div>
                    </form>
                </div>             
            </div>

        

           
        
        </div>
      </section>
      }
}

const sectionContainer = document.querySelector('#section--pageformulaire');
ReactDOM.render(e(SectionCitation), sectionContainer);