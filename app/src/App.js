import React, { Component } from 'react';
import AppRouter from './AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import configureStore from './store/configureStore.dev';
import {Provider} from 'react-redux';
import {rootSaga} from './views/users/controllers/sagas'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppLayout from './Layouts/AppLayout';

// import rootReducer from './rootReducer';
// import createSagaMiddleware from 'redux-saga'
// import {createStore, applyMiddleware, compose} from 'redux';
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)     
// );

const store = configureStore();
store.runSaga(rootSaga)

class App extends Component {
  
  render() {
    return (
  	  <Provider store={store} >
        <React.Fragment>
            <CssBaseline />
            <Header/>
            <AppLayout>
              <AppRouter/>
            </AppLayout>
            <Footer/>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;