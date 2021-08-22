
// 1. Promise构造函数: Promise (excutor) {}
//     excutor函数: 同步执行  (resolve, reject) => {}
//     resolve函数: 内部定义成功时我们调用的函数 value => {}
//     reject函数: 内部定义失败时我们调用的函数 reason => {}
//     说明: excutor会在Promise内部立即同步回调,异步操作在执行器中执行

// new Promise((resolve, reject) => {// excutor执行器函数  同步回调函数
//     //写异步函数
//     setTimeout(() => {
//         const Time = Date.now()
//         if (Time % 2 === 0) { //偶数成功   奇数失败
//             resolve('成功的Promise')

//         } else {
//             reject('失败的Promise')
//         }
//     })
// })
//     .then(
//         (value) => {
//             console.log(value)
//         },
//         (reason) => {
//             console.log(reason)
//         }
//     )


// 2. Promise.prototype.then方法: (onResolved, onRejected) => {}
//     onResolved函数: 成功的回调函数  (value) => {}
//     onRejected函数: 失败的回调函数 (reason) => {}
//     说明: 指定用于得到成功value的成功回调和用于得到失败reason的失败回调
//           返回一个新的promise对象

// 3. Promise.prototype.catch方法: (onRejected) => {}
//     onRejected函数: 失败的回调函数 (reason) => {}
//     说明: then()的语法糖, 相当于: then(undefined, onRejected)

// 4. Promise.resolve方法: (value) => {}
//     value: 成功的数据或promise对象
//     说明: 返回一个成功/失败的promise对象
// const p = Promise.resolve('成功')
// p.then((value) => {
//     console.log(value)
// }, (reason) => {
//     console.log(reason)
// })
// const p1 = Promise.reject('失败')
// p1.then((value) => {
//     console.log(value)
// }, (reason) => {
//     console.log(reason)
// })
// // 5. Promise.reject方法: (reason) => {}
// //     reason: 失败的原因
// //     说明: 返回一个失败的promise对象
// const p2 = Promise.reject('失败2')
// p1.then((value) => {
//     console.log(value)
// }, (reason) => {
//     console.log(reason)
// })
// 6. Promise.all方法: (promises) => {}
//     promises: 包含n个promise的数组
//     说明: 返回一个新的promise, 只有所有的promise都成功才成功, 只要有一个失败了就直接失败
const success = Promise.resolve('成功')

const success1 = Promise.resolve('成功')

const success2 = Promise.resolve('成功')

const Fail = Promise.reject('失败')


// 返回一个新的promise, 只有所有的promise都成功才成功, 只要有一个失败了就直接失败
const AllSuccess = Promise.all([success, success1, success2])//全部Promise都是成功 ，才是成功
AllSuccess.then((values) => {
    console.log('all', values)
})
const AllFail = Promise.all([success, success1, Fail])//有一个Promise是失败的 ，就是失败
AllFail.then((values) => {
    console.log('all', values)
}).catch((reason) => {
    console.log('all', reason)
})

// 7. Promise.race方法: (promises) => {}
//     promises: 包含n个promise的数组
//     说明: 返回一个新的promise, 最先完成一个promise的结果状态就是最终的结果状态
const RaceResolve = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功')
        // reject('失败')
    }, 100)
})

const RaceResolve1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
        // reject('失败')
    }, 103)
})

const RaceReject = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('成功')
        reject('失败1')
    }, 200)
})
const RaceReject1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('成功')
        reject('失败2')
    }, 90)
})

// 最先完成一个promise的结果状态就是最终的结果状态
const RaceSuccess = Promise.race([RaceResolve, RaceResolve1, RaceReject])
RaceSuccess
    .then((value) => {
        console.log('RaceSuccess', value)
    })
    .catch((reason) => {
        console.log('RaceSuccess', reason)
    })
const RaceFail = Promise.race([RaceResolve, RaceResolve1, RaceReject, RaceReject1])
RaceFail
    .then((value) => {
        console.log('RaceFail', value)
    })
    .catch((reason) => {
        console.log('RaceFail', reason)
    })

// 8. Promise.prototype.finally(onFinally)方法: (onFinally) => {}
//     onFinally: 回调函数  不接收任何参数
//     说明: 无论结果是fulfilled或者是rejected，都会执行指定的回调函数
const Finall = new Promise((resolve, reject) => {// excutor执行器函数  同步回调函数
    //写异步函数
    setTimeout(() => {
        const Time = Date.now()
        if (Time % 2 === 0) { //偶数成功   奇数失败
            resolve('成功的Promise')

        } else {
            reject('失败的Promise')
        }
    })
})
Finall
    .then((value) => {
        console.log(value)
    })
    .catch((reason) => {
        console.log(reason)
    })
    .finally(() => {
        console.log('finally----无论结果是fulfilled或者是rejected，我都执行')
    })
// 9. Promise.any()方法: (promises) => {}
//     promises: 包含n个promise的数组
//     说明: 这个方法用于返回第一个成功的 promise 。只要有一个 promise 成功此方法就会终止，它不会等待其他的 promise 全部完成。
const Any = Promise.any([Fail, success, success1, success2])
Any
    .then((value) => {
        console.log('Any', value)
    }).catch((reason) => {
        console.log('Any', reason)
    })

// 10. Promise.allSettled方法: (promises) => {}
//     promises: 包含n个promise的数组
//     说明: 返回一个新的promise, 返回全部Promise的状态  状态总是成功的  数组对象类型
const AllSettled = Promise.allSettled([Fail, success, success1, success2])
AllSettled
    .then((value) => {
        console.log('AllSettled', value)
    })



