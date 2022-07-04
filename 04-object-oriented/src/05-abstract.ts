//abstract 抽象类 不能创建对象，专门用来被继承的类，可以添加抽象方法
(function(){
    //定义Animal类
    abstract class Animal{
        name: string;
    
        //构造函数
        constructor(name: string){
            this.name = name;
        }
    
        //定义一个抽象方法，没有方法体，只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract say():void;
    }

    class Dog extends Animal{
        say(){
            console.log('123')
        }
    }

    //实例化对象
    const dog = new Dog('wang');
})();