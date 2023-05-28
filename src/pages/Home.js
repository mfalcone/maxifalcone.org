import React, { useEffect, useState } from "react";
import { getAllPosts } from "../api/posts";
import PostListWrapper from "../components/PostListWrapper";
import { Row, Col, Container } from "reactstrap";
const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const entradas = await getAllPosts();
            console.log(entradas);
            setPosts(entradas);
        }

        fetchPosts();
    }, [])

    return (
        <Container>
            <Row>
                <Col className="border-dark border-start" md={{size:9, offset: 3}}>
                    {posts && posts.map((post) => {
                        return (<PostListWrapper key={post.id} post={post} />)
                    })}
                </Col>
            </Row>
        </Container>
    );
};

export default Home;