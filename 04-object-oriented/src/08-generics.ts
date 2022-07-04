//泛型
//在定义函数或类时，如果遇到类型不明确就可以使用泛型

function fn<K>(a: K): K{
    return a;
}

//可以直接调用具有泛型的函数
fn( 10 )//不指定泛型，ts可以自动对类型进行推断
fn<string>('tmt')//指定泛型

interface Inter{
    length: number;
}

//泛型T必须使Inter实现类（子类）
function fn3<T extends Inter>(a: T): number{
    return a.length
}