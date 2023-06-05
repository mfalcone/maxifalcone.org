import axios from "axios";

const client = axios.create({
    baseURL: "/maxifalcone.org/wp-json/wp/v2/posts"
  });

export const getAllPosts = async() => {
    const response = await client.get();
    if(response.status !== 200) {
        // oups! something went wrong
        return;
    }

    return response.data;
}

export const getSinglePost = async(slug) => {
    const response = await client.get(`?slug=${slug}`);
    if(response.status !== 200) {
        // oups! something went wrong
        return;
    }

    return response.data;
}