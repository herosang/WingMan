import React from 'react';

export default class Header extends React.Component {
  render() {
  	const headerContainer = {
		//font-family: 'Raleway', sans-serif;
		fontFamily: "'Righteous', cursive",
		display: "flex",
		justifyContent: "center",
		letterSpacing: "2px",
		fontSize: "250%",
		color: "#fd5c63",
		width: "300px",
		height: "50px",
		borderBottom: "1px #D3D3D3 solid",
		

	}
    return (
      <div style = {headerContainer}>
        WingMan
      </div>
    )
  }
}
