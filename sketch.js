var x = 0 ;
var y = 200;
var xspeed = 5;
var pco = 200
var yspeed = 5;
var score1 = 0;
var score2 = 0;
var yco = [100,200,300,150,250,350,125,225,325]
function setup() {
	createCanvas(600,400)


}

function draw() {
	background(120);
	fill(255);
	noStroke();
	rect(x,y,20,20);
		
x += xspeed;
y += yspeed;
	
fill(255);
text(score1, 40, 50);


fill(255);
text(score2, width-40, 50);
if (x == 0 || x == width-10){
		xspeed *= -1;
	}
if (y == -10 || y == 400){
	yspeed *= -1;
}
	

var msY = constrain(mouseY,0,height-80);
rect(0,msY,20,80)

if ((y<msY || y>msY+80)&& x == 0){
	y = random(yco);
	x = 0;
	score2 += 1;
	
}
	
// computer 



if (pco>y){
	pco -= 4.95;
}
else {
	pco += 4.95;
}

fill(255);
noStroke();
rect(width-20,pco,20,80);	



if ((y<pco || y>pco+80)&& x == width-10){
	y = random(yco);
	x = width-10;
	score1 += 1;
}
		

		
if (score1 == 5){
	alert("player won");
	score1 = 0;
	score2 = 0;
}
else if(score2 == 5){
	alert("computer won");
	score1 = 0;
	score2 = 0;
}

}

