const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'hussain-shamim-cloud', 
    api_key: '973526498124835', 
    api_secret: 'Lk8Rt6Fs_XyGp9ZaKcY7QrUwJ', 
});

module.exports = cloudinary;
