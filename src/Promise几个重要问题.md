# Promise几个重要问题
### 1.如何改变Promise的状态?
```
      1.resolve(value)        如果当前Promise状态是pending时，执行excutor()函数后状态会从pending状态改变为resolve状态
      2.reject(reason)        如果当前Promise状态时pending时，执行excutor()函数后状态会从pending状态改变为reject状态
      3.抛出异常(throw)        如果当前Promise状态时pending时，执行excutor()函数有throw方法执行了，那会从pending状态改变为reject状态         
        抛出异常的方式：
                              1.throw "内容"               reason接收到抛出的值    throw '失败'  错误信息
                              2.throw new Error("内容")    reason接收到抛出的值    Error("内容")  错误信息 对象
```
### 2.一个Promise指定多个成功/失败回调函数, 都会调用吗?
```
      都会调用
      当promise改变为对应状态时都会调用 比如失败只会调用失败的回调函数
```
### 3.Promise.then()返回的新Promise的结果状态由什么决定?
##### 1.简单表达
```
        由then()指定的回调函数执行的结果决定
```
##### 2.详细表达
```
        1.如果抛出异常(throw),新的Promise变为rejected，reason为抛出异常的数据
        2.如果返回(return)的是一个Promise值，此Promise的结果会成为下一个新的Promise的状态   例如 ：如Promise状态为reject，那下一个Promise状态一定为reject状态，reason为返回值
        3.如果返回(return)的是一个非Promise任意值，新的Promise状态会是resolve，value为返回值
```
### 4.Promise构造函数是同步还是异步执行，then和catch呢
```
            Promise构造函数是同步回调，而then和catch是异步回调value
```
### 5.改变Promise状态和指定回调函数谁先谁后?

#####      都有可能, 正常情况下是先指定回调再改变状态, 但也可以先改状态再指定回调

###### 1.如何先改状态再指定回调
```
            在执行器(excutor)中直接调用resolve()/reject()     先改状态再指定回调
```
###### 2.如何先指定回调再改状态  (常规)
```
            在执行器(excutor)中先调用excutor中的函数，再调用then()或catch()          先指定回调再改状态
```
###### 3.什么时候才能得到数据?
```
            如果先指定的回调, 那当状态发生改变时, 回调函数就会调用, 得到数据
            如果先改变的状态, 那当指定回调时, 回调函数就会调用, 得到数据

```
### 6.Promise如何串连多个操作任务?
```
            promise的then()返回一个新的promise, 可以开成then()的链式调用
            通过then的链式调用串连多个同步/异步任务
```
### 7.Promise异常传(穿)透?
```
            当使用promise的then链式调用时, 可以在最后指定失败的回调,
            前面任何操作出了异常, 都会传到最后失败的回调中处理
```
### 8.中断Promise链
```
            返回一个空的Promise(()=>{})即可中断  此时Promise状态为pending状态 不会向下执行
```
