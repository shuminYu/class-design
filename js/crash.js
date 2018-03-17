function isCrash(obj1,obj2,curCrash){
    var x1=obj1.x;
    var y1=obj1.y;
    var x2=obj2.x;
    var y2=obj2.y;
    if(curCrash==1){
        if(x1+2.5==x2&&y1==y2){
            return 1;
        }
    }
    if(curCrash==2){
        if((x1+2.5==x2&&y1==y2)||(x1==x2&&y1==y2)){
            return 1;
        }
    }

    if(curCrash==3){
        if((x1+2.5==x2&&y1==y2)||(x1==x2&&y1==y2)){
            return 1;
        }
    }

}
function IfLoseLife(){
    var flag=[];
    flag[0]=isCrash(myPeople1,monster1,curCrash);
    flag[1]=isCrash(myPeople1,monster2,curCrash);
    flag[2]=isCrash(myPeople1,monster3,curCrash);
    flag[3]=isCrash(myPeople1,monster4,curCrash);
    for(var i in flag){
        if(flag[i]==1){
            numberLife1--;

        }

        if(numberLife1<=0){
            ctx.font="Arial 100px";
            ctx.fillStyle="red";
            musicDown();
            // lowerBgm();
            ctx.fillText("GAME OVER!",200,200);
            numberLife1=0;
            // alert("Game Over!!");
            bg1.pause();
            YouDie.play();
            requestID =1;
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.drawImage(gameOver,0,0);
            //跳转到Game Over界面
            break;
        }
    }

}

function IfLoseLife2() {
    var flag = [];
    flag[0] = isCrash(myPeople1, monster21,curCrash);
    flag[1] = isCrash(myPeople1, monster22,curCrash);
    flag[2] = isCrash(myPeople1, monster23,curCrash);
    flag[3] = isCrash(myPeople1, monster24,curCrash);
    flag[4] = isCrash(myPeople1, monster25,curCrash);
    flag[5] = isCrash(myPeople1, monster26,curCrash);
    flag[6] = isCrash(myPeople1, monster27,curCrash);
    for (var i in flag) {
        if (flag[i] == 1){
            numberLife2--;
        }
        if (numberLife2 == 0) {
            ctx.font = "Arial 100px";
            ctx.fillStyle = "red";
            musicDown();
            //lowerBgm();
            ctx.fillText("GAME OVER!", 200, 200);
            // alert("Game Over!!");
            //跳转到Game Over界面
            bg1.pause();
            YouDie.play();
            requestID =1;
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.drawImage(gameOver,0,0);
            break;
        }
    }
}

function IfLoseLife3() {
    var flag = [];
    flag[0] = isCrash(myPeople1, monster31,curCrash);
    flag[1] = isCrash(myPeople1, monster32,curCrash);
    flag[2] = isCrash(myPeople1, monster33,curCrash);
    flag[3] = isCrash(myPeople1, monster34,curCrash);
    flag[4] = isCrash(myPeople1, monster35,curCrash);
    flag[5] = isCrash(myPeople1, monster36,curCrash);
    flag[6] = isCrash(myPeople1, monster37,curCrash);
    flag[7] = isCrash(myPeople1, monster38,curCrash);
    flag[8] = isCrash(myPeople1, monster39,curCrash);
    flag[9] = isCrash(myPeople1, monster310,curCrash);
    for (var i in flag) {
        if (flag[i] == 1){
            numberLife3--;
        }
        if (numberLife3 == 0) {
            ctx.font = "Arial 100px";
            ctx.fillStyle = "red";
            musicDown();
            //lowerBgm();
            ctx.fillText("GAME OVER!", 200, 200);
            // alert("Game Over!!");
            //跳转到Game Over界面
            bg1.pause();
            YouDie.play();
            requestID =1;
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.drawImage(gameOver,0,0);
            break;
        }
    }
}