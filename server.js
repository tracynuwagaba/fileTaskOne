const fs = require('fs');
const fetch = require('node-fetch');

// GET request to fetch data from the API using fetch
fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.text())
    .then(data => {
        fs.writeFile('./result/posts.json', data, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('file written to successfully with json data');
            }
        });
    });