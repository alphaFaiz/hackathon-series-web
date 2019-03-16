import React from 'react';
import ImgCarousel from '../components/ImgCarousel';
import {Link} from 'react-router-dom';

const Home = (props) => {
    // console.log('a', props.post)
    if(props.post){
        const releaseDate = new Date(props.post.releaseDate);
        const releaseDateString= releaseDate.getDate()+'/'+(releaseDate.getMonth() + 1)+'/'+releaseDate.getFullYear();    
    return (
    <div>
        <ImgCarousel />
        <div style={{backgroundColor:'black'}}>
        <hr/>
        <h2 style={{color:'white'}}>LASTEST GAME</h2>
        <hr/>
        </div>
        <Link to={`/posts/${props.post._id}`}>
                <h3>{props.post.title}</h3>
        </Link>
        {/* <hr/> */}
        <div className = 'container'>
            <div className = 'row'>
            <div className = 'col-sm-6'>
                <img className='img-fluid mt-2' style={{width:'60%',height:'45vh', position:'center', verticalAlign:'center'}}
                 src = {props.post.cover} alt ='not found' />
                <hr/>                    
                <p><b>Platform: </b>{props.post.platform}</p>
                {/* <hr/>                    
                <img className='img-fluid' src={props.post.ratingCategory} style={{height:'20%', width:'25%'}} alt=''/>
                <hr/>                     */}
                    <hr/>                    
                <p><b>Release date:</b> {releaseDateString}</p>
            </div>
            <div className = 'col-sm-6'>
                {/* <hr/> */}
                <div className='resp-container mt-3' dangerouslySetInnerHTML={{__html: props.post.trailer}} ></div>

            </div>
            </div>
        </div>
    </div>
    );}
    else 
    return <div>Home</div>
};

export default Home;