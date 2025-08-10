import React from 'react'
import SearchToggle from '../SearchToggle/SearchToggle'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'

function House() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Banner />
            <SearchToggle />
            {/* <Footer /> */}
        </div>
    )
}

export default House