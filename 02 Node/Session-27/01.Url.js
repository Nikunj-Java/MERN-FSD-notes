var url = require('url');
var adr = 'http://eduonix.com:8000/profile.htm?name=nikunjsoni&year=2023';
var myUrl = url.parse(adr, true);

console.log("Host:",myUrl.host); 
console.log("Hostname:",myUrl.hostname);
console.log("Protocol:",myUrl.protocol);
console.log("Port:",myUrl.port);
console.log("Path:",myUrl.path);
console.log("String Query:",myUrl.search)

var qData=myUrl.query;
console.log("Object:",qData);
console.log("Name:",qData.name);
console.log("Year:",qData.year);
 