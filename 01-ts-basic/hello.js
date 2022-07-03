"use strict";
function greet(person, date) {
    console.log(`hello ${person}, today is ${date}`);
}
greet('番茄', new Date());
//解决ts和js冲突 tsc --init
//自动编译 tsc --watch
//发出错误 tsc -noEmitOnError
//降级 更改tsconfig中的target
//严格模式 三个严格检查标记：1.strict 2.noImplicitAny 3.strictNullChecks
