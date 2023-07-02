import React, { useEffect, useState } from 'react';
import { getSinglePost } from "../api/posts";
import { useParams } from 'react-router-dom';
import { Row, Col, Container } from "reactstrap";
import '../sass/single.scss';
const Single = () => {

    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            const entrada = await getSinglePost(id);
            setPost(entrada[0]);
        }

        fetchPosts();
    }, [])

    return (
        <>
            {post && <>
                <Row className='post-wrapper'>
                    <Col className='position-relative'>
                        <h2>{post.title.rendered}</h2>
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
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </Col>
                </Row>
            </>}
        </>
    );
};

export default Single;