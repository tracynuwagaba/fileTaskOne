const fs = require('fs');
const fetch = require('node-fetch');

// check if the result folder exists
fs.access('./result', (err) => {
    if (err) {
        console.log('Folder does not exist');
    } else {
        console.log('Folder exists!');
    }
});

// GET request to fetch data from the API using fetch
fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.text())
    .then(data => {
        // write the JSON data from the API to posts.json
        fs.writeFile('./result/posts.json', data, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('file written to successfully with json data');
            }
        });
    });