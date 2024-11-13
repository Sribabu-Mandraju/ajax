import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BelowHero from './components/BelowHero';
import Money from './components/Money';
import Footer from './components/Footer';
import BoxFooter from './components/BoxFooter';
import Cards from './components/Cards';
import Content from './components/Content';
import Content2 from './components/Content2';
const App = () => {
  return (
    <div className="bg-[black]">
     <Navbar />
     <Hero />
     <BelowHero />
     <Money />
     
     <Content />
     <Content2/>
     <Cards />
     <BoxFooter />
     <Footer />
     
    </div>
  )
}

export default App
