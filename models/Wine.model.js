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
      enum: ['White', 'Red', 'Rosé']
    },
    attributes: [
      {
        name: {
          type: String,
          required: [true, 'Attribute name is required.'],
        },
        value: {
          type: Schema.Types.Mixed,
          required: [true, 'Attribute value is required.'],
        },
      }
    ],
    variety: {
      type: String,
      required: [true, 'Variety is required.'],
      enum: [
        'Chardonnay',
        'Sauvignon Blanc',
        'Cabernet Sauvignon',
        'Merlot',
        'Pinot Noir',
        'Syrah/Shiraz',
        'Malbec',
        'Zinfandel',
        'Riesling',
        'Gewürztraminer',
        'Pinot Grigio/Pinot Gris',
        'Sangiovese',
        'Tempranillo',
        'Grenache/Garnacha',
        'Nebbiolo',
        'Chenin Blanc',
        'Viognier',
        'Grüner Veltliner',
        'Moscato/Muscat',
        'Barbera'
      ],
    },
    region: {
      type: String,
      required: [true, 'Region is required.'],
    }
  },
  {
    timestamps: true
  }
);

const Wine = model("Wine", wineSchema);

module.exports = Wine;