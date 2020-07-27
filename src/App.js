import React , {Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfile';
import './app.css';
import profile from './assets/profile.png';
import Experiences from './Experinces';
import Navbar from "./components/navbar";
import Achivements from './components/Achievements';
import Skills from './components/Skills';


class App extends Component{
	state={le : true};
	
	toggleState =() =>{
		this.setState({le : !this.state.le});
	}

	render(){
		const abc="aa";
		//const ax=ReactDOMFactories.h2(null,"hII");
		return (
			<div> 
				<Navbar/>
				<img src={profile} className='profile'></img>
				<h1>Hello!</h1>
				<p>I am passionate engineering student, having passion for coding, 
					with the keen interest in competitive programming, 
					Implementing with different programming languages.</p>
								
						{
							this.state.le?
							(
								<button className="btn btn-info" onClick={this.toggleState}>Show More</button>
							):
							(
								<div>
								<p>
									Technical proficiency include:<br/>
									Programming languages: C, C++, Java, Python<br/>
									Web Developing tools: HTML, CSS, JavaScript,Bootstrap<br/>
									Database: SQL, Oracle SQL, MySQL<br/>
									Tools: Android Studio, NetBeans IDE, JCreator, Git, Dev C++, Sublime<br/>
								</p>
								<p>Furthermore, I constantly look for new learning opportunities. 
									That can make me to learn new skills and technologies. </p>
								<button className="btn btn-info" onClick={this.toggleState} >Show Less</button>
								</div>
							)
						}
						
					
				<div id="projects"/>	
				<hr/>
				<Projects/>
				<hr/>
				<Experiences/>
				<hr/>
				<Skills/>
				<hr/>
				<Achivements/>
				<hr/>
				<SocialProfiles/>
			</div>
			
		)
	}		
		
}
export default App;