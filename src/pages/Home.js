import React from 'react';
import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About'

export default function Home() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Projects />
            <Skills />
            <About />
        </div>
    )
}