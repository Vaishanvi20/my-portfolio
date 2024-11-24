import React from 'react'
import Header from '../common/Header'
import { Banner } from '../Pages/Banner/Banner'
import { Experience } from '../Pages/Experience/Experience'
import { Project } from '../Pages/Project/Project'

export const Layout = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Experience/>
        <Project/>
    </div>
  )
}
