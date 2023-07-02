import React, { useEffect, useState } from "react";
import { getAllPosts } from "../api/posts";
import PostListWrapper from "../components/PostListWrapper";
const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const entradas = await getAllPosts();
            setPosts(entradas);
        }

        fetchPosts();
    }, [])

    return (
        <>
            {posts && posts.map((post) => {
                return (<PostListWrapper key={post.id} post={post} />)
            })}
        </>
    );
};

export default Home;