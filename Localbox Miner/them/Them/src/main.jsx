import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemecontexProvider } from './contex/Themecontex';
import {AuthcontexProvider} from './contex/Authcontex'

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthcontexProvider>
  <ThemecontexProvider>
    <App />
  </ThemecontexProvider>
  </AuthcontexProvider>
);