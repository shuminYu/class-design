var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var msg = document.getElementById("msg");
var head = document.getElementById("head");
var goal = document.getElementById("goal");
var numberStar = document.getElementById("numberStar");
var numberLife = document.getElementById("numberLife");


//bgm
var star=document.getElementById("star");
var boom=document.getElementById("crash");
var bg1=document.getElementById("bg1");
var YouDie=document.getElementById("YouDie");
var YouWin=document.getElementById("YouWin");
var StartBgm=document.getElementById("Start");



var offcanvasBG = document.createElement("canvas");
offcanvasBG.width = canvas.width;
offcanvasBG.height = canvas.height;
var offctxBG = offcanvasBG.getContext("2d");



//***************************************************************************8

function time (){
        count=5;
        console.log(1)
        head.innerHTML= "⏲️：" + count;

        timer = setInterval(function () {
            if (count > 0) {
                count = count - 1;
                head.innerHTML = "⏲️：" + count;
            }
            else if(count==0)
            {
                count = 0;
                head.innerHTML = "⏲️：" + count;
                // alert("Game Over!");
                //Game Over界面
                //ctx.apply();
                requestID=1;
                YouDie.play();
                bg1.pause();
                ctx.clearRect(0,0,canvas.width,canvas.height);
                console.log("time over");
                ctx.drawImage(gameOver,0,0);


            }
            else{
                clearInterval(timer);

                //********************************
            }
        }, 1000);




}





function isPass()
{
    if(iCurlevel==1&&numberOfStar1==goal1) return true;
    else if (iCurlevel==2&&numberOfStar2==goal2) return true;
    else if (iCurlevel==3&&numberOfStar3==goal3) return true;
    else return false;

}

function nextLevel(value)
{
        myPeople1.x = 420;
        myPeople1.y = 245;
        if(iCurlevel<3)
        {
            iCurlevel = iCurlevel + value;
            curLevel = curLevel + value;
            curMap = curMap + value;
            curBg = curBg + value;
            curMonster = curMonster + value;
            curCrash += value;
            time();
        }
        else
        {
            musicDown();
            YouWin.play();
            setTimeout(function () {
                //转到胜利界面；
                //alert("victory!");
                // ctx.apply();
                requestID=1;
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.drawImage(victory,0,0);
                console.log("victory!");

            },0);
        }


}



function showMessage()
{
    if(iCurlevel>0){
        msg.innerText = "第" + iCurlevel  + "关！"
    }

    if(iCurlevel==1)
    {
        goal.innerHTML = "🌟 X " + goal1 ;
        numberStar.innerHTML = "🌟" + numberOfStar1;
        numberLife.innerHTML = "❤️ X " + numberLife1;
    }
    if(iCurlevel==2)
    {
        goal.innerHTML =  "🌟 X " + goal2;
        numberStar.innerHTML = "🌟" + numberOfStar2;
        numberLife.innerHTML = "❤️ X " + numberLife2;

    }
    if(iCurlevel==3)
    {
        goal.innerHTML = "🌟 X " + goal3 ;
        numberStar.innerHTML = "🌟" + numberOfStar3;
        numberLife.innerHTML = "❤️ X " + numberLife3;

    }

}




//***************************************************************************8
