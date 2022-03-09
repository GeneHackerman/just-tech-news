const User = require('./User');
const Post = require('./Post');

// create associations
// this will link all posts to user via id
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };

// this file is responsible for importing User model 
// and exporting an object with its property