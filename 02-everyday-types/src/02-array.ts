//数组 type[] Array<type> type任意合法类型
//写法一
let arr: number[] = [1, 2, 3]
// arr = ['a'] //报错

//写法二
let arr2: Array<number> = [1, 2, 3]
// arr2 = ['a'] //报错

//元组 固定长度的数组
let h: [string, string]
h = ['hello', 'world']