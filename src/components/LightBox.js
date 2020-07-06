

import React from 'react';
import ReactDOM from 'react-dom';


function LightBox(props) {
  return (
    <div className="Gallery">
        
        <div className="gallery--infosrandonne">     
     <div className="gallery--singleImage" >
     <a href={props.imagessrc1} className="fresco" data-fresco-group="options_example" style={{backgroundImage: `url(${props.imagessrc1})`}}>
       {/* <img src={props.imagessrc1} style={{width: '100' + '%'}} className="img-responsive"/> */}
       </a>
     </div>
   <div className="gallery--multipleImage">         
     <div className="row--gallery">
       <div className="item--gallery">
       <a href={props.imagessrc2} style={{backgroundImage: `url(${props.imagessrc1})`}} className="fresco" data-fresco-group="options_example">
        
         </a>
       </div>
       <div className="item--gallery">
       <a href={props.imagessrc3} style={{backgroundImage: `url(${props.imagessrc1})`}} className="fresco" data-fresco-group="options_example">
       
         </a>
       </div>
     </div>
     <div className="row--gallery">
     <div className="item--gallery">
       <a href={props.imagessrc4} style={{backgroundImage: `url(${props.imagessrc1})`}} className="fresco" data-fresco-group="options_example">
      
         </a>
       </div>
       <div className="item--gallery add--photos"  style={{width: '50' + '%'}} >
         <div className="title--photos">
         
           <p>
             <span>+25</span>Photos</p>
            
         </div>
         
       </div>
     </div>          
   </div>
</div>
    
    </div>
  );
}

export default LightBox;