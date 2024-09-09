import React from 'react'

import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs'
import Testimonials from './components/Testimonials/Testimonials'

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Programs />
            <About />
            <Campus />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
