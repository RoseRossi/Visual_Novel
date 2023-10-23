import React from 'react'
import { 
    BrowserRouter as Router, 
    Routes, 
    Route 
} from "react-router-dom";

// Import Pages
import Home from "./components/pages/Home";

/**
 * Render Components and Pages
 */
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
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