import mongoose from 'mongoose';

export default () => {
  const connect = () => {
    mongoose.connect('mongodb://localhost:27017/thinChat-Backend')
      .then(() => {
        console.log('Sucessfully connect to mongoDB');
      })
      .catch((error) => {
        console.log('Error connectiong to database', error);
        return process.exit(1);
      });
  }

  connect();

  mongoose.connection.on('disconnected', connect);
};