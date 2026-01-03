import React from 'react'
import ScrollTop from '../ScrollTop/ScrollTop'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ReturnHome from '../ReturnHome/ReturnHome'
import { useLocation } from 'react-router-dom'

function Layout({children}) {
    const location = useLocation()
  return (
    <>
        <Header />
        <ScrollTop />
        <main>{children}</main>
        {location.pathname !== '/' && <ReturnHome />}
        <Footer />
    </>
  )
}

export default Layout