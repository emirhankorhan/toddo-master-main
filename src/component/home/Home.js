import React from 'react'
import Navbar from '../navbar/Navbar'
import Contentone from '../content-1/Contentone'
import Contenttwo from '../content-2/Contenttwo'
import Contentthree from '../content-3/Contentthree'
import Contentfour from '../content-4/Contentfour'
import Contentfive from '../content-5/Contentfive'
import Footer from '../footer/Footer'
import "./home.css"


function Home() {
  return (
    <html>
     
    <div className='app'>
      
      <Navbar />
      <Contentone />
      <Contenttwo />
      <Contentthree />
      <Contentfour />
      <Contentfive/>
      <Footer />
    </div>
    </html>
  )
}

export default Home