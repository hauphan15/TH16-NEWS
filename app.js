var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');


var app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./middlewares/view-engine')(app);
require('./middlewares/passport')(app);
require('./middlewares/secsion')(app);

app.use(require('./middlewares/auth-locals.mdw'));
app.use(require('./middlewares/locals.mdw'));

app.use('/', require('./routes/home.route'));

app.use('/writer/xemchitiet', require('./routes/writer/xemchitiet.route'));
app.use('/writer/dangbaiviet', require('./routes/writer/dangbaiviet.route'));
app.use('/writer/dsbaiviet', require('./routes/writer/dsbaiviet.route'));

app.use('/bientapvien/duyetbaiviet', require('./routes/editor/duyetbaiviet.route'));
app.use('/bientapvien/xemchitiet', require('./routes/editor/xemchitiet.route'));

app.use('/admin/xemchitiet', require('./routes/admin/xemchitiet.route'));
app.use('/admin/duyetbaiviet', require('./routes/admin/duyetbaiviet.route'));
app.use('/admin/bientapvien', require('./routes/admin/bientapvien.route'));
app.use('/admin/docgia', require('./routes/admin/docgia.route'));
app.use('/admin/phongvien', require('./routes/admin/phongvien.route'));
app.use('/admin/chuyenmuc', require('./routes/admin/chuyenmuc.route'));
app.use('/admin/dsbaiviet', require('./routes/admin/dsbaiviet.route'));
 
app.use('/chuyenmuc', require('./routes/chuyenmuc.route'));

app.use('/taikhoan', require('./routes/taikhoan.route'));

app.use('/chitietbaiviet', require('./routes/chitietbaiviet.route'));

app.use('/xemtheotag', require('./routes/xemtheotag.route'));

app.use('/ketquatimkiem', require('./routes/ketquatimkiem.route'));

app.use((req, res, next) => {
    res.render('err/404', { layout: false });
})

app.use((error, req, res, next) => {
    res.render('err/error', {
        layout: false,
        message: error.message,
        error
    })
})


app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})
