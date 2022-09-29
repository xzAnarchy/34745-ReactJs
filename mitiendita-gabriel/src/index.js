import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqpLC_gttVr-6yMscKqrOrLX7_atgyp3M",
  authDomain: "coderhouse-ecommerce-40533.firebaseapp.com",
  projectId: "coderhouse-ecommerce-40533",
  storageBucket: "coderhouse-ecommerce-40533.appspot.com",
  messagingSenderId: "874645082136",
  appId: "1:874645082136:web:9d921b5f97a24a8810f36d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
