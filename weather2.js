let request = require('request');

let apiKey = '993e2b53d362eb3851a74e414174cf63';
let location = 'melbourne,AU';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
if(err){
    console.log('error:', error);
} else {
    console.log('body:', JSON.parse(body));
}
});