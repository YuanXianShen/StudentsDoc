const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/playground', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch((err) => {
        console.log(err, '连接失败');
    })