var strands=[];
var N=80;
var letters=["I","E","E"];

function strand(dist,long,pos){
  this.count=0;
  this.dist=dist;
  this.length=long;
  this.pos=pos;
  this.scl=25;
  this.y=random(0,height);
  this.speed=2.3-map(dist,1,5,1,2);

  this.var="0";

  this.show=function(){
    stroke(50,255,20);
    noFill();
    let size=35-map(dist,1,5,10,20);
    textSize(size);
    for(var i=0;i<this.length;i++){
      if(this.count>50){
          this.var=random(letters);
      }
      text(this.var,this.pos,this.y+i*this.scl);
    }
  }

  this.update=function(){
    this.y+=this.speed;
    if (this.y>=height){
      this.y=0-(this.length*this.scl);
    }
    this.count+=1;
    if(this.count>=60){
      this.count=1;
    }
  }
}


function setup() {
  complexCanvas=createCanvas(windowWidth,windowHeight);
  complexCanvas.style('top','auto');
  complexCanvas.style('z-index','-1000');
  complexCanvas.style('position','fixed');
  complexCanvas.style('bottom','0px');

  for(var i=0;i<N;i++)
  {
    let len=random(5,15);
    let dist=random(1,5);
    let pos=i*width/N;
    strands[i]=new strand(dist,len,pos);
  }

}

function draw(){
  background(15);
  for(var i=0;i<N/2;i++)
  {
    strands[i].show();
    strands[i].update();
  }
  textAlign(CENTER);
  stroke(255);
  fill(255);
  textSize(200);
  text("IEEE VIT", width/2,height/2+75);
  for(var i=N/2;i<N;i++)
  {
    strands[i].show();
    strands[i].update();
  }
}
