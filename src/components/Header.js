import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import '../sass/header.scss';
import '../sass/general.scss';

const Header = () => {
    const absPath = `${window.location.origin}${window.template_path}`;
    console.log(absPath)
    return (
        <header className='header'>
            <Container>
                <header className='border-bottom border-dark'>
                    <Row>
                        <Col md={{ size: 9, offset: 3 }} className='text-end pe-2'>
                            <h1>maxiFalcone.<span className='rosa'>org</span></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ size: 10, offset: 2 }} md={{ size: 7, offset: 0 }}>
                            <img src={`${absPath}/img/label.svg`} alt="frontend backend fullstack" />
                        </Col>
                        <Col className='flex-column align-items-stretch justify-content-between d-none d-sm-none d-md-flex'>
                            <div className='d-flex dot-wrappers justify-content-end align-items-start pe-2'>
                                <div className='ratio ratio-1x1 background-azul dot'>
                                </div>
                                <div className='ratio ratio-1x1 background-violeta dot'>
                                </div>
                                <div className='ratio ratio-1x1 background-rosa dot'>
                                </div>
                            </div>
                            <div className='env text-end position-relative'>
                                <div className='position-absolute end-0 pe-2'>.env</div>
                            </div>
                        </Col>
                    </Row>
                </header>
            </Container>
        </header>
    );
};

export default Header;