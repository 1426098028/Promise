/*
6.promise异常传透?
(1)当使用promise的then链式调用时, 可以在最后指定失败的回调,
(2)前面任何操作出了异常, 都会传到最后失败的回调中处理
7.中断promise链?    返回一个空的Promise(()=>{})即可中断  此时Promise状态为pending状态 不会向下执行
(1)当使用promise的then链式调用时, 在中间中断, 不再调用后面的回调函数
(2)办法: 在回调函数中返回一个pendding状态的promise对象
*/

// promise异常传透
new Promise((resolve, reject) => {
  reject('失败')
})
  .then((value) => {
    console.log('成功')
    return value      //把异常向下传递
  })
  .then((value) => {
    console.log('成功')
    return value      //把异常向下传递
  })
  .then((value) => {
    console.log('成功')
    return value      //把异常向下传递
  })
  .then((value) => {
    console.log('成功')
    return value      //把异常向下传递
  })
  .then((value) => {
    console.log('成功')
    return value      //把异常向下传递
  })
  .catch((reason) => {
    console.log('失败' + reason)
  })



// 中断promise链
new Promise((resolve, reject) => {
  resolve('成功')
})
  .then((value) => {
    console.log('成功')
    return value
  })
  .then((value) => {
    console.log('我想中断Promise')
    return value
  })
  .then((value) => {
    console.log('正在中断Promise')
    return new Promise(() => { })    //返回一个空的Promise(()=>{})即可中断  此时Promise状态为pending状态 不会向下执行
  })
  .then((value) => {
    console.log('中断Promise成功')
    return value
  })
  .then((value) => {
    console.log('中断Promise成功')
    return value
  })
  .catch((reason) => {
    console.log('中断Promise失败' + reason)
  })