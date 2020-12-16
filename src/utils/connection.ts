import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://mongoUser:mongoPassword@cluster0.etqon.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,  
});

