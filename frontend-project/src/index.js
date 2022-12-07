import React from 'react';
import ReactDOM from 'react-dom/client';
import "./bootstrap.minsolar.css"
import './index.css';
import App from './App';
import ContainerContext from './components/context/Container';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContainerContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContainerContext>
);


