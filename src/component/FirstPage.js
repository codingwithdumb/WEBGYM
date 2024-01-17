import React from 'react'
import Nav from '../common/Nav'
import MainPage from './MainPage'
import Whychoose from './Whychoose'
import GoToTop from '../common/GoToTop'
import Footer from '../common/Footer'
import CardForMap from './CardForMap'

const FirstPage = () => {
  return (
    <div className='main-root'>
      <Nav/>
<MainPage/>
<Whychoose/>
<CardForMap/>
<GoToTop/>
<Footer/>
    </div>
  )
}

export default FirstPage
