"use strict";
function printCoord(pt) {
    console.log('坐标的x值为：' + pt.x);
    console.log('坐标的y值为：' + pt.y);
}
printCoord({ x: 3, y: 7 });
//last? 表示可选不传值
function printName(obj) {
    var _a;
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ first: '番', last: '车' });
