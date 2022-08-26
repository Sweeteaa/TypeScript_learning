# TypeScript_learning

**学习TypeScript记录**

## 一、TS入门
### 1、静态类型检查 & 非异常故障

### 2、生成ts对应的js文件 
`tsc name.ts`

### 3、解决ts和js冲突 
`tsc --init`

### 4、自动编译 
`tsc --watch`

### 5、发出错误 
`tsc -noEmitOnError`

### 6、降级 
更改tsconfig中的target

### 7、严格模式 
三个严格检查标记：1.strict 2.noImplicitAny 3.strictNullChecks

***

## 二、TS类型声明
### 1、三个基本类型 string number boolean
`let str: string = 'hello ts'`
`let num: number =100`
`let bool: boolean = true`

### 2、数组 & 元祖
数组——写法一
`let arr: number[] = [1, 2, 3]`

数组——写法二
`let arr2: Array<number> = [1, 2, 3]`

元组——固定长度的数组
`let h: [string, string]
h = ['hello', 'world']
`
### 3、any 
`let obj: any = {
    x: 0
}`


### 4、类型定义写法 
一般写法
`let myName = 'tomato'`
特殊写法 类型定义 变量 冒号 类型
`let myName: string = 'tomato'`

### 5、函数 
① 括号内为参数类型注释，括号外为返回值类型注释
需要显示定义name，不能为any类型
`function greet(name: string){
    console.log("Hello, " + name.toUpperCase() + '!!')
}`


② 定义返回值类型为number，通常不需要定义返回类型
`function getNumber(): number{
    return 30
}`

③ 匿名函数 没有定义类型，ts也会使用forEach函数的类型以及数组的这个字符串的类型来推断s的类型——上下文类型
`const names = ['1','2','3']`
`names.forEach((s)=>{
    console.log(s.toUpperCase())
})`


### 6、对象 
① 一般写法
`function printCoord(pt: {x: number; y: number }){
    console.log('坐标的x值为：' + pt.x)
    console.log('坐标的y值为：' + pt.y)
}`


② last? 表示可选不传值
`function printName(obj: {first: string, last?: string}){
    console.log(obj.last?.toUpperCase())
}`

### 7、枚举 列出所有可能情况
① 枚举
`enum Gender{
    male = 0,
    female = 1
}`
`let i: {name:string, gender: Gender}`
`i = {
    name: 'tomato',
    gender: Gender.male
}`

② & 表示同时
`let j: {name: string} & {age: number}`
`j = {name: 'tomato', age: 18}`


③ 类型的别名
`type myType = 1| 2| 3| 4`
`let m: myType`

***

## 四、面向对象
### 1、类
要创建对象必须要先定义类，类可以理解为对象的模型

### 2、构造函数
`constructor(name: string, age: number){
        //this表示当前实例
        //在构造函数中当前对象就是当前新建的那个对象，可以通过this向新建的对象添加属性
        this.name = name;
        this.age = age;
    }`
### 3、继承
可以在子类新增方法，若与父类方法相同则会覆盖（方法的重写）

### 4、super
当前类的父类

### 5、抽象
不能创建对象，专门用来被继承的类，可以添加抽象方法

### 6、接口
用来定义一个类（对象）的结构，可以当成类型声明去使用，可重复声明

### 7、属性的封装
对属性的修改加以条件限制

### 8、泛型
在定义函数或类时，如果遇到类型不明确就可以使用泛型
