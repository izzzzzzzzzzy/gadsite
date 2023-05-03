import './App.css';
import React, { useRef } from 'react';
import Navbar from './Components/Navbar/Navbar';
import uvm_pic from "./Images/uvm_pic-overlay.png"

function App() {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    return (
        <div>
            <header>
                <Navbar />
                <img src={uvm_pic} alt='Gadfly Logo' width={windowSize.current[0]} />
            </header >
        </div >
    );
}

export default App;
