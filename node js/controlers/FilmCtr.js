let request = require('request');

class Films {
    getRequesst(text, page, mas) {
        return new Promise((resolve, reject) => {
            request({
                url: `http://www.omdbapi.com/?apikey=11b3dba6&s=${text}&page=${page}`,
            }, (error, response, body) => {
                if (!error) {
                    body = JSON.parse(body);
                    let obj = body.Search;
                    mas.push(obj);
                    resolve(mas);
                }
            });
        })
    }

    getSelected(keys) {
        return new Promise((resolve, reject) => {
            let mas = [];
            keys.forEach((key, i) => {
                request({
                    url: `http://www.omdbapi.com/?apikey=11b3dba6&i=${key}`,
                }, (error, response, body) => {
                    body = JSON.parse(body);

                    mas.push(body);
                });

            });

            setTimeout(() => {
                resolve(mas);
            }, 500)

        })
    }
}

module.exports = Films;
