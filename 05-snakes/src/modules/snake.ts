//snake
class Snake{
    //表示蛇元素
    head: HTMLElement;
    //包括蛇头
    body: HTMLCollection;
    //获取蛇容器
    element: HTMLElement;

    constructor(){
        // const snake = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')! as HTMLElement; 
        this.body = document.getElementById('snake')!.getElementsByTagName('div');
        this.element = document.getElementById('snake')!;
    }

    //获取蛇头x,y坐标
    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }

    set X(value: number){
        if(this.X === value){
            return;
        }
        //撞墙情况
        if(value < 0 || value >290){
            throw new Error('蛇撞墙了!');
        }
        //不能掉头
        if(this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value){
            if(value > this.X){
                //说明蛇向右走，此时发生掉头，应该使蛇继续向左走
                value = this.X - 10;
            }else{
                value = this.X + 10;
            }
        } 
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }

    set Y(value: number){
        if(this.Y === value){
            return;
        }
        //撞墙情况
        if(value < 0 || value >290){
            throw new Error('蛇撞墙了!');
        }
        //不能掉头
        if(this.body[1] && (this.body[1] as HTMLElement).offsetTop === value){
            if(value > this.Y){
                value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
        } 
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

    //设置蛇增加身体方法
    addBody(){
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    //蛇身体移动的方法，后边身体设置为前边身体
    moveBody(){
        for(let i = this.body.length-1; i > 0; i--){
            let X = (this.body[i-1] as HTMLElement).offsetLeft;
            let Y = (this.body[i-1] as HTMLElement).offsetTop;

            (this.body[i] as HTMLElement).style.left = X + 'px';
            (this.body[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkHeadBody(){
        //检查头和身体是否重叠
        for(let i = 1; i < this.body.length; i++){
            let bd = this.body[i] as HTMLElement
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                //说明撞到了身体
                throw new Error('撞到了自己！');
                
            }
        }

    }
}

export default Snake;