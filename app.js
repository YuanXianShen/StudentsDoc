const http = require('http');
const template = require('art-template');
const path = require('path');
const getRouter = require('router');
const router = getRouter();
const serveStatic = require('serve-static')
require('./model/connect')
const Student = require('./model/user')
const app = http.createServer();

const serve = serveStatic(path.join(__dirname, 'public'));
template.defaults.root = path.join(__dirname, 'views');
router.get('/add', (req, res) => {
    let html = template('index.art', {});
    res.end(html);
})
router.get('/list', (req, res) => {
    let html = template('list.art', {});
    res.end(html);
})
app.on('request', (req, res) => {
    router(req, res, () => {});
    serve(req, res, () => {})
});

app.listen(3000);

console.log('服务器启动成功');