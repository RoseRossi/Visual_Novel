import React from "react";
import { 
    BrowserRouter as Router, 
    Routes, 
    Route
} from "react-router-dom";
import Home from "./components/pages/Home";
import Register from './components/pages/Register/Register';
import Prologue from './components/pages/Scene1/Prologue/Prologue';
import Parts from './components/pages/Scene1/Parts/Parts';
import Parts2 from './components/pages/Scene2/Parts2';
import Parts3 from './components/pages/Scene3/Parts/Parts';
import Parts4p2 from "./components/pages/Scene4/Part2/Part42";


import { isUserLoggedIn } from "./api/utils.jsx";

const App = () => {
    // States.
    const [isLogged, setIsLogged] = React.useState(false),
    dataManager = {
        isLogged: isLogged,
        setIsLogged: setIsLogged
    }

    // UseEffect.
    React.useEffect(() => {
       console.log("isUserLoggedIn", isUserLoggedIn());
        setIsLogged(isUserLoggedIn());
    }, []);

    return (
        <>
            {
                isLogged ? (
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home data_={dataManager}/>} />
                            <Route path="/Register" element={<Register/>} />
                            <Route path="/Prologue" element={<Prologue/>} />
                            <Route path="/Scene1-parts" element={<Parts/>} />
                            <Route path="/Scene2-parts" element={<Parts2/>} />
                            <Route path="/Scene3-parts" element={<Parts3/>} />
                            {/*<Route path="/Scene4-parts1" element={<Parts4p1/>} /> {/*exploración*/}
                            <Route path="/Scene4-parts2" element={<Parts4p2/>} /> {/*comisaria*/}
                            <Route
                                path="*"
                                element={<> <h1>No Found Route</h1> </>}
                            />
                        </Routes>
                    </Router>
                ) : 
                (
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home data_={dataManager} />} />
                            <Route
                                path="*"
                                element={<> <h1>No Found Route</h1> </>}
                            />
                        </Routes>
                    </Router>             
                )
            }
        </>
    );
}

export default App;