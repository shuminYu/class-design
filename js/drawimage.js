



//*************************************************************






//绘制背景
function drawBg(curBg){
    if (curBg==1)
    {
         ctx.drawImage(bg,0,0,canvas.width,canvas.height);
    }

    else if(curBg==2)
    {
        ctx.drawImage(bg2,0,0,canvas.width,canvas.height);
    }

    else if (curBg==3)
    {
        ctx.drawImage(bg3,0,0,canvas.width,canvas.height);

    }

}






//绘制地图
function drawMap(curMap){
    if(curMap==1)
    {
        for(var i=0;i<18;i++)
        {
            for(var j=0;j<18;j++)
            {

                switch (maps[i][j])
                {
                    case 1://绘制墙壁--1
                        ctx.drawImage(wall,w*i,h*j,w,h);

                        break;

                    case 2://可eat--2
                        ctx.drawImage(destroy,w*i,h*j,w,h);
                        break;


                    case 5://可墙壁--5
                        ctx.drawImage(destroy2,w*i,h*j,w,h);
                        break;

                }
            }
        }

    }

    if(curMap==2)
    {
        for(var i=0;i<18;i++)
        {
            for(var j=0;j<18;j++)
            {

                switch (maps2[i][j])
                {
                    case 1://绘制墙壁--1
                        ctx.drawImage(wall2,w*i,h*j,w,h);
                        break;

                    case 2://可eat--2
                        ctx.drawImage(eat2,w*i,h*j,w,h);
                        break;

                    case 5://墙壁--5
                        ctx.drawImage(block2,w*i,h*j,w,h);
                        break;

                }
            }
        }

    }
    if(curMap==3)
    {
        for(var i=0;i<18;i++)
        {
            for(var j=0;j<18;j++)
            {

                switch (maps3[i][j])
                {
                    case 1://绘制墙壁--1
                        ctx.drawImage(wall3,w*i,h*j,w,h);
                        break;

                    case 2://可eat--2
                        ctx.drawImage(eat3,w*i,h*j,w,h);
                        break;


                    case 5://墙壁2--5
                        ctx.drawImage(block3,w*i,h*j,w,h);
                        break;

                }
            }
        }

    }
}






//**************************************************************

