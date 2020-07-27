import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const PROJECTS =[
	{
		id: 3,
		title: 'Algorithms Visualiser',
		link: 'https://github.com/ronak750/AlgorithmsVisualiser',
		img : project4,
		desc: "This project helps in understanding that how to implement the prominent searching and sorting algorithms and to visualise how these algorithms handle data in real time."
	},
	{
		id: 2,
		title: 'Facial Expression Recogniszer',
		link: 'https://github.com/ronak750/EmotionsDetection',
		img : project2,
		desc: 'It performs real time face detection and  thus classifies the facial expressions observed (happy, surprised,angry, sad  etc).'
	},
	{
		id: 1,
		title: 'Scheduling Simulator',
		link: 'https://github.com/ronak750/CPUScheduling-Simulation',
		img : project1,
		desc: 'A perfect simulator to run and test various scheduling algorithms with graphical representation'
	},
	{
		id: 4,
		title: 'Interactive Color Game',
		link: 'https://github.com/ronak750/colorGame',
		img : project3,
		desc: 'An interactive game website that can be played for fun, along with enhancing knowledge about RGB combinations of colours.'
	}
];

export default PROJECTS;