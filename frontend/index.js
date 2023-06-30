const express  = require('express');

const app = express();

app.get('*', (req, res) =>{ 
    const myPath = path.resolve(__dirname, 'client', 'build', 'index.html')
    console.log('__dirname: ', __dirname);
    console.log('My Path: ', myPath);
    return res.sendFile();
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
