import React, {Component} from 'react';
import PROJECTS from './data/projects';

class Project extends Component{


	render(){
		//const {title,link,img}=this.props.project.object;

		const {title, link, img, desc} =this.props.project;
		return(
			<div style={{display: 'inline-block', width: 300 ,  margin : 25}}>
				<h3><a href={link}>{title}</a></h3>
				<img src={img} alt='profile' style={{width: 300, height : 200}}></img>
				<br/>
				<br/>
				<p>{desc}</p>
			</div>
		)
	}
}


class Projects extends Component{
	render()
	{
		return (
			<div className="container" >
				<h2>Highlighted Projects</h2>
				<div className="row">					
					{
						PROJECTS.map((PROJECT,i) => {
							return (
								<Project key={PROJECT.id} project={PROJECT} />
							)
						})
					}
				</div>
				<div id="experiences"></div>
			</div>	
		)
	}
}

export default Projects;