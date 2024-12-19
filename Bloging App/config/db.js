const mongoose = require('mongoose');

const mydatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://hussainshamim:kig831456@cluster0.x9e7v.mongodb.net/sampleDB?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongo connect ho gaya hey');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = mydatabase;