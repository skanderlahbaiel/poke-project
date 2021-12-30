const mongoose = require ('mongoose');


mongoose.connect("mongodb://localhost27017/pokemongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.log(err);
  });


module.exports = router;