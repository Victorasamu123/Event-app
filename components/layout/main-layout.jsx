import { Main } from 'next/document'
import React from 'react'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'
import HomePage from '../home/home-page'


const MainLayout = ({children}) => {
  return (
    <>
     <Header/>
      <main className="w-[100%] max-w-[1450px] m-auto">
      {children}
      </main>
     <Footer/>
    </>
  )
}

export default MainLayout;6