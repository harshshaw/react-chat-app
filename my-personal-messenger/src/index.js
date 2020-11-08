import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import store from './Store/index'

const firebaseConfig = {
  apiKey: "AIzaSyAw2h8XSvhpneYwpamKxyKhVIId0_7uAVU",
  authDomain: "my-personal-chat-fe4c2.firebaseapp.com",
  databaseURL: "https://my-personal-chat-fe4c2.firebaseio.com",
  projectId: "my-personal-chat-fe4c2",
  storageBucket: "my-personal-chat-fe4c2.appspot.com",
  messagingSenderId: "153480729948",
  appId: "1:153480729948:web:25e48ac865de8620129d99"
};

firebase.initializeApp(firebaseConfig);

window.store=store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
