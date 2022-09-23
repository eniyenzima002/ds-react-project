import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CloudPage from './router/CloudPage';
import ContactPage from './router/ContactPage';
import RecoverPage from './router/RecoverPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/recover' element={<RecoverPage />} />
      <Route path='/cloud' element={<CloudPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
);