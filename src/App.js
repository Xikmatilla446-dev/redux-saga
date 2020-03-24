import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';

import Header from './components/header/Header';
import ImageGrid from './components/image/ImageGrid';


import configureStore from './store';

const store = configureStore();


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Fragment>
                <Header />
                <ImageGrid />
            </Fragment>
          </Provider>
    );
  }
}

export default App;
