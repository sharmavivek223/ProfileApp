import React from 'react';
import experiences from './data/experiences';
import EXPERIENCES from './data/experiences';

function showExperiences(){
    return(
        <div className="container" >
            <h2>Experiences</h2>
            {/* <div style={{textAlign:'justify'}}> */}
            <div className="text-justify">    
              {
                  experiences.map((EXPERIENCE,i)=>{
                      return (
                      <div>
                          <span>
                              <h3 style={{display:'inline'}}>{EXPERIENCE.company+" - "}</h3>
                              <h5 style={{display:'inline', fontStyle:'italic'}}>{EXPERIENCE.title}</h5>
                           </span>
                           <br/>
                           <div style={{height:5}} />
                          <p>{EXPERIENCE.desc}</p>
                          <div style={{height:15}} />
                      </div>
                      
                      )
                  })
              }  
            </div>
        </div>
    )
}




export default showExperiences;
