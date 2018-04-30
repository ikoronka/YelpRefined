var mongoose   = require("mongoose");
// SCHEMA SETUP
var campSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    author: {
      id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
      },
      username: String
    },
    comments : [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            }
        }
    ]
});
module.exports = mongoose.model("Campground", campSchema);