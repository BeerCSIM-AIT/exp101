const express = require('express');
const bodyParser = require('body-parser');
// unblock CORS policy  Cross Origin Resouce Sharing  (ทำให้เรียก api ผ่าน localhost ได้)
const cors = require('cors');       

const app = express();
const port = 4000;

const appRoute = require("./routes/appRoute");
const adminRoute = require("./routes/adminRoute");


app.use(cors());
//เพื่อให้เรียกใช้ req body ในรูปแบบ JSON และ URL Encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//use routing table
app.use("/",appRoute);
app.use("/admin",adminRoute);

app.listen(port, ()=>{
    console.log(`App is running on ${port}`);
});