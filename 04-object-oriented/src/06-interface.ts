//一、接口 用来定义一个类（对象）的结构，可以当成类型声明去使用，可重复声明
//二、接口中的所有属性都不能有实际的值，只定义对象的结构，不考虑实际的值
//作用：定义规范，对类的限制
(function(){
//一、
    // interface myInterface{
    //     name: string;
    //     age: number;
    // }

    // interface myInterface{
    //     gender: string;
    // }

    // const obj: myInterface = {
    //     name: 'tmt',
    //     age: 45,
    //     gender: 'male'
    // }
    
//二、
    interface myInter{
        name: string;
        sayHello():void;
    }

    class MyClass implements myInter{
        name: string;

        constructor(name: string){
            this.name = name;
        }

        sayHello(): void {
            console.log('456')
        }
        
    }
})();