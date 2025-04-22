const Item = require('../models/Item');
const path = require('path');
const fs = require('fs');

exports.getItems = async (req, res) => {
//   const items = await Item.find({});
  console.log("!!22")
  const dataPath = path.join(__dirname, '../..', 'data.json');
  console.log("!!", dataPath)
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Failed to read data.json:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    // res.setHeader('Content-Type', 'application/json');
    // res.json(data); // this sets it too, but being explicit helps in some cases

    res.json(JSON.parse(data));
  });
//   res.json(items);
};

exports.searchItems = async (req, res) => {
  const q = req.query.q.toLowerCase();
  const items = await Item.find({
    $or: [
      { Title: { $regex: q, $options: 'i' } },
      { "Variant SKU": { $regex: q, $options: 'i' } },
    ]
  });
  res.json(items);
};
