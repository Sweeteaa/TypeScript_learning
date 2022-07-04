"use strict";
//属性的封装
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // getName(){//读取属性
        //     return this._name
        // }
        // setName(value: string){//设置属性
        //     this._name = value;
        // }
        // getAge(){
        //     return this._age
        // }
        // setAge(value: number){
        //     //判断年龄是否合法
        //     if(value >= 0){
        //         this._age = value;
        //     }
        // }
        //ts中设置getter的方法
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const per = new Person('tomato', 65);
    //属性会被任意修改
    // per.name = 'tmt';
    // per.age = 78;
    // per.setName('tmt');
    // per.setAge(54);
    per.name = 'tmt';
    per.age = 56;
    console.log(per);
})();
