import React from 'react';
import NavBar from '../components/Navbar';
import Hero from '../components/Hero'
import Projects from '../components/Projects'

export default function Home() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Projects />
        </div>
    )
}