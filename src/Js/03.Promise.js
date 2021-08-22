/*
目标: 进一步理解JS中的错误(Error)和错误处理
  mdn文档: https: //developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error

  1. 错误的类型
      Error: 所有错误的父类型
      ReferenceError: 引用的变量不存在
      TypeError: 数据类型不正确的错误
      RangeError: 数据值不在其所允许的范围内
      SyntaxError: 语法错误
  2. 错误处理
      捕获错误: try ... catch
      抛出错误: throw error
  3. 错误对象
      message属性: 错误相关信息
      stack属性: 函数调用栈记录信息
*/
// 1. 错误的类型
// ReferenceError: 引用的变量不存在
// console.log(a)

// TypeError: 数据类型不正确的错误
// let a = {}
// a.xxx()

// RangeError: 数据值不在其所允许的范围内 栈溢出
// function fun() {
//     fun()
// }
// fun()

// SyntaxError: 语法错误
// const a =,,,


// 2. 错误处理
// 捕获错误: try{} catch(){}
// 抛出错误: throw error

try {
    if (Date.now() % 2 === 1) {
        console.log('当前时间为奇数, 可以执行任务')
    } else { // 如果时间是偶数抛出异常, 由调用来处理
        throw new Error('当前时间为偶数无法执行任务')
    }
} catch (error) {
    console.log("当前时间为奇数,捕获到异常", error)
}

// 3. 错误对象
// message属性: 错误相关信息
// stack属性: 函数调用栈记录信息