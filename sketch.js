var body, wheel, head;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  body = createSprite(width / 2, width * 2 / 3, 100, 250);
  wheel = createSprite(body.x, (width * 2 / 3) + 130, 50, 50);
  head = createSprite(body.x, (width * 2 / 9), 50, 50);

}

function draw() {
  background(150);

  //connecting pieces to body
  wheel.x = body.x;
  head.x = body.x;


  //moving body
  body.velocityX = (mouseX - body.x) / 20;

  //neck height
  line(body.x, head.y, body.x, body.y);
  if (mouseIsPressed && head.y < 250) {
    head.y = head.y + 1;
  } else if (head.y > width * 2 / 9) {
    head.y = head.y - 1;
  } else {
    head.y = width * 2 / 9;
  }

  drawSprites();
}

