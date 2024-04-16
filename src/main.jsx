import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PdfFile from './components/PdfFile.jsx'
import { PDFViewer } from '@react-pdf/renderer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />  
  },
  {
    path: '/pdf',
    element: <PDFViewer width={window.innerWidth} height={window.innerHeight}>
      <PdfFile />
    </PDFViewer>
  },
  {
    path: '*',
    element: <h1>404</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
