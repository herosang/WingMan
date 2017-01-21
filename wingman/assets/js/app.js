import styles from './css/index.scss';
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

    return (
      <div className = {styles.main}>
      	<div className = {styles.app}>
        	<Header />
        	<Image image = {this.state.image}/>
        	<Select />
        </div> 
      </div>
    )
  }
}
