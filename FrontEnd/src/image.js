import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux'
import * as actionCreators from './actions/actions.js'
import { bindActionCreators } from 'redux'

class Image extends React.Component {

	
  render() {

  	const imageStyle = {
  		width: "95%",
  		borderRadius: "10px",
  		height: "95%",
  	}

  	const imageContainer = {
		width: "250px",
		height: "300px",
		marginTop: "20px",
		boxShadow: "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",
	  	borderRadius: "10px",
	  	display: "flex",
	  	justifyContent: "center",
	  	alignItems: "center",

	}

    return (
      <div style = {imageContainer}>
  		<img src = {this.props.image}
  			 style = {imageStyle}	
  		      />
      </div>
    )
  }
}

function mapStateToProps(state) {
	console.log(state);
  	return {
    	image: ((state.index > 0) ? state.current[state.index] : 
    		'https://s-media-cache-ak0.pinimg.com/736x/e5/a4/81/e5a481526621647b1afaeb87738dad99.jpg')
  	}
}

export default connect(mapStateToProps)(Image);


