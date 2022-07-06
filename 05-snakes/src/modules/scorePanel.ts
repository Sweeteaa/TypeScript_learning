//scorepanel
class ScorePanel{
    score = 0;
    level = 1;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxlevel: number;
    upScore: number;

    constructor(maxlevel: number = 10, upScore: number = 10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxlevel = maxlevel;
        this.upScore = upScore;
    }

    //设置加分方法
    addScore(){
        this.scoreEle.innerHTML = ++this.score + '';
        //判断分数多少
        if(this.score % this.upScore === 0){
            this.levelUp()
        }
    }

    //设置等级提升方法
    levelUp(){
        if(this.level < this.maxlevel){
            this.levelEle.innerHTML = ++this.level + '';
        }
    }

}

export default ScorePanel;