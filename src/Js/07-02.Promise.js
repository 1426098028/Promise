/*
  3.改变promise状态和指定回调函数谁先谁后?
  (1)都有可能, 正常情况下是先指定回调再改变状态, 但也可以先改状态再指定回调
  (2)如何改先改状态再指定回调?
  ①在执行器(excutor)中直接调用resolve()/reject()     先改状态再指定回调
  ②在执行器(excutor)延迟更长时间才调用then()          先指定回调再改状态
  (3)什么时候才能得到数据?
  ①如果先指定的回调, 那当状态发生改变时, 回调函数就会调用, 得到数据
  ②如果先改变的状态, 那当指定回调时, 回调函数就会调用, 得到数据
*/



// 在执行器(excutor)中直接调用resolve()/reject()     

// 先改状态再指定回调
new Promise((resolve, rejtect) => {//excutor执行器函数    同步
  resolve('-----先改状态resolve') // 1.先改状态    (同时指定数据)
  // rejtect('-----先改变状态rejtect') // 1.先改状态    (同时指定数据)
})
  .then((value) => {    // 2.异步    后指定回调函数, 异步执行回调函数
    console.log(`先改变状态再指定回调函数${value}`)
  })
  .catch((reason) => {   // 2.异步    后指定回调函数, 异步执行回调函数
    console.log(`先改变状态再指定回调函数${reason}`)
  })

// 在执行器(excutor)延迟更长时间才调用then()          先指定回调再改状态

//常规指定 先指定回调函数再改变状态
new Promise((resolve, rejtect) => {//excutor执行器函数    同步
  setTimeout(() => {
    resolve('----先指定回调函数 resolve') // 2.后改状态
    // rejtect('----先指定回调函数 rejtect') // 2.后改状态
  })
})
  .then((value) => {    //异步    1.先指定回调函数(保存当前指定的回调函数)
    console.log(`先指定回调函数再改变状态${value}`)
  })
  .catch((reason) => {   //异步   1.先指定回调函数(保存当前指定的回调函数)
    console.log(`先指定回调函数再改变状态${reason}`)
  })
