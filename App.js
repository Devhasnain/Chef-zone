import React from 'react';
import Routes from './src/navigation';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
