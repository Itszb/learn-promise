// const axios = require('axios');
// const $ = require('jquery');

import * as $ from './utilities/ajax.js';

// import name from './utilities/test.js';
// name();

import * as math from './utilities/add.js';
console.log(math.add(1,2));
console.log(math.subtration(2,1));
console.log(math.multiply(2,2));

// import {add,subtration,multiply} from './utilities/add.js'
// console.log(add(1,2));
// console.log(subtration(2,1));
// console.log(multiply(2,2));


console.log('%c =====================华丽的分割线======================', 'color:yellow');
let a=1;
if(a>0){
   import('./utilities/test.js').then((name)=>{
       console.log('我的天安')
       console.log(name.default());
   })
   // import 函数返回一个Promise对象
   // import() 可以动态生成路径
   // import()加载模块成功以后,这个模块会作为一个对象,当做then方法的参数,
   
}



console.log('%c =====================华丽的分割线======================', 'color:green');



//ES6的包管理功能到底怎么用


//这是我在github上找的一个ajax包的功能  具体地址 看
//http://blackfe.com/2016/05/04/Javascript/%E8%87%AA%E5%B7%B1%E5%8A%A8%E6%89%8B%E5%86%99%E4%B8%80%E4%B8%AAAjax/
//webpack commonjs  和 ES6 的包管理能混用吗?

console.log("执行开始");

console.log("console.dir()的用法");
console.dir(Promise);

console.log('%c =====================华丽的分割线======================', 'color:green');

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

function getName() {
    return new Promise(function (resolve, reject) { //默认状态时 pending
        $.ajax({
            url: 'http://127.0.0.1:3000/mock/name.json',
            data: {},
            type: 'get',
            timeOut: 2000, //两秒超时
            success: function (data) {
                resolve(data); //操作成功完成状态变成  fulfilled
            },
            error: function (err) {
                reject(err); //  操作失败状态变成 rejected
            }
        });
    })
}

function getAge() {
    return new Promise(function (resolve, reject) { //默认状态时 pending
        $.ajax({
            url: 'http://127.0.0.1:3000/mock/age.json',
            data: {},
            type: 'get',
            timeOut: 2000, //两秒超时
            success: function (data) {
                resolve(data); //操作成功完成状态变成  fulfilled
            },
            error: function (err) {
                reject(err); //  操作失败状态变成 rejected
            }
        });
    })
}

function getJob() {
    return new Promise(function (resolve, reject) { //默认状态时 pending
        $.ajax({
            url: 'http://127.0.0.1:3000/mock/job.json',
            data: {},
            type: 'get',
            timeOut: 2000, //两秒超时
            success: function (data) {
                resolve(data); //操作成功完成状态变成  fulfilled
            },
            error: function (err) {
                reject(err); //  操作失败状态变成 rejected
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

*/
//但是Promise到底解决了什么样的问题  就仅仅是编写方式 更加的直爽了吗?  解决了地狱回调问题.
//https://juejin.im/post/5b45bea65188251b1c3ce1ec




//然后是 async  await

// async 用于申明一个 function 是异步的

// async 函数总是返回的是一个 Promise 对象

// await 用于等待一个异步方法执行完成   await 只能出现在 async 函数中

// 在没有 await 的情况下执行 async 函数，它会立即执行，返回一个 Promise 对象，并且，绝不会阻塞后面的语句。

// await是一个表达式的操作符,它在等这个表达式的值. 它不仅可以等Promise对象 还可以等任意的表达式

// await 后面可以接 普通函数调用 或者直接量.

// 如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西。

//如果它等到的是一个 Promise 对象，await 就忙起来了，它会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。

//看到阻塞一词不要慌  这就是为什么 await 必须放在 async 函数中的原因.

//单一的 Promise 链并不能发现 async/await 的优势，但是，如果需要处理由多个 Promise 组成的 then 链的时候，优势就能体现出来了（很有意思，Promise 通过 then 链来解决多层回调的问题，现在又用 async/await 来进一步优化它）
/*

function getVal(){
    return '1';
}

async function testAsync(){
    return Promise.resolve("hello async");
}

async function test() {
    const v1 = await getVal();
    const v2 = await testAsync();
    console.log(v1, v2);
}
test();

*/


async function getData() {

    try {
        let name = await getName()
        name = JSON.parse(name);
        if (name.code != 1) {
            return;
        }
        console.log(name);
    } catch (err) {
        console.log(err);
    }





    let age = await getAge();
    age = JSON.parse(age);

    if (age.code != 1) {
        return;
    }
    console.log(age);


    let job = await getJob();
    job = JSON.parse(job);

    console.log(job);
}
//todo  看看别人的源码 try catch的用法

//  see  用async await的写法 来写  更像同步代码的写法了 哈哈哈. 
getData();

/*
//如果确实希望多个请求并发执行，可以使用 Promise.all 方法
async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = await Promise.all(promises);
  console.log(results);
}

// 或者使用下面的写法

async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = [];
  for (let promise of promises) {
    results.push(await promise);
  }
  console.log(results);
}


*/