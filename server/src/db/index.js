import mongoose from 'mongoose';

export default function makeDb() {
  mongoose.connect(
    'mongodb://localhost:27017',
    { useNewUrlParser: true },
    function(err, res) {
      if (err) {
        console.log('ERROR connecting to: ' + 'localhost' + '. ' + err);
      } else {
        console.log('Succeeded connected to: ' + 'localhost');
      }
    }
  );
}
