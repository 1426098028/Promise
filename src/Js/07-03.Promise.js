/* 
4.	promise.then()返回的新promise的结果状态由什么决定?
  (1)简单表达: 由then()指定的回调函数执行的结果决定
  (2)详细表达:
      ①如果抛出异常, 新promise变为rejected, reason为抛出的异常
      ②如果返回的是非promise的任意值, 新promise变为resolved, value为返回的值
      ③如果返回的是另一个新promise, 此promise的结果就会成为新promise的结果 
*/

// 抛出异常, 新promise变为rejected, reason为抛出的异常
new Promise((resolve, reject) => {   //同步
  // resolve('成功')
  reject('失败')
})





  .then((value) => {    //异步    
    console.log(value + '---成功')
    // throw '抛出异常'     // 抛出异常, 新promise变为rejected, reason为抛出的异常
    return Promise.resolve('新Promise-成功')     // 返回的是另一个新promise, 此promise的结果就会成为新promise的结果 
    // return Promise.reject('新Promise-失败')     // 返回的是另一个新promise, 此promise的结果就会成为新promise的结果 
  })



  .then((value) => {    //异步    
    console.log(value + '---成功')  //出现undefined 是因为没前面的then没有给我们返回任何的值，所以才会出现undefined
  })
  .then((value) => {    //异步    
    console.log(value + '---成功')  //出现undefined 是因为没前面的then没有给我们返回任何的值，所以才会出现undefined
  })




  .catch((reason) => {   //异步    
    console.log(reason + '---失败')
    // return "非promise"   //返回的是非promise的任意值, 新promise变为resolved, value为返回的值
    // return Promise.resolve('新Promise-成功')     // 返回的是另一个新promise, 此promise的结果就会成为新promise的结果 
    return Promise.reject('新Promise-失败')     // 返回的是另一个新promise, 此promise的结果就会成为新promise的结果              没有处理失败 并且没有抛出异常  所以后会走成功的Promise  返回值为undefined
  })




  .catch((reason) => {   //异步    
    console.log(reason + '---失败')  //出现undefined 是因为没前面的catch没有给我们返回任何的值，所以才会出现undefined
  })
  .catch((reason) => {   //异步    
    console.log(reason + '---失败')  //出现undefined 是因为没前面的catch没有给我们返回任何的值，所以才会出现undefined
  })








  .then((value) => {    //异步    
    console.log(value + '---成功--return')
  })
  .then((value) => {    //异步    
    console.log(value + '---成功--return')  //出现undefined 是因为没前面的then没有给我们返回任何的值，所以才会出现undefined
  })
  .then((value) => {    //异步    
    console.log(value + '---成功--return')  //出现undefined 是因为没前面的then没有给我们返回任何的值，所以才会出现undefined
  })
  .catch((reason) => {   //异步    
    console.log(reason + '---失败--return')
  })
  .catch((reason) => {   //异步    
    console.log(reason + '---失败--return')  //出现undefined 是因为没前面的catch没有给我们返回任何的值，所以才会出现undefined
  })
  .catch((reason) => {   //异步    
    console.log(reason + '---失败--return')  //出现undefined 是因为没前面的catch没有给我们返回任何的值，所以才会出现undefined
  })