import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = (props) => (
    <div className='layout'>
        <div className='content'>
            <Nav />
            <div className='main'>
                {props.children}
            </div>
        </div>
        <Footer />
    </div>
)

export default Layout
