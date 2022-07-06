//定义类
//food
class Food{
    //定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor(){
        //获取页面food元素，并赋值给element
        this.element = document.getElementById('food')!;
    }

    //功能1：获取食物x,y坐标
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }

    //功能2：食物被吃后位置改变，生成随机位置
    change(){
        let top = Math.round(Math.random() * 29) * 10;//round 向上取整
        let left = Math.round(Math.random() * 29) * 10;//round 向上取整
        this.element.style.top = top + 'px';
        this.element.style.left = left + 'px';
    }
}

export default Food;
