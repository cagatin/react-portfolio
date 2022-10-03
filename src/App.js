import React, { useEffect } from "react";
import Home from './pages/Home';
import './styles/App.css'
import reveal from './utils/reveal'

export default function App() {
    useEffect(() => {
        window.addEventListener('scroll', reveal);

        return () => {
            window.removeEventListener('scroll', reveal)
        }
    }, []);

    return <Home />
}