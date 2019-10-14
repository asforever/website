module.exports = {
    mongodb: {
        url: 'mongodb://95.169.9.37:27017/test'
    },
    crossOrigins: [
        'http://localhost:3000', 'http://www.zhengweiyong.com'
    ],
    port: parseInt(process.env.PORT, 10) || 8080
};
