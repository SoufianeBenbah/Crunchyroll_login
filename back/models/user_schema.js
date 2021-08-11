const user = {
    "username" : {
        type: String,
    },
    "email" : {
        type: String,
        required: true,
    },
    "password" : {
        type: String,
        required: true,
    },
    "date": {
        type: Date
    },
};

module.exports = user;