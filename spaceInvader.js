var sc_x = 0;
var x_en = 0;
var y_en = 0;
var mi_y = 50;	


function create()
{
	
	window.addEventListener("keydown",keydown);
}


function keydown(e){
		
	switch(e.keyCode){
		case 37:
			if (sc_x>0)
			{
				sc_x -= 10;
			}
			break;
		case 39:
			if (sc_x<770)
			{
				sc_x += 10;
			}
			break;
		case 32:
			missile();
			break;
	}
}

function moove(){
	if ( x_en <=780)
	{
		if ( y_en < 580 && x_en==770) 
		{
			x_en = 10;
			y_en+=10;
		}
		else
		  x_en+=10;	
	}			
}

function updateEnnemi()
{
	en = document.getElementById("ennemi");
	en.style.left = x_en+"px";
	en.style.top = y_en+"px";
	moove();
	setTimeout(updateEnnemi, 300);
}

function update()
{
	el = document.getElementById("sheep");
	el.style.left = sc_x+"px";
	setTimeout(update, 50);
	create();
}

function createEnnemi(){
	console.log("1");
	for (var i = 0; i<8 ; i++) {
		console.log("2");
	var canvasEnnemi = document.createElement("canvasEnnemi");
	canvasEnnemi.id = "ennemi" + i;
	var container = document.getElementById("container");
	container.appendChild(canvasEnnemi);
     
    var imageObj = new Image();

      imageObj.onload = function() {
        context.drawImage(imageObj, 30, 30);
      };
      imageObj.src = 'ennemi.png';
      updateEnnemi();
	}

}	

function missile()
{
	var canvas = document.createElement("canvas");
	canvas.id     = "missile";
	canvas.width  = 7;
	canvas.height = 22;
	canvas.style.display= "inline"
	canvas.style.bottom = mi_y+"px";
	canvas.style.position = "absolute";
	canvas.style.left = sc_x + 21;
	canvas.style.backgroundColor = "red";
	var container = document.getElementById("container");
	container.appendChild(canvas);
	canvas.getContext("2d");

	missileUpdate();

}


function missileUpdate()
{
	canvasUpdate = document.getElementById("missile");
	canvasUpdate.style.bottom = mi_y+"px";
	if ( mi_y <= 578)
	{
		mi_y+=10;		
		  
	}			
	else 
	{
		delete canvasUpdate;
		mi_y = 50;
	}
		setTimeout(missileUpdate, 100);
}



update();
updateEnnemi();





