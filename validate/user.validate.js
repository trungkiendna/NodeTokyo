module.exports.postCreate = (req, res, next) => {
    var errors = [];

    if(!req.body.name) {
        errors.push('Name is required')
    }

    if (!req.body.phone) {
        errors.push('Phone is required')
    }

    if (!req.body.username) {
        errors.push('Username is required')
    }

    if (!req.body.password) {
        errors.push('Password is required')
    }

    if (errors.length) {
        res.render('users/create', {
            errors: errors,
            values: req.body
        });
        return;
    }

    res.locals.success = true;
    
    next();
}