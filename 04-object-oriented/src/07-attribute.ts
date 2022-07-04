//属性的封装
(function(){

    class Person{
        //TS可以在属性前添加属性的修饰符
        //public 可以在任意位置访问
        //private 私有属性，只能在类内部进行访问，通过在类中添加方法使得私有属性可以被外部访问
        //protected 只能在当前类和当前类子类中使用
        _name: string;
        _age: number;

        constructor(name: string, age: number){
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
        get name(){
            return this._name
        }

        set name(value: string){
            this._name = value
        }

        get age(){
            return this._age
        }

        set age(value: number){
            if(value >= 0){
                this._age = value;
            }
        }

    }

    const per = new Person('tomato', 65)

    //属性会被任意修改
    // per.name = 'tmt';
    // per.age = 78;

    // per.setName('tmt');
    // per.setAge(54);

    per.name = 'tmt';
    per.age = 56;
    console.log(per);
})()