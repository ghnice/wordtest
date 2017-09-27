/**
 * Created by haoguo on 17/9/27.
 */
var express=require('express');
var router=express.Router();
var wordBook = require('../lib/mongoose').wordBook;
router.post('/get_book_list', function (req, res, next) {
    console.log(req.body);//接收请求数据
    //获取所有单词
    wordBook.find({},null,{/*limit:20*/},function(error,doc){
        if(doc){
            res.send(200,{code:200,result:doc});
        }else{
            res.send(200, {code: 501, result: doc});
        }
    })
});

module.exports=router;