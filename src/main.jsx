import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Userlist from './components/Userlist/Userlist.jsx'
import Card from './components/Card/Card.jsx'
import studentData from './components/data/Students.json'
import { Themeprovider } from './components/Theme.js'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}  >
      <Route path=''  element={<Userlist/>}  loader={() => {
          return studentData.students; 
        }} />
      <Route path='Card/:name' element={<Card/>}/>
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} /> 
  </StrictMode>,
)
