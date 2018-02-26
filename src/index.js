import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Store from './store/index';
import App from './App';
import MyAppContainer from './MyAppContainer';

// CSS
import './css/mainSass.scss'

const renderAPP = (Component) => {
  render(    
      <AppContainer>
        <Provider store={Store}>
          <Component />
        </Provider>
      </AppContainer>,
    document.querySelector('#root')
  );
};

renderAPP(MyAppContainer);
if (module && module.hot) {
  module.hot.accept('./MyAppContainer', () => {
    render(MyAppContainer);
  });
};
