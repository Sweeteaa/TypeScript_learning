import Food from './Food';
import ScorePanel from './scorePanel';
import Snake from './snake';

class GmaeControl{
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    direction: string = 'ArrowRight';

    //记录游戏是否结束
    isLive = true;

    constructor(){
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.food = new Food();

        this.init();
    }

    init(){
        //绑定键盘按下事件
        //this指向实例对象，而不是document
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    //创建键盘响应函数
    keydownHandler(event: KeyboardEvent){
        // console.log(event.key)
        //修改direction值，需要检查值是否合法
        this.direction = event.key;

    }

    //创建蛇移动的方法
    run(){
        let X = this.snake.X;
        let Y = this.snake.Y;

        //根据按键方向修改X、Y值
        switch(this.direction){
            case "ArrowUp": 
                Y -= 10;
                break;
            case "ArrowDown": 
                Y += 10;
                break;
            case "ArrowLeft": 
                X -= 10;
                break;
            case "ArrowRight": 
                X += 10;
                break;
        }

        this.checkEat(X, Y);

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error) {
            //进入catch说明出现了异常，游戏结束，弹出提示
            alert('GAME OVER!');
            this.isLive = false;
        }


        //开启定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level-1)*30);
    }

    //检查蛇是否吃到食物
    checkEat(X: number, Y:number){
        if(X === this.food.X && Y === this.food.Y){
            //食物位置重置
            this.food.change();
            //加分
            this.scorePanel.addScore();
            //蛇增加一节
            this.snake.addBody();
        } 
    }
}

export default GmaeControl;