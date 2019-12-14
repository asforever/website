const mongoose = require("mongoose");

class Connect {
    async run(url) {
        const options = {
          /*  useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 10000,*/
        };
        await mongoose.connect(url, options)
            .then(() => console.log("success db"))
            .catch(err => console.error("error db"));
    }
}

module.exports = Connect;
