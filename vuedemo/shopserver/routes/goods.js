let express = require('express');
let mongoose = require('mongoose');
let Goods = require('../modules/goods');
mongoose.connect('mongodb://liyue:liyue@localhost:27017/shop?authSource=admin');
mongoose.connection.on("connected",function(){
    console.log("连接到数据库")
});
mongoose.connection.on("error",function(){
    console.log("数据库出错了")
});
mongoose.connection.on("disconnected",function(){
    console.log("断开与数据库的连接")
});
let router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    let sortFlag = parseInt(req.param("sortFlag"));
    let pageNo = parseInt(req.param("pageNo"));
    let pageSize = parseInt(req.param("pageSize"));
    let startPageNum = (pageNo - 1) * pageSize;
    Goods.find({})
        .skip(startPageNum).limit(pageSize).sort({"productPrice":sortFlag})
        .exec(function(error,doc){
            if(error){
                res.json({
                    status:'1',
                    msg:error.msg
                })
            }else{
                res.json({
                    status:'0',
                    msg:'success',
                    count:doc.length,
                    list:doc
                })
            }
        })
    // res.send('hello');
});

module.exports = router;
