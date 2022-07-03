"use strict";
//枚举 列出所有可能情况
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
let i;
i = {
    name: 'tomato',
    gender: Gender.male
};
//& 表示同时
let j;
j = { name: 'tomato', age: 18 };
let m;
