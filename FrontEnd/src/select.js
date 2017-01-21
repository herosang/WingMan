import styles from './css/select.scss';
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

  	

    return (
      <div className = {styles.selectContainer}>
        <div className = {styles.circleDark}>
        	<div style = {CircleLight}>
        		<img src = 
  		 	 		 "https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Delete_remove_close_exit_trash_cancel_cross.png" 
  				 	 height="20px" 
  			 		 width= "20px" />
        	</div>
        </div>
        <div className = {styles.circleDark}>
        	<div style = {CircleLight}>
        		<div className = {styles.heart}>
        		</div>
        	</div>
        </div>
      </div>
    )
  }
}
