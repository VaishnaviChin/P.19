var ball,ballImage,paddle,PaddleImage;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballImage=loadImage("ball.png");
  PaddleImage=loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(80,200,20,20);
  paddle=createSprite(350,200,20,20);
  ball.addImage("ballImage",ballImage);
  paddle.addImage("PaddleImage",PaddleImage);
  ball.velocityX=9;
  

}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
 ball.bounceOff(edges[0]);
 ball.bounceOff(edges[2]);
 ball.bounceOff(edges[3]);   
ball.bounceOff(paddle,randomVelocity);
paddle.bounceOff(edges[2]);
paddle.bounceOff(edges[3]);
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-3;
    
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=3;
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY=(random(-4,4));
  
}

