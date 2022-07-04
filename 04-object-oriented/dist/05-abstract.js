"use strict";
//abstract 抽象类 不能创建对象，专门用来被继承的类，可以添加抽象方法
(function () {
    //定义Animal类
    class Animal {
        //构造函数
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        say() {
            console.log('123');
        }
    }
    //实例化对象
    const dog = new Dog('wang');
})();
