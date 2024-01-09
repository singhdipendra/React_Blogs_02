import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className=' bg-[#445290] flex flex-col items-center justify-center' >
    <Header />
    <div className='bg-[#8699ec] flex flex-col justify-center items-center w-9/12'>
    <Blogs />
    <Pagination />
    </div>
    
  </div>
  )
}

export default Home