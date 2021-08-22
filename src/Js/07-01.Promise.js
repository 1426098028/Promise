/* 
1.	如何改变promise的状态?
  (1)resolve(value): 如果当前是pending就会变为resolved
  (2)reject(reason): 如果当前是pending就会变为rejected
  (3)抛出异常: 如果当前是pendding就会变为rejected

  // resolve(value)                 //当前是Promise会从pending状态变为resolved（成功）状态
  // reject(reason)                 //当前Promise会从pending状态变为reason（失败）状态
  // 抛出异常: 如果当前是pendding就会变为rejected    从语法上说：可以抛出任意东西
  // throw '失败'                   //当前Promise会从pending状态变为reason（失败）状态       reason为抛出的    throw '失败'  错误信息
  // throw new Error('失败')        //当前Promise会从pending状态变为reason（失败）状态     reason为抛出的 Error()的错误信息





 
2.	一个promise指定多个成功/失败回调函数, 都会调用吗?
  会调用
  当promise改变为对应状态时都会调用 比如失败只会调用失败的回调函数
*/



new Promise((resolve, reject) => {
  // resolve('成功')  //当前是Promise会从pending状态变为resolved（成功）状态
  // reject('失败')   //当前Promise会从pending状态变为reason（失败）状态
  // throw '失败'        //当前Promise会从pending状态变为reason（失败）状态       reason为抛出的    throw '失败'  错误信息
  // throw new Error('失败')        //当前Promise会从pending状态变为reason（失败）状态     reason为抛出的 Error()的错误信息
})
  .then((value) => {
    console.log(value)
  })
  .then((value) => {
    console.log(value)
  })
  .catch((reason) => {
    console.log(reason)
  })
  .catch((reason) => {
    console.log(reason)
  })

