var express = require('express');
var exphbs = require('express-handlebars');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var hbs_sections = require('express-handlebars-sections');
var moment = require('moment');
moment.lang('vi');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: 'views/layouts',
    helpers: {
        format: date => {
            return moment(date, 'MM/DD/YYYY h:mm').format('DD/MM/YYYY h:mm');
        },
        format2: date => {
            return moment(date, 'MM/DD/YYYY h:mm').startOf('day').fromNow();
        },
        section: hbs_sections()
    }
}));
app.set('view engine', 'handlebars');


require('./middlewares/passport')(app);
require('./middlewares/secsion')(app);

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
