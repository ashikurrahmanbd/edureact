import React from 'react'

import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs'

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Programs />
            <About />
        </div>
    )
}

export default App
