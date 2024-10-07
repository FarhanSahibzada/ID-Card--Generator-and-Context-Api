import React, { useEffect } from 'react'
import { useState } from 'react'
import Navber from './components/Navber'
import Userlist from './components/Userlist/Userlist'
import { Outlet } from 'react-router-dom'
import { Themeprovider } from './components/Theme'


function App() {

  const [thememode, setthememode] = useState('light');

  const darkmode = () => {
    setthememode('dark')
  }
  const lightmode = () => {
    setthememode('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(thememode);
  }, [thememode])

  return (
    <>
      <Themeprovider value={{ thememode, darkmode, lightmode }}>
        <Navber />
        <Outlet />
      </Themeprovider>
    </>
  )
}

export default App
