import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productReducer';
import { Provider } from 'react-redux';
import holdReducer from './features/holdReducer';
import orderReducer from './features/orderReducer';

const store = configureStore({
  reducer: {
    products: productReducer,
    hold: holdReducer,
    orders: orderReducer,
  }
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
