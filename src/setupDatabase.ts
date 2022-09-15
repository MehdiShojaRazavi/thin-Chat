import mongoose from 'mongoose';
import { config } from './config';

export default () => {
  const connect = () => {
    mongoose.connect(config.DATABASE_URL!)
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