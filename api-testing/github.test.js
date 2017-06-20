const supertest = require('supertest');


let request = supertest('https://api.github.com/');

request
    .get('orgs/visionmedia/members')
    .expect(function(res) {
        console.log(res.body.length)
    })
    .expect(200, function(err) {
        console.log(err);
    });