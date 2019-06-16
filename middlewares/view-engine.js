var exphbs = require('express-handlebars');
var hbs_sections = require('express-handlebars-sections');
var moment = require('moment');
moment.locale('vi');

module.exports = function (app) {
    app.engine('handlebars', exphbs({
        defaultLayout: 'main',
        layoutsDir: 'views/layouts',
        helpers: {
            format: date => {
                return moment(date, 'MM/DD/YYYY H:mm').format('DD/MM/YYYY H:mm');
            },
            format2: date => {
                return moment(date, 'MM/DD/YYYY H:mm').startOf('hour').fromNow();
            },
            format3: date => {
                return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
            },
            section: hbs_sections()
        }
    }));
    app.set('view engine', 'handlebars');
}
