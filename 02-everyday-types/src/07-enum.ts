//枚举 列出所有可能情况
enum Gender{
    male = 0,
    female = 1
}

let i: {name:string, gender: Gender}
i = {
    name: 'tomato',
    gender: Gender.male
}

//& 表示同时
let j: {name: string} & {age: number}
j = {name: 'tomato', age: 18}


//类型的别名
type myType = 1| 2| 3| 4
let m: myType