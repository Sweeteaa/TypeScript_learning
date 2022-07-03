function printCoord(pt: {x: number; y: number }){
    console.log('坐标的x值为：' + pt.x)
    console.log('坐标的y值为：' + pt.y)
}

printCoord({x:3, y:7})

//last? 表示可选不传值
function printName(obj: {first: string, last?: string}){
    console.log(obj.last?.toUpperCase())
}

printName({first:'番', last:'车'})