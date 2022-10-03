import React from 'react';
import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Projects />
            <Skills />
        </div>
    )
}