    /* 
    1.	如何改变promise的状态?
      (1)resolve(value): 如果当前是pendding就会变为resolved
      (2)reject(reason): 如果当前是pendding就会变为rejected
      (3)抛出异常: 如果当前是pendding就会变为rejected
    
    2.	一个promise指定多个成功/失败回调函数, 都会调用吗?
      当promise改变为对应状态时都会调用
    */