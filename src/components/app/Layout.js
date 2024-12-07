import React from 'react'
import Header from '../common/Header'
import { Banner } from '../Pages/Banner/Banner'
import { Experience } from '../Pages/Experience/Experience'
import { Project } from '../Pages/Project/Project'
import { Footer } from '../Pages/Footer/Footer'

export const Layout = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Experience/>
        <Project/>
        {/* <Footer/> */}
    </div>
  )
}
