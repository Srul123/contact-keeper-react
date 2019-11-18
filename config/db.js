const mongoose = require;
const config = require('config');
const db = config.get('mongoURI');

const connectDB = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => {
      console.log('result: ','MongoDB Connected!');  
    }).catch((err) => {
      console.log('err: ', err);
      process.exit(1);
    });
}