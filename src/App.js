import React from "react";
import "./styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Single from "./pages/Single";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const basename = process.env.NODE_ENV === 'production' ? '/' : '/maxifalcone.org';

    return (
        <div className="App">
             <Header basename={basename} />
            <Router basename={basename}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<Single />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    )
}

export default App;
