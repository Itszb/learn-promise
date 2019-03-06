// const axios = require('axios');

// const $ = require('jquery');
import * as $ from './utilities/ajax.js';    
//这是我在github上找的一个ajax包的功能  具体地址 看
//http://blackfe.com/2016/05/04/Javascript/%E8%87%AA%E5%B7%B1%E5%8A%A8%E6%89%8B%E5%86%99%E4%B8%80%E4%B8%AAAjax/
//webpack commonjs  和 ES6 的包管理能混用吗?

console.log("执行开始");

console.log("console.dir()");
console.dir(Promise);
console.log("=====================华丽的分割线======================")

// $.get('http://127.0.0.1:3000/mock/one.json',{},function (data) {
//     console.log("第一次请求接口返回结果");
//     if (data.name === "赵斌") {
//         $.get('http://127.0.0.1:3000/mock/one.json', function (data) {
//             console.log("第二次请求接口返回结果");
//         })
//     }
// })

//这是一篇Promise的文章我觉得不错
//http://www.cnblogs.com/lvdabao/p/es6-promise-1.html
//这是一篇async await的文章 我觉得的不错
//https://segmentfault.com/a/1190000007535316

//创建的时候

function getName(){
    return new Promise(function(resolve,reject){  //默认状态时 pending
        $.ajax({
            url: 'http://127.0.0.1:3000/mock/name.json',
            data: {},
            type:'get',
            timeOut:2000, //两秒超时
            success: function(data){
                resolve(data);   //操作成功完成状态变成  fulfilled
            },
            error:function(err){
                reject(err);   //  操作失败状态变成 rejected
            }   
        });
    })
}
function getAge(){
    return new Promise(function(resolve,reject){  //默认状态时 pending
        $.ajax({
            url: 'http://127.0.0.1:3000/mock/age.json',
            data: {},
            type:'get',
            timeOut:2000,  //两秒超时
            success: function(data){
                resolve(data);   //操作成功完成状态变成  fulfilled
            },
            error:function(err){
                reject(err);   //  操作失败状态变成 rejected
            }   
        });
    })
}
function getJob(){
    return new Promise(function(resolve,reject){  //默认状态时 pending
        $.ajax({
            url: 'http://127.0.0.1:3000/mock/job.json',
            data: {},
            type:'get', 
            timeOut:2000, //两秒超时
            success: function(data){
                resolve(data);   //操作成功完成状态变成  fulfilled
            },
            error:function(err){
                reject(err);   //  操作失败状态变成 rejected
            }   
        });
    })
}
/*
getName().then((name)=>{
    console.log(name);
    return getAge();
}).then((age)=>{
    console.log(age);
    return getJob();
}).then((job)=>{
    console.log(job);
}).catch((err)=>{
    console.log(err);
})

//有一个问题是 像上面这样的链式调用 如果其中一个出了错 那么后面的catch能catch住错误吗? todo

Promise.all([getName(),getAge(),getJob()]).then((data)=>{
    //当all 里面的所有请求 "都" 返回结果的时候  回调函数才会执行  
    console.log("Promise.all 返回的结果");
    console.log(data);
})

*/

/*

Promise.race([getName(),getAge(),getJob()]).then((data)=>{
    console.log("Promise.race 返回的结果")
    console.log(data);
})

*/

function timeout(){
    return  new Promise(function(resolve, reject){
        setTimeout(function(){
            reject('请求超时');
        }, 2000);
    });
}

Promise.race([getName(),getAge(),getJob(),timeout()]).then((data)=>{

    //如果前三个请求都超时2秒以上 就会执行最后一个  因为最后一个是reject  不知道是在then 里面还是  catch里面执行呢  todo
    console.log("Promise.race 返回的结果")
    console.log(data);
}).catch((err)=>{

})



// axios.get('http://127.0.0.1:3000/mock/one.json')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })