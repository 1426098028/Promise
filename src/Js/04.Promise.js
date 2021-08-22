const p = new Promise((resolve, reject) => {//执行excutor函数   同步回调函数
    //异步回调函数
    console.log('执行 excutor')
    setTimeout(() => {//偶数成功，奇数失败
        const Time = Date.now()
        if (Time % 2 === 0) {
            resolve("成功的数据" + Time)
        } else {
            reject("失败的数据" + Time)
        }
    }, 1000)

})

p.then(
    (value) => {
        console.log(value)
    },
    (reason) => {
        console.log(reason)
    }
)