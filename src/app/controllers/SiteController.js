const course = require('../models/course')
class SiteController {
    // [GET] /
     index(req, res) {
        // res.render('home');
        course.find({}, function(err, courses) {
            if(!err) {
                res.json(courses)
            } else {
                res.status(400).json({ error: 'ERROR !!!'})
            }

        })
       
    }

    // [GET] /news/:slug

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
