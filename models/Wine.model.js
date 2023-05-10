const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const wineSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
      unique: true,
    },
    type: {
      type: String,
      required: [true, 'Type is required.'],
      unique: true,
      enum: ['acidity', 'sweetness', 'alcohol'],
    },
    region: {
        type: String,
        required: [true, 'Region is required.'],
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Wine = model("User", wineSchema);

module.exports = Wine;