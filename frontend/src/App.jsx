import React from 'react'
import { 
    BrowserRouter as Router, 
    Routes, 
    Route 
} from "react-router-dom";

// Import Pages
import Home from "./components/pages/Home";
import Register from './components/pages/Register/Register';
import Prologue from './components/pages/Scene1/Prologue/Prologue';
import Parts from './components/pages/Scene1/Parts/Parts';
import Parts3 from './components/pages/Scene3/Parts/Parts';
/**
 * Render Components and Pages comentario para probar el cambio de git 
 */


const App = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Register" element={<Register/>} />
                <Route path="/Prologue" element={<Prologue/>} />
                <Route path="/Scene1-parts" element={<Parts/>} />
                <Route path="/Scene3-parts" element={<Parts3/>} />
                <Route
                    path="*"
                    element={
                        <>
                            <h1>No Found Route</h1>
                        </>
                    }
                />
            </Routes>
        </Router>
        </>
    )
}

export default App;