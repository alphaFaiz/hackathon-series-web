import React from 'react';
import { Route } from 'react-router-dom';
import DetailPost from './DetailPost';
import Posts from '../components/Posts';

const PostsScreen = (props) => {
    const {authAdmin, posts, keyword, toggle, toggleUploadPost} = props;
    return (
        <div>
            <Route exact path='/posts/' render={(props)=> {
            return(
            <Posts keyword={keyword} posts = {posts} {...props}/>)
            }} 
            />
            <Route exact path='/posts/:id' render={(props)=> {
            return(
            <DetailPost uploadPostVisible={props.uploadPostVisible} toggleUploadPost={toggleUploadPost} toggle={toggle} authAdmin={authAdmin} {...props}/>)
            }} 
            />
        </div>
    );
};

export default PostsScreen;