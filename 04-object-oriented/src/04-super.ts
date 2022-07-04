//super 当前类的父类
(function(){
    //定义Animal类
    class Animal{
        name: string;
    
        //构造函数
        constructor(name: string){
            this.name = name;
        }
    
        say(){
            console.log('动物叫')
        }
    }

    class Dog extends Animal{
        age: number;
    
        //子类写构造函数需要调用父类构造函数
        constructor(name: string, age: number){
            super(name)
            this.age = age;
        }

        say(){
            super.say();
        }
    }

    //实例化对象
    const dog = new Dog('wang', 5);
})();