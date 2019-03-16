import React, { Component } from 'react';
import Axios from 'axios';
import Download from '../components/Download';
import {Button} from 'reactstrap';
import EditPostModal from '../components/EditPostModal';
import {Link} from 'react-router-dom';

class DetailPost extends Component {
    state = {
        post: {},
        editModalVisible: false,
    };

    componentDidMount() {
        Axios
        .get(`http://localhost:3001/api/posts/${this.props.match.params.id}`)
        .then(data => {
            this.setState({
                post: data.data
            });
            
            // console.log(data.data)
        })
        .catch(error => console.log(error));
    }

    editToggle = () => {
        this.setState({editModalVisible: !this.state.editModalVisible});
    }
    //update post
    // createPost = async() =>{
    //     const postInfo = this.state;
    //     try {
    //         const result = await fetch(`http://localhost:3001/api/posts/${this.props.match.params.id}`, {
    //             method: 'PUT',
    //             headers: {
    //               'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(postInfo),
    //           }).then((res) => res.json());
    //           console.log(postInfo)
    //           window.alert(result.message);
    //     } catch (error) {
    //         console.log(error);
    //         window.alert(error.message);
    //     }            
    // }
    
    render() {
        const releaseDate = new Date(this.state.post.releaseDate);
        const releaseDateString= releaseDate.getDate()+'/'+(releaseDate.getMonth() + 1)+'/'+releaseDate.getFullYear();
        return (
            <div className='container'>
            {/* check for admin and update*/}
                {this.props.authAdmin.role ==='admin' && (<div>
                    <Button onClick={this.editToggle}>UPDATE THIS POST</Button>
                    <EditPostModal editModalVisible={this.state.editModalVisible} toggle={this.editToggle} post={this.state.post}/>
                </div>)}
            {/*  */}
                <div className='row'>
                <div className='col-sm-6'>
                    <img className='img-fluid mt-2 ' style={{width:'100%'}}  src = {this.state.post.cover} alt ='not found' />
                    <hr/>                    
                    <img className='img-fluid' style={{height:'20%', width:'25%'}} src={this.state.post.ratingCategory} alt=''/>
                </div>
                <div className='col-sm-6'>
                    <h3>{this.state.post.title}</h3>
                    <hr/>                    
                    <div className='resp-container' dangerouslySetInnerHTML={{__html: this.state.post.trailer}} ></div>
                    <hr/>                    
                    <div dangerouslySetInnerHTML={{__html: this.state.post.description}}></div>
                    <hr/>                    
                    <p><b>Platforms: </b>{this.state.post.platform}</p>
                    <hr/>                    
                    <p><b>Release date:</b> {releaseDateString}</p>
                </div>
                </div>
                <hr/>
                <Download post={this.state.post} authAdmin={this.props.authAdmin} toggle={this.props.toggle} />
            </div>
        );
    }
}

export default DetailPost;