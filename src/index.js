// const axios = require('axios');

const $ = require('jquery');

console.log("我的天哪");

// $.get('http://127.0.0.1:3000/mock/one.json',{},function (data) {
//     console.log("第一次请求接口返回结果");
//     if (data.name === "赵斌") {
//         $.get('http://127.0.0.1:3000/mock/one.json', function (data) {
//             console.log("第二次请求接口返回结果");
//         })
//     }
// })


//http://www.cnblogs.com/lvdabao/p/es6-promise-1.html

//https://segmentfault.com/a/1190000007535316

//创建的时候

function getData(){
    let promise=new Promise(function(resolve,reject){  //默认状态时 pending
        $.ajax({
            url: 'http://127.0.0.1:3000/mock/one.json',
            data: {},
            method:'get',
            success: function(data){
                resolve(data);   //操作成功完成状态变成  fulfilled
            },
            error:function(err){
                reject(err);   //  操作失败状态变成 rejected
            }   
        });
    })
    return promise;
}








// axios.get('http://127.0.0.1:3000/mock/one.json')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })