const express = require('express');

class Connect {

    async run(port = 3000, middlewareArr = []) {
        const server = express();
        middlewareArr.forEach(middleware => {
            server.use(middleware);
        });
        await new Promise((resolve, reject) => {
            server.listen(port, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }
}

module.exports = Connect;
