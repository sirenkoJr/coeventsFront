let staticS = require('node-static');
let file = new staticS.Server('./public');

require('http').createServer(function (request, response) {
    if (!/\./.test(request.url)) {
        request.url = '/';
    }
    file.serve(request, response);
}).listen(3030, function(){
    console.log('Server was started at port 3030')
});