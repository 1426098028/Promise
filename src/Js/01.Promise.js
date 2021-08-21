/*
1. 函数对象与实例对象
  函数对象: 将函数作为对象使用时, 简称为函数对象
  实例对象: new 函数产生的对象, 简称为对象
 .点的左边是函数，.的右边是函数对象

*/

function Fn() {   // Fn函数 
}
const fn = new Fn() // Fn是构造函数  fn是实例对象(简称为对象)
console.log(Fn.prototype) // Fn是函数对象
Fn.call({}) // Fn是函数对象
$('#test') // jQuery函数
$.get('/test') // jQuery函数对象

function Person(params) {

}