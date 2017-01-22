import React from 'react';

export default class Select extends React.Component {
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
        <div style = {circleDark}>
        	<div style = {CircleLight}>
        		<img src = 
  		 	 		 "https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Delete_remove_close_exit_trash_cancel_cross.png" 
  				 	 height="20px" 
  			 		 width= "20px" />
        	</div>
        </div>
        <div style = {circleDark}>
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
