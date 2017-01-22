import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux'
import * as actionCreators from './actions/actions.js'
import { bindActionCreators } from 'redux'
import $ from 'jquery';


class Select extends React.Component {

	constructor(props){
		super(props);
		this.handleClickOne = this.handleClickOne.bind(this);
		this.handleClickTwo = this.handleClickTwo.bind(this);


	}
	componentDidMount(){
		console.log(this.props);
		this.props.populate();
		$.getJSON('/faces/api/inital')
      	.then((data) => {
        	console.log(data.results);
      	});
	}

	handleClickOne(e) {
  		if(this.props.index > 9){
  			this.props.send();
  		}else{
  			this.props.swipeLeft(this.props.current[this.props.index+1]);
  		}
  	}
	
	handleClickTwo(e) {
		console.log(this.props);
		if(this.props.index > 9){
  			this.props.send();
  		}else{
  			this.props.swipeRight(this.props.current[this.props.index+1]);
  		}

  	}  	

  render() {
  	const CircleLight = {
  		borderRadius: "50%",
  		width: "50px",
  		height: "50px",
  		display: "flex",
  		justifyContent: "center",
  		alignItems: "center",
  		background: "white",

  	}

	const selectContainer = {
		width: "300px",
		height: "100px",
		display: "flex",
		justifyContent: "center",
	}
	const circleDark = {
	  	borderRadius: "50%",
	  	width: "65px",
	  	display: "flex",
	  	justifyContent: "center",
	  	alignItems: "center",
	  	marginRight: "20px",
	  	marginTop: "20px",
	  	height: "65px",
	  	background: "#f0f0f0",
	}

	

    return (
      <div style = {selectContainer}>
        <div style = {circleDark} onClick={this.handleClickOne}>
        	<div style = {CircleLight}>
        		<img src = 
  		 	 		 "https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Delete_remove_close_exit_trash_cancel_cross.png" 
  				 	 height="20px" 
  			 		 width= "20px" />
        	</div>
        </div>
        <div style = {circleDark} onClick={this.handleClickTwo}>
        	<div style = {CircleLight}>
        		<img src = 
  		 	 		 "http://icons.veryicon.com/png/System/Small%20%26%20Flat/heart.png" 
  				 	 height="25px" 
  			 		 width= "25px" />
        	</div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  	return {
  		index: state.index,
  		current: state.current,
  	}
}

function mapDispatchToProps(dispatch) {
	console.log(actionCreators);	
  return {
  	swipeRight: bindActionCreators(actionCreators.swipeRight, dispatch),
  	swipeLeft: bindActionCreators(actionCreators.swipeLeft, dispatch),

  	populate: bindActionCreators(actionCreators.startPopulate, dispatch),
  	populateDone: bindActionCreators(actionCreators.endPopulate, dispatch),
  	
  	send: bindActionCreators(actionCreators.send, dispatch),
  	endSend: bindActionCreators(actionCreators.endSend, dispatch)
  }	
}

export default connect(mapStateToProps, mapDispatchToProps)(Select);
