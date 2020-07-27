import React , {Component ,useRef} from 'react';

window.onscroll=()=>{
    // document.getElementsByClassName('fixed-top');
    if(document.body.scrollTop>150 || document.documentElement.scrollTop > 150)
    {
        document.getElementsByClassName('fixed-top')[0].style.backgroundColor="#aaa";
    }
    else{
        document.getElementsByClassName('fixed-top')[0].style.backgroundColor="transparent";
    }
    // console.log('asd');
}



const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
// General scroll to element function

const ScrollDemo = () => {

   const myRef = useRef(null)
   const executeScroll = () => scrollToRef(myRef)

   return (
      <> 
         <div ref={myRef}>I wanna be seen</div> 
         <button onClick={executeScroll}> Click to scroll </button> 
      </>
   )
}

function scrollToBottom(){
  window.scrollTo(0,document.body.scrollHeight);
}

function toExperience(){
  document.getElementById('experiences').scrollIntoView(true);
  // window.scrollTo(-100,0);
}
function toPrjct(){
  document.getElementById('projects').scrollIntoView(true);
}

function Navbar(){

  const myRef=useRef(null);
  const executeScroll = () => scrollToRef(myRef)
	return(
		<div >
			<nav className="navbar fixed-top navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="/">Profile</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      {/* <li class="nav-item active">
        <a class="nav-link" href="#">Projects <span class="sr-only">(current)</span></a>
      </li> */}

    </ul>
    <ul className="nav navbar-nav navbar-right">
    <li className="nav-item active">
        {/* <a class="nav-link" ref={myRef} id="project-link" href="#projects">Projects <span class="sr-only">(current)</span></a> */}
        <button className="btn" type="button" onClick={toPrjct}>Projects</button>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#experiences" >Experiences</a> */}
        <button className="btn" type="button" onClick={toExperience}>Experiences</button>
      </li>
      <li className="nav-item">
        {/* <a class="nav-link" onClick={scrollToBottom}>Contact <span class="sr-only">(current)</span></a> */}
        <button className="btn" type="button" onClick={scrollToBottom}>Contact</button>
      </li>
    </ul>
  </div>
</nav>
</div>
	)
}
export default Navbar;