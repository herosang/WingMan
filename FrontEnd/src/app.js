import Header from './header.js';
import Image from './image.js';
import Select from './select.js';
import React from 'react';

export default class App extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {image: 'https://s-media-cache-ak0.pinimg.com/736x/e5/a4/81/e5a481526621647b1afaeb87738dad99.jpg'}
  }

  render() {

  	const main = {
	    width: "100vw",
	    height: "100vh",
	    display: "flex",
	    justifyContent: "center",
	    alignItems: "center",
	}

	const app = {
		width: "320px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
		height: "500px",
		boxShadow: "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",
	  	borderRadius: "10px",
	}
    return (
      <div style = {main}>
      	<div style = {app}>
        	<Header />
        	<Image />
        	<Select />
        </div> 
      </div>
    )
  }
}
