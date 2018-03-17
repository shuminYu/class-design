
//
function music(){
	bg1.play();
}
// function music2(){
// 	bg2.play();
// }
// function music3(){
// 	bg3.play();
// }

//
function score(){
	star.cloneNode().play();

}
//
function boom(){
	boom.play();
}
//
function musicDown(){
	bg1.pause();
}

// function startPlay(){
// 	StartBgm.play();
// }

// function startDown(){
// StartBgm.paused();
// }
// function musicDown2(){
// 	bg2.stop();
// }

// function musicDown3(){
// 	bg3.stop();
// }


// function bgmPlay(curBg){
// 	if(curBg==1)
// 		music();
// 	if(curBg==2)
// 		music2();
// 	if(curBg==3)
// 		music3();
// }
// bgmPlay(curBg);

// function bgmPause(curBg){

// if(curBg==1)
// 		musicDown();
// 	if(curBg==2)
// 		music2Down();
// 	if(curBg==3)
// 		music3Down();
// }

function ControlBgm(){
	if(bg1.paused){
		music();
	}
	else
		musicDown();
}