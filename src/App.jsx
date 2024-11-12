import React from 'react'
import Topnav from './TOP/Topnav' 
import Principal from './content/Principal'
import Count from './count/Count'
import Gallery from './gallary/Gallary'
import Footer from './footer/Footer'

const App = () => {
  return (
   <>
   <Topnav/> 
   <Principal/> 
   <Count/>
   <Gallery/>
   <Footer/>
   </>
  )
}

export default App