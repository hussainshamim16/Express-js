const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hussainshamim:kig831456@cluster0.x9e7v.mongodb.net/sampleDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('mdb connected');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

connectDB();
module.exports = mongoose;
