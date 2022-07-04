//使用class关键字来定义一个类
//静态属性（static）：不需要定义对象就可以访问的属性；直接定义的属性是实例属性，需要通过对象的实例去访问
//readonly 只读
//静态方法（static）：不需要实例对象就可以直接调用类方法
class Person{
    //属性
    name: string = 'tomato';
    age: number = 54;

    //方法
    sayHello(){
        console.log('hello');
    }
}

const per = new Person();
per.sayHello();
