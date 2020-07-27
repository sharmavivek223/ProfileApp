import React from 'react';
import SKILLS from '../data/skills';

function Skills(){
    return(
        <div className="container">
            <h2>
                Skills
            </h2>
            <table style={{width:'100%'}}>
            <tbody>
            {
                SKILLS.map((SKILL,i)=>{
                    if(i%3!=0) return;
                    else
                        return(
                            <tr >
                                <td key={i} style={{width:'33%', padding:'15'}}>
                                    {SKILLS[i]}
                                </td>
                                <td key={i+1} style={{width:'33%', padding:'15'}}>
                                    {SKILLS[i+1]}
                                </td>
                                <td key={i+2} style={{width:'33%', padding:'15'}}>
                                    {SKILLS[i+2]}
                                </td>
                            </tr>
                        )
                })
            }
            </tbody>    
            </table>
            <div style={{height:'10px'}} />
        </div>
    )
}

export default Skills;