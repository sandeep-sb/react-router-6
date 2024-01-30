import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorElement, AddContact, ShowContacts } from './components'
import ContactContextProvider from './context/ContactContextProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/add-contact",
        element: <AddContact />,
        errorElement: <ErrorElement />
      },
      {
        path: "/show-contacts",
        element: <ShowContacts />,
        errorElement: <ErrorElement />
      }
    ],
    errorElement: <ErrorElement />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContactContextProvider>
    <RouterProvider router={router} />
  </ContactContextProvider>,
)
