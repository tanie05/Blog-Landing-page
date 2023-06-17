import React from 'react'
import Navbar from '../Components/Navbar'
import Newsfeed from '../Components/Newsfeed'
import Jobs from '../Components/Jobs'
import BlogList from '../Components/BlogList'
import styled from 'styled-components'
import Updates from '../Components/Updates'
import Footer from '../Components/Footer'
import '../style.css'
import Slider from '../Components/Slider'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <div className='main-container'>
            <div className='column-one'>
            <BlogList/>
            </div>

            <div className='column-two'>
            <Jobs/>
            <Newsfeed/>
            </div>

        </div>
        <Footer/>
        
    </div>
  )
}
