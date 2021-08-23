# Promise几个重要问题
### 1.如何改变Promise的状态?
```
      1.resolve(value)        如果当前Promise状态是pending时，执行excutor()函数后状态会从pending状态改变为resolve状态
      2.reject(reason)        如果当前Promise状态时pending时，执行excutor()函数后状态会从pending状态改变为reject状态
      3.抛出异常(throw)        如果当前Promise状态时pending时，执行excutor()函数有throw方法执行了，那会从pending状态改变为reject状态         
                  抛出异常的方式
                                    1.throw "内容"    reason接收到抛出的值    throw '失败'  错误信息
                                    2.throw new Error("内容")    reason接收到抛出的值    Error("内容")  错误信息 对象
```
### 2.一个Promise指定多个成功/失败回调函数, 都会调用吗?
```
```
### 3.Promise.then()返回的新Promise的结果状态由什么决定?
```
```
### 4.改变Promise状态和指定回调函数谁先谁后?
```
```
### 5.Promise如何串连多个操作任务?
```
```
### 6.Promise异常传(穿)透?
```
```
### 7.中断Promise链
```
```