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
    let param = {}
    let checkPriceLevel = req.param("priceChecked");
    switch (checkPriceLevel) {
        case "all":break;
        case "0":param = {
            productPrice:{
                $gt:0,
                $lte:100
            }
        };break;
        case "1":param = {
            productPrice:{
                $gt:100,
                $lte:500
            }
        };break;
        case "2":param = {
            productPrice:{
                $gt:500,
                $lte:1000
            }
        };break;
        case "3":param = {
            productPrice:{
                $gt:1000,
                $lte:2000
            }
        };break;
        default : break;
    }
    Goods.find(param)
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
