









//********************************************************






window.onkeydown = function (event) {
    switch(event.keyCode){
        case 32://space
            if(curLevel==0){
                gg++;
            if(gg>1)  gg-=2;
            drawTriangle();
            } 
            break;

        case 13://enter
            if(curLevel==0){
                var text1="你能喜欢就好⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄",
                    text2="谢谢喜欢，小仙女们知道啦。BUFF给你❤",
                    text3="别信小字，我们仙女是不会觉得难的。",
                    text4="你也觉得很棒吗？其实我们也觉得很酷……",
                    text5="有点不好意思了，比心（づ￣3￣）づ╭❤～",
                    text6="好了好了仙女知道了，还玩不玩游戏了啊？";
                if(gg){
                    ++alas;
                    ctx.clearRect(30,400,canvas.width,55);
                    if(alas>5){
                        ctx.fillText(text6,35,450);
                    }
                    else if(alas == 1){
                        ctx.fillText(text1,135,450);
                    }

                    else if(alas == 2){
                        ctx.fillText(text2,40,450);
                    }
                    else if(alas == 3){
                        ctx.fillText(text3,60,450);
                    }
                    else if(alas == 4){
                        ctx.fillText(text4,40,450);
                    }
                    else if(alas == 5){
                        ctx.fillText(text5,30,450);
                    }
                }
                else{

                    //清屏
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    //此处写跳转
                    nextLevel(1);
                    StartBgm.pause();
                    music();
                    if(requestID==0) requestNextAnimationFrame(upDate);

                }
        }
            

        case 38:
        case 87: //up
            if(curLevel==1)
            {
                if(maps[myPeople1.x/35][myPeople1.y/35-1]==1 ||
                    maps[myPeople1.x/35][myPeople1.y/35-1]==5 ||
                    myPeople1.y-35<0)
                {
                    console.log(myPeople1);
                    return;
                }

                else if(maps[myPeople1.x/35][myPeople1.y/35-1]==2)
                {
                    console.log("eat!")
                    score();
                    flag = 0;
                    myPeople1.y -= myPeople1.step;
                    maps[myPeople1.x/35][myPeople1.y/35]=0;
                    ctx.drawImage(up,myPeople1.x,myPeople1.y,w,h);
                    numberOfStar1 ++;


                }

                else
                {
                    console.log("success up!")
                    myPeople1.y -= myPeople1.step;
                    flag = 0;
                    ctx.drawImage(up,myPeople1.x,myPeople1.y,w,h);
                }

                break;

            }

            if(curLevel==2)
            {
                if(maps2[myPeople1.x/35][myPeople1.y/35-1]==1 ||
                    maps2[myPeople1.x/35][myPeople1.y/35-1]==5 ||
                    myPeople1.y-35<0)
                {
                    console.log(myPeople1);
                    return;
                }

                else if(maps2[myPeople1.x/35][myPeople1.y/35-1]==2)
                {
                    console.log("eat!")
                     score();
                    flag = 0;

                    myPeople1.y -= myPeople1.step;
                    maps2[myPeople1.x/35][myPeople1.y/35]=0;
                    ctx.drawImage(up,myPeople1.x,myPeople1.y,w,h);
                    numberOfStar2 ++;
                    console.log(numberOfStar2);


                }

                else
                {
                    console.log("success up!")
                    myPeople1.y -= myPeople1.step;
                    flag = 0;
                    ctx.drawImage(up,myPeople1.x,myPeople1.y,w,h);
                }

                break;

            }

            if(curLevel==3)
            {
                if(maps3[myPeople1.x/35][myPeople1.y/35-1]==1 ||
                    maps3[myPeople1.x/35][myPeople1.y/35-1]==5 ||
                    myPeople1.y-35<0)
                {
                    console.log(myPeople1);
                    return;
                }

                else if(maps3[myPeople1.x/35][myPeople1.y/35-1]==2)
                {
                    console.log("eat!")
                     score();

                    flag = 0;
                    myPeople1.y -= myPeople1.step;
                    maps3[myPeople1.x/35][myPeople1.y/35]=0;
                    ctx.drawImage(up,myPeople1.x,myPeople1.y,w,h);
                    numberOfStar3++;
                    console.log(numberOfStar3);

                }

                else
                {
                    console.log("success up!")
                    myPeople1.y -= myPeople1.step;
                    flag = 0;
                    ctx.drawImage(up,myPeople1.x,myPeople1.y,w,h);
                }

                break;

            }



        case 40:
        case 83: //down
            if(curLevel==1)
            {
                console.log(myPeople1);
                if(maps[myPeople1.x/35][myPeople1.y/35+1]==1 ||
                    maps[myPeople1.x/35][myPeople1.y/35+1]==5 ||
                    myPeople1.y+35==630)
                {
                    return;

                }

                else if( maps[myPeople1.x/35][myPeople1.y/35+1]==2 )
                {
                    console.log("eat!")
                     score();
                    flag = 1;

                    myPeople1.y += myPeople1.step;
                    ctx.drawImage(down,myPeople1.x,myPeople1.y,w,h);
                    maps[myPeople1.x/35][myPeople1.y/35]=0;
                    numberOfStar1++;
                    console.log(numberOfStar1);
                }

                else
                {
                    myPeople1.y += myPeople1.step;
                    flag = 1;
                    ctx.drawImage(down,myPeople1.x,myPeople1.y,w,h);
                }
                break;

            }
            if(curLevel==2)
            {
                console.log(myPeople1);
                if(maps2[myPeople1.x/35][myPeople1.y/35+1]==1 ||
                    maps2[myPeople1.x/35][myPeople1.y/35+1]==5 ||
                    myPeople1.y+35==630)
                {
                    return;

                }

                else if( maps2[myPeople1.x/35][myPeople1.y/35+1]==2 )
                {
                    console.log("eat!")
                     score();
                    flag = 1;

                    myPeople1.y += myPeople1.step;
                    ctx.drawImage(down,myPeople1.x,myPeople1.y,w,h);
                    maps2[myPeople1.x/35][myPeople1.y/35]=0;
                    numberOfStar2++;
                    console.log(numberOfStar2);
                }

                else
                {
                    myPeople1.y += myPeople1.step;
                    flag = 1;
                    ctx.drawImage(down,myPeople1.x,myPeople1.y,w,h);
                }
                break;

            }
            if(curLevel==3)
            {
                console.log(myPeople1);
                if(maps3[myPeople1.x/35][myPeople1.y/35+1]==1 ||
                    maps3[myPeople1.x/35][myPeople1.y/35+1]==5 ||
                    myPeople1.y+35==630)
                {
                    return;

                }

                else if( maps3[myPeople1.x/35][myPeople1.y/35+1]==2 )
                {
                    console.log("eat!")
                     score();
                    flag = 1;

                    myPeople1.y += myPeople1.step;
                    ctx.drawImage(down,myPeople1.x,myPeople1.y,w,h);
                    maps3[myPeople1.x/35][myPeople1.y/35]=0;
                    numberOfStar3++;
                    console.log(numberOfStar3);
                }

                else
                {
                    myPeople1.y += myPeople1.step;
                    flag = 1;
                    ctx.drawImage(down,myPeople1.x,myPeople1.y,w,h);
                }
                break;

            }


        case 37:
        case 65: //left
            if(curLevel==1)
            {
                if(maps[myPeople1.x/35-1][myPeople1.y/35]==1 ||
                    maps[myPeople1.x/35-1][myPeople1.y/35]==5 ||
                    myPeople1.x-35==-35)
                {
                    return;
                }
                else if( maps[myPeople1.x/35-1][myPeople1.y/35]==2)
                {
                    flag = 2;
                    console.log("eat!")
                     score();

                    myPeople1.x -= myPeople1.step;
                    ctx.drawImage(left,myPeople1.x,myPeople1.y,w,h);
                    maps[myPeople1.x/35][myPeople1.y/35]=0;
                    numberOfStar1++;
                    console.log(numberOfStar1);

                }

                else
                {

                    flag = 2;
                    myPeople1.x -= myPeople1.step;
                    ctx.drawImage(left,myPeople1.x,myPeople1.y,w,h);
                }
                break;
            }

            if(curLevel==2)
            {
                if(maps2[myPeople1.x/35-1][myPeople1.y/35]==1 ||
                    maps2[myPeople1.x/35-1][myPeople1.y/35]==5 ||
                    myPeople1.x-35==-35)
                {
                    return;
                }
                else if( maps2[myPeople1.x/35-1][myPeople1.y/35]==2)
                {
                    flag = 2;
                    console.log("eat!")
                     score();

                    myPeople1.x -= myPeople1.step;
                    ctx.drawImage(left,myPeople1.x,myPeople1.y,w,h);
                    maps2[myPeople1.x/35][myPeople1.y/35]=0;
                    numberOfStar2++;
                    console.log(numberOfStar2);

                }

                else
                {

                    flag = 2;
                    myPeople1.x -= myPeople1.step;
                    ctx.drawImage(left,myPeople1.x,myPeople1.y,w,h);
                }
                break;
            }
            if(curLevel==3)
            {
                if(maps3[myPeople1.x/35-1][myPeople1.y/35]==1 ||
                    maps3[myPeople1.x/35-1][myPeople1.y/35]==5 ||
                    myPeople1.x-35==-35)
                {
                    return;
                }
                else if( maps3[myPeople1.x/35-1][myPeople1.y/35]==2)
                {
                    flag = 2;
                    console.log("eat!")
                     score();

                    myPeople1.x -= myPeople1.step;
                    ctx.drawImage(left,myPeople1.x,myPeople1.y,w,h);
                    maps3[myPeople1.x/35][myPeople1.y/35]=0;
                    numberOfStar3++;
                    console.log(numberOfStar3);

                }

                else
                {

                    flag = 2;
                    myPeople1.x -= myPeople1.step;
                    ctx.drawImage(left,myPeople1.x,myPeople1.y,w,h);
                }
                break;
            }


        case 39:
        case 68: //right
            if(curLevel==1)
            {
                console.log(myPeople1);
                if(maps[myPeople1.x/35+1][myPeople1.y/35]==1 ||
                    maps[myPeople1.x/35+1][myPeople1.y/35]==5 ||
                    myPeople1.x+35==630)

                {
                    return;
                }
                else if(maps[myPeople1.x/35+1][myPeople1.y/35]==2)
                {
                    console.log("eat!")
                     score();
                    flag = 3;

                    myPeople1.x += myPeople1.step;
                    ctx.drawImage(right,myPeople1.x,myPeople1.y,w,h);
                    maps[myPeople1.x/35][myPeople1.y/35]=0;
                    numberOfStar1++;
                    console.log(numberOfStar1);
                }
                else
                {
                    myPeople1.x += myPeople1.step;
                    flag = 3;
                    ctx.drawImage(right,myPeople1.x,myPeople1.y,w,h);
                }
                break;

            }

            if(curLevel==2)
            {
                console.log(myPeople1);
                if(maps2[myPeople1.x/35+1][myPeople1.y/35]==1 ||
                    maps2[myPeople1.x/35+1][myPeople1.y/35]==5 ||
                    myPeople1.x+35==630)

                {
                    return;
                }
                else if(maps2[myPeople1.x/35+1][myPeople1.y/35]==2)
                {
                    console.log("eat!")
                     score();
                    flag = 3;

                    myPeople1.x += myPeople1.step;
                    ctx.drawImage(right,myPeople1.x,myPeople1.y,w,h);
                    maps2[myPeople1.x/35][myPeople1.y/35]=0;
                    numberOfStar2++;
                    console.log(numberOfStar2);
                }
                else
                {
                    myPeople1.x += myPeople1.step;
                    flag = 3;
                    ctx.drawImage(right,myPeople1.x,myPeople1.y,w,h);
                }
                break;

            }

            if(curLevel==3)
            {
                console.log(myPeople1);
                if(maps3[myPeople1.x/35+1][myPeople1.y/35]==1 ||
                    maps3[myPeople1.x/35+1][myPeople1.y/35]==5 ||
                    myPeople1.x+35==630)

                {
                    return;
                }
                else if(maps3[myPeople1.x/35+1][myPeople1.y/35]==2)
                {
                    console.log("eat!")
                     score();
                    flag = 3;
                    myPeople1.x += myPeople1.step;
                    ctx.drawImage(right,myPeople1.x,myPeople1.y,w,h);
                    maps3[myPeople1.x/35][myPeople1.y/35]=0;
                    numberOfStar3++;
                    console.log(numberOfStar3);
                }
                else
                {
                    myPeople1.x += myPeople1.step;
                    flag = 3;
                    ctx.drawImage(right,myPeople1.x,myPeople1.y,w,h);
                }
                break;

            }

    }

};



function MonsterMoves(curMonster){
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    // ctx.drawImage(bg,0,0,canvas.width,canvas.height);

    //(6,0)起点
    if(curMonster==1)
    {
        if(i%2==0){
            ctx.drawImage(D1,monster1.x,monster1.y);
            monster1.x+=step;
        }
        else{
            ctx.drawImage(D1L,monster1.x,monster1.y);
            monster1.x-=step;
        }
        if(monster1.x>3*w){
            i+=1;
        }
        if(monster1.x<0){
            i-=1;
        }


        if(j%2==0){
            ctx.drawImage(D2,monster2.x,monster2.y);
            monster2.x-=step;
        }
        else{
            ctx.drawImage(D2R,monster2.x,monster2.y);
            monster2.x+=step;
        }
        if(monster2.x<=w*3){
            j+=1;
        }
        if(monster2.x>=8*w){
            j-=1;
        }




        if(k%2==0){
            ctx.drawImage(D3L,monster3.x,monster3.y);
            monster3.x-=step;
        }
        else{
            ctx.drawImage(D3R,monster3.x,monster3.y);
            monster3.x+=step;
        }
        if(monster3.x>=w*14){
            k+=1;
        }
        if(monster3.x<=17*w){
            k-=1;
        }



        if(monster4.x<=4*w&&monster4.y==5*w)
            z=1;
        if(monster4.y>=11*w&&monster4.x==4*w)
            z=2;
        if(monster4.x>=11*w&&monster4.y==11*w)
            z=3;
        if(monster4.y<=5*w&&monster4.x==11*w)
            z=4;
        if(z==3)
        {monster4.x-=step;
            ctx.drawImage(D4L,monster4.x,monster4.y);
        }
        if(z==4){
            monster4.y+=step;
            ctx.drawImage(D4D,monster4.x,monster4.y);

        }
        if(z==1){
            monster4.x+=step;
            ctx.drawImage(D4R,monster4.x,monster4.y);

        }
        if(z==2){
            monster4.y-=step;
            ctx.drawImage(D4U,monster4.x,monster4.y);

        }
        IfLoseLife();
    }

    else if(curMonster==2)
    {
        if(i2%2==0){
            ctx.drawImage(DD,monster21.x,monster21.y);
            monster21.y+=step;
        }
        else{
            ctx.drawImage(DU,monster21.x,monster21.y);
            monster21.y-=step;
        }
        if(monster21.y>16*w){
            i2+=1;
        }
        if(monster21.y<4*w){
            i2-=1;
        }


        if(j2%2==0){
            ctx.drawImage(DU,monster22.x,monster22.y);
            monster22.y-=step;
        }
        else{
            ctx.drawImage(DD,monster22.x,monster22.y);
            monster22.y+=step;
        }
        if(monster22.y>=w*0){
            j2+=1;
        }
        if(monster22.y<=3*w){
            j2-=1;
        }




        if(k2%2==0){
            ctx.drawImage(DU,monster23.x,monster23.y);
            monster23.y-=step;
        }
        else{
            ctx.drawImage(DD,monster23.x,monster23.y);
            monster23.y+=step;
        }
        if(monster23.y>=w*1){
            k2+=1;
        }
        if(monster23.y<=17*w){
            k2-=1;
        }



        if(monster24.x<=2*w&&monster24.y==9*w)
            z2=1;
        if(monster24.y>=13*w&&monster24.x==2*w)
            z2=2;
        if(monster24.x>=4*w&&monster24.y==13*w)
            z2=3;
        if(monster24.y<=9*w&&monster24.x==4*w)
            z2=4;
        if(z2==3)
        {monster24.x-=step;
            ctx.drawImage(DL,monster24.x,monster24.y);
        }
        if(z2==4){
            monster24.y+=step;
            ctx.drawImage(DD,monster24.x,monster24.y);
        }
        if(z2==1){
            monster24.x+=step;
            ctx.drawImage(DR,monster24.x,monster24.y);

        }
        if(z2==2){
            monster24.y-=step;
            ctx.drawImage(DU,monster24.x,monster24.y);

        }

        if(l2%2==0){
            ctx.drawImage(DU,monster25.x,monster25.y);
            monster25.y-=step;
        }
        else{
            ctx.drawImage(DD,monster25.x,monster25.y);
            monster25.y+=step;
        }
        if(monster25.y>=w*11){
            l2+=1;
        }
        if(monster25.y<=17*w){
            l2-=1;
        }

        if(h2%2==0){
            ctx.drawImage(DU,monster26.x,monster26.y);
            monster26.y-=step;
        }
        else{
            ctx.drawImage(DD,monster26.x,monster26.y);
            monster26.y+=step;
        }
        if(monster26.y>=w*11){
            h2+=1;
        }
        if(monster26.y<=17*w){
            h2-=1;
        }


        if(g2%2==0){
            ctx.drawImage(DL,monster27.x,monster27.y);
            monster27.x-=step;
        }
        else{
            ctx.drawImage(DR,monster27.x,monster27.y);
            monster27.x+=step;
        }
        if(monster27.x<=w*16){
            g2-=1;
        }
        if(monster27.x>=13*w){
            g2+=1;
        }
        IfLoseLife2();
    }



    else if(curMonster==3)
    {
        if(i3%2==0){
            ctx.drawImage(DD,monster31.x,monster31.y);
            monster31.y+=step;
        }
        else{
            ctx.drawImage(DU,monster31.x,monster31.y);
            monster31.y-=step;
        }
        if(monster31.y>=9*w){
            i3+=1;
        }
        if(monster31.y<=6*w){
            i3-=1;
        }

//************************************************
        if(j3%2==0){
            ctx.drawImage(DL,monster32.x,monster32.y);
            monster32.x-=step;
        }
        else{
            ctx.drawImage(DR,monster32.x,monster32.y);
            monster32.x+=step;
        }
        if(monster32.x<=w*3){
            j3-=1;
        }
        if(monster32.x>=2*w){
            j3+=1;
        }

        if(monster33.x<=5*w&&monster33.y==2*w)
            z3=1;
        if(monster33.y>=3*w&&monster33.x==5*w)
            z3=2;
        if(monster33.x>=6*w&&monster33.y==3*w)
            z3=3;
        if(monster33.y<=2*w&&monster33.x==6*w)
            z3=4;
        if(z3==3)
        {monster33.x-=step;
            ctx.drawImage(DL,monster33.x,monster33.y);
        }
        if(z3==4){
            monster33.y+=step;
            ctx.drawImage(DD,monster33.x,monster33.y);
        }
        if(z3==1){
            monster33.x+=step;
            ctx.drawImage(DR,monster33.x,monster33.y);

        }
        if(z3==2){
            monster33.y-=step;
            ctx.drawImage(DU,monster33.x,monster33.y);

        }

//

        ctx.drawImage(DD,monster34.x,monster34.y);


//
        if(l3%2==0){
            ctx.drawImage(DD,monster35.x,monster35.y);
            monster35.y+=step;
        }
        else{
            ctx.drawImage(DU,monster35.x,monster35.y);
            monster35.y-=step;
        }
        if(monster35.y<=9*w){
            l3+=1;
        }
        if(monster35.y>=5*w){
            l3-=1;
        }
//

        if(h3%2==0){
            ctx.drawImage(DU,monster36.x,monster36.y);
            monster36.y-=step;
        }
        else{
            ctx.drawImage(DD,monster36.x,monster36.y);
            monster36.y+=step;
        }
        if(monster36.y>=w*8){
            h3+=1;
        }
        if(monster36.y<=9*w){
            h3-=1;
        }

//
        if(g3%2==0){
            ctx.drawImage(DU,monster37.x,monster37.y);
            monster37.y-=step;
        }
        else{
            ctx.drawImage(DD,monster37.x,monster37.y);
            monster37.y+=step;
        }
        if(monster37.y<=w*17){
            g3-=1;
        }
        if(monster37.y>=15*w){
            g3+=1;
        }

//
        if(monster38.x<=9*w&&monster38.y==12*w)
            n3=1;
        if(monster38.y>=15*w&&monster38.x==9*w)
            n3=2;
        if(monster38.x>=14*w&&monster38.y==15*w)
            n3=3;
        if(monster38.y<=12*w&&monster38.x==14*w)
            n3=4;
        if(n3==3)
        {monster38.x-=step;
            ctx.drawImage(DL,monster38.x,monster38.y);
        }
        if(n3==4){
            monster38.y+=step;
            ctx.drawImage(DD,monster38.x,monster38.y);
        }
        if(n3==1){
            monster38.x+=step;
            ctx.drawImage(DR,monster38.x,monster38.y);

        }
        if(n3==2){
            monster38.y-=step;
            ctx.drawImage(DU,monster38.x,monster38.y);

        }

        ctx.drawImage(DD,monster39.x,monster39.y);

//
        if(monster310.x<=15*w&&monster310.y==0*w)
            m3=1;
        if(monster310.y>=2*w&&monster310.x==15*w)
            m3=2;
        if(monster310.x>=17*w&&monster310.y==2*w)
            m3=3;
        if(monster310.y<=0*w&&monster310.x==17*w)
            m3=4;
        if(m3==3)
        {monster310.x-=step;
            ctx.drawImage(DL,monster310.x,monster310.y);
        }
        if(m3==4){
            monster310.y+=step;
            ctx.drawImage(DD,monster310.x,monster310.y);
        }
        if(m3==1){
            monster310.x+=step;
            ctx.drawImage(DR,monster310.x,monster310.y);

        }
        if(m3==2){
            monster310.y-=step;
            ctx.drawImage(DU,monster310.x,monster310.y);

        }
        IfLoseLife3();

    }



}




function upDate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(isPass()&&iCurlevel<3)
    {
        setTimeout(function () {
            alert("恭喜过关！！");
            clearInterval(timer);
        },0);
        nextLevel(1);
    }
    if(isPass()&&iCurlevel==3)
    {
        nextLevel(1);
        console.log("pass ALl!")
        clearInterval(timer);


    }
    showMessage();
    drawBg(curBg);
    drawMap(curMap);
    MonsterMoves(curMonster);



    ctx.drawImage(down,myPeople1.x,myPeople1.y,w,h);
    switch (flag){
        case 0:
            ctx.drawImage(up,myPeople1.x,myPeople1.y,w,h);
            break;
        case 1:
            ctx.drawImage(down,myPeople1.x,myPeople1.y,w,h);
            break;
        case 2:
            ctx.drawImage(left,myPeople1.x,myPeople1.y,w,h);
            break;
        case 3:
            ctx.drawImage(right,myPeople1.x,myPeople1.y,w,h);
            break;
    }
    if(requestID==0){
        requestNextAnimationFrame(upDate);

    }


}





//*************************************************************

  // requestAnimationFrame(upDate);

  ctx.drawImage(right,myPeople1.x,myPeople1.y,w,h);











