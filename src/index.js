import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GridLoader from 'react-spinners/GridLoader'
import logo from '../src/Assets/ashvingami_assets/Kidney_Logo.png'
import reportWebVitals from './reportWebVitals';
const App =React.lazy(()=> import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<img src={logo} width='100' style={{position:'absolute',top:'50%',left:'45%'}}/>}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
reportWebVitals();
