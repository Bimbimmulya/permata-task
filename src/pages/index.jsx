import React from 'react'
import Navbar from '../components/Fragments/Navbar'
import MainBanner from '../components/Fragments/MainBanner'
import OurValue from '../components/Fragments/OurValue'
import NewsService from '../services/news-service'
import Footer from '../components/Fragments/Footer'

function HomePage() {
  return (
    <div>
      <Navbar />
      <MainBanner />
      <OurValue />
      <NewsService />
      <Footer />
    </div>
  )
}

export default HomePage
