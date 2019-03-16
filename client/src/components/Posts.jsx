import React from 'react';
import Post from './Post';

const Posts = (props) => {
    return (
        props.posts.map((post) => {
            if (post.title.toUpperCase().includes(props.keyword) || post.title.toLowerCase().includes(props.keyword) ){
            return(
            <Post post={post} />
            );}
        })
    );
};

export default Posts;