let FilmCtrl = require('../controlers/FilmCtr');
let filmctrl = new FilmCtrl();
let rout = require('express').Router();
rout.get('/search', (req, res) => {
    let text = req.query.text;
    let page = 1;
    let mas = [];
    filmctrl.getRequesst(text, page, mas).then((mas2) => {
        page++;
        filmctrl.getRequesst(text, page, mas2).then((result) => {
            if (result[0] && result[1])
                res.send(result[0].concat(result[1]));
            else
                res.send(false);
        })
    })
});
rout.post('/getSelected', (req, res) => {
    let mas = req.body.mas;
    filmctrl.getSelected(mas).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    })

});


module.exports = rout;
