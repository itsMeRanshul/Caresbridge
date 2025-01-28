import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AuthProvider from './Components/Context.js/AutoContext'

function Layout() {
  return (
   <>
   <AuthProvider>
   <Header />
    <Outlet />
   <Footer/>
   </AuthProvider>
   </>
  )
}

export default Layout
