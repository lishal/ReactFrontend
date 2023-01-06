import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default function Page404() {
  return (
    <div>
      <Nav/>
      <div className="page404 d-flex align-items-center justify-content-center" style={{height:"55vh"}}>
        <p className="fs-3" > Sorry! We can't find what you are looking for</p>
      </div>
      <Footer />
    </div>
  )
}
