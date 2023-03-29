import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from 'src/routes/AppRouter';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
