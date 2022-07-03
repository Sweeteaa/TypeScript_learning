//括号内为参数类型注释，括号外为返回值类型注释
//需要显示定义name，不能为any类型
function greet(name: string){
    console.log("Hello, " + name.toUpperCase() + '!!')
}

// greet(18) //类型错误 报错
greet('tomato')

//定义返回值类型为number，通常不需要定义返回类型
function getNumber(): number{
    return 30
}

//匿名函数 没有定义类型，ts也会使用forEach函数的类型以及数组的这个字符串的类型来推断s的类型——上下文类型
const names = ['1','2','3']
names.forEach((s)=>{
    console.log(s.toUpperCase())
})
