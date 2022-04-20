# this

- 定义

函数的 `this`关键字在`JavaScript`中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别

在绝大多数情况下，函数的调用方式决定了`this`的值（运行时绑定）。this不能在执行期间被赋值，并且在每次函数被调用时`this`的值也可能会不同。

`this`关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调用它的对象

当前函数的this是在被调用的时候才能确定的

如果当前的执行上下文处于调用栈的栈顶，这个时候变量对象变成了活动对象，THIS指针才能确定

## 全局对象

- 全局对象`this`指向本身

```js

var a=1;//声明绑定变量对象，但在全局环境中，变量对象就是全局对象
this.b=2;//this绑定全局对象
c=3;//赋值操作 隐式绑定

```

## 点调用

- 在一个函数上下文中，`this`由函数的调用者提供，由调用函数的方式来决定指向
- 如果是函数执行，如果前面有点，那么点前面是谁`this`就是谁

```js

let obj = {
    getName(){
        console.log(this);
    }
};
obj.getName();

```

## 直接调用

- 如果没有.，this就是`window`（严格模式下是`undefined`），自执行函数中的this一般都是window

```js

let obj = {
    getName(){
        console.log(this);
    }
};
let getName = obj.getName;
getName();

```

## 绑定事件

- 给元素绑定事件的时候，绑定的方法中的this一般是元素本身

```js

container.addEventListener('click',function(){
    console.log(this);
});

```

## 箭头函数

- 箭头函数没有自己的this
- 也没有prototype
- 也没有arguments
- 无法创建箭头函数的实例

```js

let fn = () => {
    console.log(this);
    console.log(arguments);//Uncaught ReferenceError: arguments is not defined
}
console.log(fn.prototype);//undefined
fn();
new fn();//VM4416:8 Uncaught TypeError: fn is not a constructor

```

## 构造函数

- 构造函数中的THIS是当前类的实例

```js

function fn(){

}
let obj = new fn();

```

## 绑定规则

**优先级**

> new绑定优先级 > 显示绑定优先级 > 隐式绑定优先级 > 默认绑定优先级

- 默认绑定
  
全局环境中定义函数，内部使用this关键字

- 隐式绑定

函数还可以作为某个对象的方法调用，这时this就指这个上级对象

- 显示绑定

`apply`,`call`,`bind`是函数的一个方法，作用是改变函数的调用对象。它的第一个参数就表示改变后调用这个函数的对象。因此，这时this指向的就是这第一个参数

- new 绑定

通过构建函数new关键字生成一个实例对象，此时this指向这个实例对象


