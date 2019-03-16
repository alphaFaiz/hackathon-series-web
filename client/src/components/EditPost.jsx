import React, { Component } from 'react';
import {Form, Input, Button} from 'reactstrap';
import Editor from './Editor';
import Axios from 'axios';

class EditPost extends Component {
    state = { }

    componentDidMount () {
        this.loadPost()
    }

    updatePost = async() =>{
        const postInfo = this.state;
        try {
            const result = await fetch(`http://localhost:3001/api/posts/${this.props.post._id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(postInfo),
              }).then((res) => res.json());
              console.log(postInfo)
              window.alert(result.message);
        } catch (error) {
            console.log(error);
            window.alert(error.message);
        }            
    }

    saveEditorContent = async(content) =>{
        this.setState({description: content});
    }
    loadPost = () => {
        this.setState({...this.state,...this.props.post})
    }
    render() {
        console.log('edit this',this.props.post)
        console.log(this.state)
        return (
            <div>
                <Form>
                    <h6>Title:</h6>
                    <Input 
                        type='text' 
                        placeholder='Title' 
                        defaultValue={this.props.post.title}
                        onChange={(e) => {this.setState({title: e.target.value})}}
                    />
                    <h6>Description:</h6>
                    <Editor  value={this.props.post.description} saveEditorContent={this.saveEditorContent}/>
                    <hr/>
                    <h6>Link for cover image:</h6>
                    <Input 
                        type='text' 
                        placeholder='Link for cover' 
                        defaultValue={this.props.post.cover}
                        onChange={(e) => {this.setState({cover: e.target.value})}}
                    />
                    <h6>Link for embed video trailer:</h6>
                    <Input 
                        type='text' 
                        placeholder='Link for embed trailer' 
                        defaultValue={this.props.post.trailer}
                        onChange={(e) => {this.setState({trailer: e.target.value})}}
                    />
                    <h6>Platforms:</h6>
                    <Input 
                        type='text' 
                        placeholder='platform' 
                        defaultValue={this.props.post.platform}
                        onChange={(e) => {this.setState({platform: e.target.value})}}
                    />
                    <h6>Rating category image:</h6>
                    <Input 
                        type='text' 
                        placeholder='link for image of Rating Category' 
                        defaultValue={this.props.post.ratingCategory}
                        onChange={(e) => {this.setState({ratingCategory : e.target.value})}}
                    />
                    <h6>Content descriptors:</h6>
                    <Input 
                        type='text' 
                        placeholder='Content descriptors' 
                        defaultValue={this.props.post.contentDesciptors}
                        onChange={(e) => {this.setState({contentDesciptors : e.target.value})}}
                    />
                    <h6>Release date:</h6>
                    <Input 
                        type='date' 
                        defaultValue={this.props.post.releaseDate}
                        onChange={(e) => {this.setState({releaseDate : e.target.value})}}
                    />
                    <div className='row'>
                    <div className='col-6'>
                    <a href='/posts/' >
                    <Button color='primary' onClick = {this.updatePost} onMouseUp = {this.props.toggle}>Up date</Button>
                    </a>
                    </div>
                    <div className='col-6'>
                    <Button color='primary' onClick = {this.props.toggle}>Cancel</Button>
                    </div>
                    </div>
                </Form>                
            </div>
        );
    }
}

export default EditPost;