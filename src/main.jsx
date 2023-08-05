import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { emptyApi } from './services/api'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={emptyApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)
