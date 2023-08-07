import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { SnackbarProvider } from 'notistack';
import {RecoilRoot} from 'recoil';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
