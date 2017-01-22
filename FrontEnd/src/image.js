import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux'


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

// compose multiple "decorators"
const enhance = compose(
  connect((store) =>{
  	image: store.currentList[store.index],
  }),
)

export default enhance(Image)

