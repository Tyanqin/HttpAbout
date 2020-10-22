import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './redux/store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
   <Provider   store = {Store}>
       <BrowserRouter>
               <App />
       </BrowserRouter>
   </Provider>,
  document.getElementById('root')
);
