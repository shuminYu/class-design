//map1:
var bg = new Image();
bg.src = "image/star-bg.jpg";
var wall = new Image();
wall.src = "image/star-2.png";//1
var destroy2 = new Image();
destroy2.src = "image/star-1.png";//5
var destroy = new Image();
destroy.src = "image/star-3.png";//2

//map2:
var bg2 = new Image();
bg2.src = "image/ship-bg.jpg";
var wall2 = new Image();
wall2.src = "image/ship-2.png";//1
var block2 = new Image();
block2.src = "image/ship-1.png";//5
var eat2 = new Image();
eat2.src = "image/ship-3.png";//2

//map3:
var bg3 = new Image();
bg3.src = "image/steam-bg.jpg";
var wall3 = new Image();
wall3.src = "image/steam-2.png";//1
var block3 = new Image();
block3.src = "image/steam-1.png";//5
var eat3 = new Image();
eat3.src = "image/steam-3.png";//2

//monster
var D1=new Image();
D1.src="image/bad-right.png";
var D1L=new Image();
D1L.src="image/bad-left.png";
var D2=new Image();
D2.src="image/bad-left.png";
var D2R=new Image();
D2R.src="image/bad-right.png";
var D3R=new Image();
D3R.src="image/bad-right.png";
var D3U=new Image();
D3U.src="image/bad-up.png";
var D3D=new Image();
D3D.src="image/bad-down.png";
var D3L=new Image();
D3L.src="image/bad-left.png";
var D4R=new Image();
D4R.src="image/bad-right.png";
var D4U=new Image();
D4U.src="image/bad-up.png";
var D4D=new Image();
D4D.src="image/bad-down.png";
var D4L=new Image();
D4L.src="image/bad-left.png";

//第一关小怪物
var i=0,j=0,k=0,z=0;
var step=2.5;
var w=35;
var monster1 ={
    x:0,
    y:5*w
};
var monster2 ={
    x:8*w,
    y:1*w
};
var monster3 ={
    x:14*w,
    y:16*w
};
var monster4 ={
    x:11*w,
    y:5*w
};




//第二关小怪物
var i2=0,j2=0,k2=0,z2=0,j2=0,l2=0,h2=0,g2=0;
var step=2.5;
var w=35;
var monster21 ={
    x:0,
    y:4*w
};
var monster22 ={
    x:5*w,
    y:0*w
};
var monster23 ={
    x:7*w,
    y:15*w
};
var monster24 ={
    x:2*w,
    y:9*w
};
var monster25 ={
    x:12*w,
    y:11*w
};
var monster26 ={
    x:17*w,
    y:17*w
};
var monster27 ={
    x:16*w,
    y:17*w
};


//第三关小怪物
var i3=0,j3=0,k3=0,j3=0,l3=0,h3=0,g3=0,z3=0,q3=0,n3=0,m3=0;
var step=2.5;
var w=35;
var monster31 ={
    x:0,
    y:6*w
};
var monster32 ={
    x:2*w,
    y:7*w
};
var monster33 ={
    x:5*w,
    y:2*w
};
var monster34 ={
    x:7*w,
    y:4*w
};
var monster35 ={
    x:8*w,
    y:9*w
};
var monster36 ={
    x:9*w,
    y:9*w
};
var monster37 ={
    x:7*w,
    y:17*w
};
var monster38 ={
    x:9*w,
    y:15*w
};
var monster39 ={
    x:13*w,
    y:5*w
};
var monster310 ={
    x:15*w,
    y:0*w
};




var DR=new Image();
DR.src="image/bad-right.png";
var DL=new Image();
DL.src="image/bad-left.png";
var DU=new Image();
DU.src="image/bad-up.png";
var DD=new Image();
DD.src="image/bad-down.png";

//myPeople
var left = new Image();
left.src = "image/left.png";
var right = new Image();
right.src = "image/right.png";
var up = new Image();
up.src = "image/up.png";
var down = new Image();
down.src = "image/down.png";

//吃到的星星数量
var numberOfStar1 = 0;
var numberOfStar2 = 0;
var numberOfStar3 = 0;

//过关目标
var goal1=3;
var goal2=3;
var goal3=3;

//myPeople初使位置
var myPeople1 = {};
myPeople1.step = 35;
myPeople1.x = 420;
myPeople1.y = 245;


//生命条数
var numberLife1 = 3;
var numberLife2 = 3;
var numberLife3 = 3;





var flag;
var w=35,h=35;
var curLevel=0;//当前等级的地图
var curMap =0//当前地图；
var curBg=0;
var curMonster=0;
var iCurlevel =0;//关卡数
var curCrash = 0;
 //time
var count;
var timer = null;



//start.js

var  fps=60,
    lastTime = 0,
    gg = 0,
    alas = 0,
    cuteOffset=0,
    CUTE_V=50;
//start.js 图片加载
var bgbackground =new Image();
bgbackground.src="image/start.jpg";
var  cute=new Image();
cute.src="image/cute.png";
var triangle=new Image();
triangle.src="image/triangle.png";

//胜利 失败图片
var victory = new Image();
victory.src = "image/victory.jpg";
var gameOver = new Image();
gameOver.src = "image/Game Over.jpg";
var requestID=0;






var maps = [//1代表障碍物； 2代表可吃的东西； 3代表可通过路径；4代表路上有小人；5代表可炸毁物件2
    [1,1,0,1,5,2,1,5,5,2,1,5,5,5,2,1,0,0],
    [5,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,1,0,2,0,0,0,0,0,5,0,0,1],
    [0,0,0,0,5,0,2,0,0,0,0,0,0,1,0,0,5,0],
    [5,0,1,5,0,0,0,2,0,2,0,0,0,1,0,0,5,0],
    [1,0,5,0,1,0,0,0,2,2,1,0,0,0,0,1,0,0],
    [5,2,1,0,0,0,0,0,0,2,0,0,0,0,5,0,0,0],
    [2,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0],
    [0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,5,1],
    [0,0,0,0,0,5,0,0,0,0,0,0,0,1,5,2,1,1],
    [1,1,1,1,0,0,0,1,0,0,0,0,0,0,2,2,2,0],
    [1,0,0,0,0,0,1,0,0,2,0,0,0,1,1,2,0,0],
    [0,0,5,5,5,0,0,1,0,0,0,0,0,5,1,5,0,0],
    [0,5,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,2],
    [0,2,0,1,0,0,0,1,0,0,1,0,5,0,5,0,1,0]
];



var maps2 = [//1代表障碍物； 2代表可吃的东西； ；4代表路上有小人，5代表障碍物2；
    [1,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [2,5,0,0,0,0,0,5,5,0,0,0,0,0,5,5,0,0],
    [0,0,1,0,0,0,0,5,5,0,0,0,0,0,5,5,0,0],
    [1,0,0,0,5,0,0,0,0,0,2,2,2,0,0,0,0,0],
    [5,1,0,5,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,1,1,5,1,5,0,5,1,5,1,1,0],
    [2,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0],
    [5,0,0,0,0,0,1,5,5,1,5,0,0,0,1,0,1,0],
    [0,0,0,5,1,5,0,0,2,0,0,5,0,0,1,2,1,0],
    [0,1,5,0,0,0,0,1,5,1,0,0,5,0,0,1,0,0],
    [0,2,1,0,1,2,5,0,0,0,1,1,0,0,0,0,0,0],
    [0,1,5,0,2,5,0,0,5,0,0,0,0,0,0,0,0,0],
    [0,2,1,0,5,2,0,1,0,0,5,0,0,1,0,5,2,0],
    [0,1,0,0,1,5,1,2,0,0,0,0,1,0,1,1,5,0],
    [0,2,1,0,5,0,0,0,1,0,5,0,0,1,2,5,2,0],
    [0,1,0,0,0,0,5,0,1,0,2,0,1,0,0,1,5,0],
    [0,0,0,1,5,0,0,0,5,0,0,0,0,0,0,0,0,0]


];


var maps3 = [//1代表障碍物； 2代表可吃的东西； 3代表可通过路径；4代表路上有小人
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,2,0,5,1,5,5,2,5,5,5,5,2,5,5,1,0],
    [0,2,5,0,0,0,5,0,1,0,0,2,5,1,0,2,5,0],
    [5,5,0,1,0,0,0,0,0,0,5,1,0,5,0,0,1,0],
    [0,0,0,0,5,0,0,1,0,1,0,0,0,1,5,0,1,0],
    [0,5,0,0,0,1,1,0,0,5,0,5,5,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,5,0,0,0,0,0,1,1,0],
    [0,5,1,1,0,5,5,5,1,5,0,5,5,1,5,0,2,0],
    [0,0,0,5,0,0,0,0,0,0,0,5,0,0,0,1,1,0],
    [2,2,0,5,0,1,2,1,0,0,5,0,0,0,0,0,1,0],
    [0,0,0,5,0,0,0,0,0,1,0,0,0,5,2,0,1,0],
    [0,1,1,0,0,0,0,0,0,2,0,5,0,2,1,0,5,0],
    [0,0,0,0,1,1,1,0,0,0,5,0,0,5,2,0,1,0],
    [5,5,5,5,0,0,2,5,5,0,5,0,0,2,5,0,1,0],
    [0,1,0,0,0,1,0,0,0,0,2,5,0,0,0,0,5,0],
    [0,0,0,1,5,1,5,1,5,1,5,1,5,1,5,1,1,0],
    [2,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,5,0],
    [0,0,0,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0]

];

