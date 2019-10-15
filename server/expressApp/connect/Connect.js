const express = require('express');

class Connect {
    async run(port = 3000) {
        const server = express();
        await new Promise((resolve, reject) => {
            server.listen(port, (err) => {
                if (err) reject(err);
                else {
                    console.log("server listening on port " + port);
                    resolve();
                }
            });
        });
        return server;
    }
}

module.exports = Connect;
