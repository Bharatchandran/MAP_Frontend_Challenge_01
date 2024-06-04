import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Component/Layout/Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import MarkedLaterPage from './Pages/MarkedLaterPage/MarkedLaterPage.jsx'
import {store} from './store/store'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      
      <App />
    </Provider>
  </React.StrictMode>,
)
