// initializes the router
module.exports = function (app) {
    app.use('/action', require('./routes/action'));
    app.use('/info', require('./routes/info'));
    app.use('/register', require('./routes/register'));
    app.use('/deregister', require('./routes/deregister'));
};
