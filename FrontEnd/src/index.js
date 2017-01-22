import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.js';
import { Provider } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from "./store";

render( <Provider store = {store}><AppContainer><App/></AppContainer></Provider>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./app.js', () => {
    const App = require('./app.js').default;
    let store = createStore(todoApp)
    render(
    <Provider>
      <AppContainer>
        <MuiThemeProvider>
        	<App/>
        </MuiThemeProvider>
      </AppContainer>
    </Provider>  ,
      document.querySelector("#app")
    );
  });
}
