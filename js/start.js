if(iCurlevel===0)
{

    ctx.font="30px Microsoft Yahei";
    ctx.fillStyle="#ffffff";
 StartBgm.play();


//界面底下看起来没什么用（其实真的没用）但是会移动的装饰

    function erase(){
        ctx.clearRect(0,470,canvas.width,cute.height-5);
    }


    function drawStart(){
        ctx.save();

        cuteOffset = cuteOffset < canvas.width ?
            cuteOffset +  CUTE_V/fps : 0;

        ctx.restore();

        ctx.save();

        ctx.translate(-cuteOffset,0);

        ctx.drawImage(cute,0,470);
        ctx.drawImage(cute,cute.width,470);

        ctx.restore();

    }



    function calculateFps(now) {
        var fps = 1000 / (now - lastTime);
        lastTime = now;
        return fps;
    }


    function animate(now){
        if (now === undefined) {
            now = +new Date;
        }

        fps = calculateFps(now);

        erase();
        drawStart();

        requestNextAnimationFrame(animate);
    }



//background
    bgbackground.onload=function(){

        ctx.drawImage(bgbackground,0,0);
        ctx.drawImage(triangle,150,300);
        drawStart();

    };

    requestNextAnimationFrame(animate);



//移动的光标啦
triangle.onload=function(e){ctx.drawImage(triangle,150,300);};




//三角形光标函数
    function drawTriangle(){
        if(!gg){
            ctx.clearRect(150,360,triangle.width,triangle.height);
            ctx.drawImage(triangle,150,300);}
        else{
            ctx.clearRect(150,300,triangle.width,triangle.height);
            ctx.drawImage(triangle,150,360);}
    }




}