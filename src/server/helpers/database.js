import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = () => mongoose
  .connect(process.env.MONGOLAB_PURPLE_URI,
    { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => { console.error(err); });

export default connect;
