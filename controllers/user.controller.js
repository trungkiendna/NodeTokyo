var db = require('../data');
var shortId = require('shortid');


module.exports.index = (req,res) => {
    res.render('users/index', {
        users: db.get('users').value()
    })
};

module.exports.search = (req,res) => {
    var q = req.query.q;
    var matchUser = db.get('users').value().filter((user) => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    res.render('users/index', {
        users: matchUser
    });
};

module.exports.create = (req,res) => {
    res.render('users/create');
};

module.exports.get = (req,res) => {
    var id = req.params.id;

    var user = db.get('users').find({ id: id }).value();
    res.render('users/view', {
        user: user
    })
};

module.exports.postCreate = (req,res) => {
    req.body.id = shortId.generate();
    
    console.log(JSON.stringify(res.locals));

    db.get('users').push(req.body).write();
    res.redirect('/users');
}
