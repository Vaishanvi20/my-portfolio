import React from 'react';
import Header from '../common/Header';
import { Banner } from '../Pages/Banner/Banner';
import { Experience } from '../Pages/Experience/Experience';
import { Project } from '../Pages/Project/Project';
import { Footer } from '../Pages/Footer/Footer';

export const Layout = () => {
  return (
    <div className="h-screen flex flex-col ">
      {/* Sticky Header */}
      <Header />
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <Banner />
        <Experience />
        <Project />
        {/* <Footer /> */}
      </div>
    </div>
  );
};
