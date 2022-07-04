//一般函数 属性值不能多样
// class Dog{
//     name = '旺财';
//     age = 3;

//     bark(){
//         alert('wangwangwang');
//     }
// }

class Dog{
    name: string;
    age: number;

    //构造函数
    constructor(name: string, age: number){
        //this表示当前实例
        //在构造函数中当前对象就是当前新建的那个对象，可以通过this向新建的对象添加属性
        this.name = name;
        this.age = age;
    }

    bark(){
        console.log(this.name)
    }
}

const dog = new Dog('小白',4);
console.log(dog);

