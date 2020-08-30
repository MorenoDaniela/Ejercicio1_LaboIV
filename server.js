constexpress = require('express');
constapp = express();
constpath = require('path');
app.use(express.static(__dirname + '/ejercicio-clase1'));
app.listen(process.env.PORT || 8080);
app.get('/*', function(req, res) {res.sendFile(path.join(__dirname + '/ejercicio-clase1/index.html'));});
console.log('Build successful!!');
