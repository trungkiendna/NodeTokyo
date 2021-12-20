var db = require('../data');

module.exports.login = (req, res) => {
    res.render('auth/login', {
    })
};

module.exports.postLogin = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    var user = db.get('users').find({ username : username}).value();

    if(!user) {
        res.render('auth/login', {
            errors: [
                'User does not exits'
            ],
            values: req.body
        });
        return;
    }
    
    if (user.password !== password) {
        res.render('auth/login', {
            errors: [
                'Wrong password'
            ],
            values: req.body
        });
        return;
    }
    res.cookie('userId', user.id);
    res.redirect('/users');
}   