const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // before config route news
    // app.get('/news', (req, res) => {
    //     res.render('news')
    // })

    // after config route news

    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
