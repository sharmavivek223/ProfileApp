import React from 'react';
import ACHIEVEMENTS from '../data/achievements';
function achievements(){
    return(
        <div>
            <h2 id="Achievements">Achievements</h2>
            <br/>
            <div>
                <table style={{margin:'auto'}}>
                <tbody>          
                    {
                        ACHIEVEMENTS.map((ACHIEVEMENT,i)=>{
                            return(
                               <tr key={ACHIEVEMENT.id}>
                                    <td style={{width:'20%'}}>{ACHIEVEMENT.year}</td>
                                    <td className="text-justify" style={{padding:'15',}}>{ACHIEVEMENT.desc}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>  
                </table>
            </div>
        </div>
    )
}

export default achievements;
