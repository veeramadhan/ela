import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Center from './components/Center/Center'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Top from './components/TopContent/Top'
import Menu from './components/Menu/Menu'

function App () {
  return (
    <HelmetProvider>
    <div className='App'>
      <Helmet>
        <title>
          Ela Cakes
          {/* <meta name='description' content='cakes,ela cakes,cake point,cakes,madurai cakes,best cakes,bakkery,vikram hospital,jjnagar,cake bee'/> */}
        </title>
             
      </Helmet>
      <Header/>
      <Top/>
      <Menu/>
      <Center/>
      <Footer/>
    </div>
    </HelmetProvider>
    
  )
}

export default App
