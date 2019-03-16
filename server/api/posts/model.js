const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, default: ''},
    cover: {type: String, default: 'https://media.customon.com/unsafe/600x600/img.customon.com/design/600/600/0a0909/62265/5bd05e2dcd513b0414d032ba064d57c0.png.jpg'},
    description: {type: String},
    trailer: {type: String},
    platform: {type: String},
    ratingCategory: {type: String},
    contentDescriptors: {type: String},
    releaseDate: {type: Date},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' ,
    },    
}, {
    timestamps: true,
});

const PostModel = mongoose.model('Post', postSchema);
module.exports = PostModel;