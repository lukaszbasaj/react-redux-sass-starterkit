import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.scss';

class App extends Component {
  render() {
    return <div>
      <h1>Hello World!</h1>
      <p>
        Webpack + React + Babel + Sass
      </p>
    </div>
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}