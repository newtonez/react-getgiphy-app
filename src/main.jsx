import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';
import { GifExpertApp2 } from './GifExpertApp2';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp2 /> 
    {/* <GifExpertApp2 /> */}
  </React.StrictMode>
);
