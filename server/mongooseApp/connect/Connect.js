const mongoose = require("mongoose");

class Connect {
    async run(url) {
        await mongoose.connect(url, {useNewUrlParser: true}).then(() => console.log("success db")).catch(err => console.error("error db"));
    }
}

module.exports = Connect;
