import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Categories = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default Categories