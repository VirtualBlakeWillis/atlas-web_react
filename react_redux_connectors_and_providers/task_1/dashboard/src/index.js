import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import Notifications from './Notifications/Notifications';
import { createStore } from 'redux';
import uiReducer from './reducers/uiReducer';
import { Provider } from 'react-redux';

const store = createStore(uiReducer)

// Root for the main app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// // Root for the notifications
// const rootNotifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
// rootNotifications.render(
//   <React.StrictMode>
//     <Notifications />
//   </React.StrictMode>
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
