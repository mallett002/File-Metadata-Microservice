const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

app.use(cors());

// serve static assets (css file) in the /public dir
app.use('/public', express.static(process.cwd() + '/public'));

// serve html file
app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});

// post bc it's a file upload
// upload.single("upfile") for multer. "upfile" is name attr on html file input
app.post("/api/fileanalyse", upload.single("upfile"), (req, res, next) => {
  // req.file is the `uploaded` file
  // req.body will hold the text fields, if there were any
  const fileData = {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  };
  
  res.json(fileData);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Node.js listening, always listening...');
});
