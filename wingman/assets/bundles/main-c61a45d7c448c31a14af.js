/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {import React from 'react';
	import { render } from 'react-dom';
	import { AppContainer } from 'react-hot-loader';
	import App from './app.js';
	import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

	render(React.createElement(
	  AppContainer,
	  null,
	  React.createElement(App, null)
	), document.querySelector("#app"));

	if (module && module.hot) {
	  module.hot.accept('./app.js', () => {
	    const App = __webpack_require__(2).default;
	    render(React.createElement(
	      AppContainer,
	      null,
	      React.createElement(
	        MuiThemeProvider,
	        null,
	        React.createElement(App, null)
	      )
	    ), document.querySelector("#app"));
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	import styles from './css/index.scss';
	import Header from './header.js';
	import Image from './image.js';
	import Select from './select.js';
	import React from 'react';

	export default class App extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = { image: 'https://s-media-cache-ak0.pinimg.com/736x/e5/a4/81/e5a481526621647b1afaeb87738dad99.jpg' };
	  }

	  render() {

	    return React.createElement(
	      'div',
	      { className: styles.main },
	      React.createElement(
	        'div',
	        { className: styles.app },
	        React.createElement(Header, null),
	        React.createElement(Image, { image: this.state.image }),
	        React.createElement(Select, null)
	      )
	    );
	  }
	}

/***/ }
/******/ ]);