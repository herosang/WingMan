import styles from './css/image.scss';
import React from 'react';


export default class Image extends React.Component {
  render() {

  	const imageStyle = {
  		width: "95%",
  		borderRadius: "10px",
  		height: "95%",
  	}

    return (
      <div className = {styles.imageContainer}>
  		<img src = {this.props.image}
  			 style = {imageStyle}	
  		      />
      </div>
    )
  }
}
