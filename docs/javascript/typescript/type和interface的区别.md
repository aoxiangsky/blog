# interface VS type

- [官方规范描述如下](https://github.com/microsoft/TypeScript/blob/main/doc/spec-ARCHIVED.md)

> - An interface can be named in an extends or implements clause, but a type alias for an object type literal cannot. 
> - 接口可以在 extends 或 implements 子句中命名，但对象类型文字的类型别名不能。
> - An interface can have multiple merged declarations, but a type alias for an object type literal cannot.
> - 一个接口可以有多个合并的声明，但对象类型文字的类型别名不能。

- 相同点

1. 两者都可以用来描述对象或函数的类型，但是语法不通
2. 两者都可以扩展，但是语法有所不通


- 不同点

1. type可以声明基本类型别名，联合类型，元组类型
2. type语句中还可以使用typeof获取实例的类型进行赋值
3. 与类型别名不同，接口可以定义多次，并将被视为单个接口(合并所有声明的成员)。
4. 类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
5. type 能使用 in 关键字生成映射类型，但 interface 不行。
