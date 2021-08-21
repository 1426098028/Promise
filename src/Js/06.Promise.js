  /* 
    1. Promise构造函数: Promise (excutor) {}
        excutor函数: 同步执行  (resolve, reject) => {}
        resolve函数: 内部定义成功时我们调用的函数 value => {}
        reject函数: 内部定义失败时我们调用的函数 reason => {}
        说明: excutor会在Promise内部立即同步回调,异步操作在执行器中执行

    2. Promise.prototype.then方法: (onResolved, onRejected) => {}
        onResolved函数: 成功的回调函数  (value) => {}
        onRejected函数: 失败的回调函数 (reason) => {}
        说明: 指定用于得到成功value的成功回调和用于得到失败reason的失败回调
              返回一个新的promise对象

    3. Promise.prototype.catch方法: (onRejected) => {}
        onRejected函数: 失败的回调函数 (reason) => {}
        说明: then()的语法糖, 相当于: then(undefined, onRejected)

    4. Promise.resolve方法: (value) => {}
        value: 成功的数据或promise对象
        说明: 返回一个成功/失败的promise对象

    5. Promise.reject方法: (reason) => {}
        reason: 失败的原因
        说明: 返回一个失败的promise对象

    6. Promise.all方法: (promises) => {}
        promises: 包含n个promise的数组
        说明: 返回一个新的promise, 只有所有的promise都成功才成功, 只要有一个失败了就直接失败
    7. Promise.race方法: (promises) => {}
        promises: 包含n个promise的数组
        说明: 返回一个新的promise, 第一个完成的promise的结果状态就是最终的结果状态
  */