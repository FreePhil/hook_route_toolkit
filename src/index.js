import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Result } from './Result';

const router = createBrowserRouter([
  {
    index: true,
    element: <Step1 />
  },
  {
    path: 'step1',
    element: <Step1 />
  },
  {
    path: 'step2',
    element: <Step2 />
  },
  {
    path: 'step3',
    element: <Step3 />
  },
  {
    path: 'step4',
    element: <Step4 />
  },
  {
    path: 'result',
    element: <Result />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
