"use strict";
//继承
(function () {
    //定义Animal类
    class Animal {
        //构造函数
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        say() {
            console.log('动物叫');
        }
    }
    //使Dog、Cat继承Animal类，Animal为父类，Dog、Cat为子类
    //可以在子类新增方法，若与父类方法相同则会覆盖（方法的重写）
    class Dog extends Animal {
    }
    class Cat extends Animal {
    }
    //实例化对象
    const dog = new Dog('wang', 5);
    const cat = new Cat('miao', 8);
})();
