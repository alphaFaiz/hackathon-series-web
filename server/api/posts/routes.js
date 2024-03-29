const express = require('express');
const postModel = require('./model')
const postRouter = express.Router();

postRouter.get('/:postId', async (req,res) => {
    try {
        const {postId} = req.params;
        const post = await postModel.findById(postId).exec();

        res.status(200).json(post);

    } catch (error) {
        res.status(error.status || 500).end(error.message || 'Internal server error');
    }
});

postRouter.put('/:postId', async (req,res) => {
    try {
        console.log(req.body)
        const {
            trailer, 
            cover, 
            title, 
            description, 
            ratingCategory, 
            contentDescriptors, 
            platform, 
            releaseDate} = req.body;
        const {postId} = req.params;
        await postModel.findByIdAndUpdate(postId, {trailer}).exec();
        await postModel.findByIdAndUpdate(postId, {cover}).exec();
        await postModel.findByIdAndUpdate(postId, {title}).exec();
        await postModel.findByIdAndUpdate(postId, {description}).exec();
        await postModel.findByIdAndUpdate(postId, {ratingCategory}).exec();
        await postModel.findByIdAndUpdate(postId, {contentDescriptors}).exec();
        await postModel.findByIdAndUpdate(postId, {platform}).exec();
        await postModel.findByIdAndUpdate(postId, {releaseDate}).exec();
        res.status(201).json({
         message: 'Post is updated!',
        });
    } catch (error) {
        console.log(error)
        res.status(error.status || 500).end(error.message || 'Internal server error');
    }
})

postRouter.get('/', async(req, res) => {
    try {
        // const after = req.query.after;
        // const pageSize = Number (req.query.pageSize);

        // const filter = {};
        // if(after) {
        //     filter._id = {$lt: after};
        // }
        // const data = await postModel.find(filter)
        // .sort({_id: -1})
        // .limit(pageSize + 1)
        // .populate('author', '_id name createdAt')
        // .exec();
        const data = await postModel.find().sort({releaseDate: -1}).exec();
        // console.log(data)
        res.status(200).json(data);
        // res.status(200).json({
        //     data: data.length > pageSize ? data.slice(0, pageSize) : data ,
        //     after: data.length > pageSize ? data[pageSize - 1]._id : undefined ,
        // });
    } catch (error) {
        res.status(error.status || 500).end(error.message || 'Internal server error');
    }
});

postRouter.post('/', async (req, res) => {
    try {
        const postInfo = req.body;
        // console.log(req.body)
        const newPost = new postModel(postInfo);
        await newPost.save();
        
        res.status(201).json({
         message: 'Post is created!',
         id: newPost._id,
        });       
        // console.log(newPost);
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).end(error.message || 'Internal server error');
        
    }
});

module.exports = postRouter;