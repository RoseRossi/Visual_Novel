import React from 'react'
import { 
    BrowserRouter as Router, 
    Routes, 
    Route 
} from "react-router-dom";

// Import Pages
import Home from "./components/pages/Home";
import Register from './components/pages/Register/Register';

/**
 * Render Components and Pages comentario para probar el cambio de git 
 */
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Register" element={<Register/>} />
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
    )
}

export default App;