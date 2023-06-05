import React from 'react';
import { Row, Col } from "reactstrap";
import { NavLink } from 'react-router-dom';
import '../sass/postwrapper.scss'
const PostListWrapper = ({ post }) => {
    return (<>
        <Row className='post-wrapper'>
            <Col className='position-relative'>
                <h2><NavLink to={`/${post.slug}`}>{post.title.rendered}</NavLink></h2>
                <div>
                    {(() => {
                        const date = new Date(post.date);
                        const formattedDate = date.toLocaleString([], { day: 'numeric', year: 'numeric', month: 'numeric' });
                        const [day, yearMonth] = formattedDate.split(/\/(.+)/);
                        return (
                            <div className='position-absolute background-violeta date-post-wrapper text-light text-center top-0 ps-2 pe-2'>
                                <div className='dia'>{day}<span className='d-inline d-sm-none'>/</span></div>
                                <div>{yearMonth}</div>
                            </div>
                        );
                    })()}
                </div>
            </Col>
        </Row>
        <Row>
            <Col className='ps-4'>
                <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </Col>
        </Row>
    </>
    );
};

export default PostListWrapper;