import React, {Component} from 'react';
import Social_Profiles from './data/socialProfiles';
import SOCIALPROFILES from './data/socialProfiles';


class SocialProfile extends Component{
    render(){
        const {link,img}= this.props.social;
        return(
            <span style={{margin : 7}}>
                <a href={link}><img src={img} alt='profile' style={{height: 40 , width: 40}}/></a>
            </span>
        )
    }
    
}

class SocialProfiles extends Component{
    render(){
        return(
            <div>
                <h2>Connect With Me!</h2>
                <div >
                    {
                        Social_Profiles.map(SOCIAL_PROFILE=>{
                            return <SocialProfile key={SOCIAL_PROFILE.id} social={SOCIAL_PROFILE}/>
                        })
                        // <p>hi</p>
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;