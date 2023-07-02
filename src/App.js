import React, { useEffect, useState } from "react";
import "./styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Single from "./pages/Single";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { slide as Menu } from 'react-burger-menu'
import './sass/burgerIcon.scss';
import { Row, Col, Container } from "reactstrap";
import {getAllCategories} from './api/posts'
function App() {
    const basename = process.env.NODE_ENV === 'production' ? '/' : '/maxifalcone.org';
    const [itemCategories, setitemCategories] = useState(null);

    useEffect(()=>{
        (async() => {
            const cat = await getAllCategories();
            setitemCategories(cat)
        })()
    },[])
    return (
        <div className="App">
            <Header basename={basename} />

            <Container>
                <Row>
                    <Col className='position-relative' md="3">
                        <Menu isOpen={false} className="">
                           {itemCategories && itemCategories.map((item, index)=>{
                                return (<a href={item.link} key={index}>{item.name}</a>)
                           })}
                        </Menu>
                    </Col>
                    <Col className="border-dark border-start" md={{ size: 9 }}>
                        <Router basename={basename}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/:id" element={<Single />} />
                            </Routes>
                        </Router>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default App;
