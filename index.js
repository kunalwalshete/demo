const express = require('express');
// Express Dependency into the application loaded the dependence

//  Express is a module with functions or objects or variables assigned to it

const app = express();
// initialize an applicatoin imported express

const port = 4000;

// to make pages .html .txt .jpeg .mp3 .mp4  static content

app.use(express.static("public"));

// basically telling express framework to take content inside the folder public and into the website
app.listen(port, () => { console.log(`app started on port ${port}`) });

//start the web server in port

