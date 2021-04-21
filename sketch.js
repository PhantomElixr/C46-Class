var gameState = 0;

var titleSprite, titleImage;
var level1Sprite, level1Image;
var level2Sprite, level2Image;
var level3Sprite, level3Image;

var chat1Sprite, chat1Image;
var chat2Sprite, chat2Image;
var chatContinueSprite, chatContinueImage;
var chatContinue2Sprite, chatContinue2Image;

var exitSprite, exitImage;
var exitConfirmSprite, exitConfirmImage;
var exitWarnSprite, exitWarnImage;
var exitCancelSprite, exitCancelImage;

var rocketSprite, rocketImage;
var rocketDistance = 0;
var astroidGroup, astroidImage;
var starGroup, starImage;
var earthSprite, earthImage;
var moonSprite, moonImage;
var oxygen = 5;
var rocketGroup;

var endSprite, endImage;
var completeSprite, completeImage;

var clickSound, explodeSound;

function preload(){
  titleImage = loadImage('assets/images/title.png');
  level1Image = loadImage('assets/images/one.png');
  level2Image = loadImage('assets/images/two.png');
  level3Image = loadImage('assets/images/three.png');

  chat1Image = loadImage('assets/images/chat/1_commander.png');
  chat2Image = loadImage('assets/images/chat/2_computer.png');
  chatContinueImage = loadImage('assets/images/continue.png');
  chatContinue2Image = loadImage('assets/images/continue2.png');

  exitImage = loadImage('assets/images/exit.png');
  exitConfirmImage = loadImage('assets/images/exitConfirm.png');
  exitWarnImage = loadImage('assets/images/exitWarn.png');
  exitCancelImage = loadImage('assets/images/exitCancel.png');

  rocketImage = loadImage('assets/images/rocket.png');
  astroidImage = loadImage('assets/images/astroid.png');
  starImage = loadImage('assets/images/star.png');
  earthImage = loadImage('assets/images/earth.png');
  moonImage = loadImage('assets/images/moon.png');

  endImage = loadImage('assets/images/end.png');
  completeImage = loadImage('assets/images/complete.png');

  clickSound = loadSound('assets/audio/click.mp3');
  explodeSound = loadSound('assets/audio/explode.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  titleSprite = createSprite(windowWidth/2, windowHeight - windowHeight + 50, 0, 0);
  titleSprite.addImage(titleImage);
  titleSprite.visible = false;

  level1Sprite = createSprite(windowWidth/2 - 100, windowHeight - windowHeight + 200, 0, 0);
  level1Sprite.addImage(level1Image);
  level1Sprite.visible = false;

  level2Sprite = createSprite(windowWidth/2, windowHeight - windowHeight + 200, 0, 0);
  level2Sprite.addImage(level2Image);
  level2Sprite.visible = false;

  level3Sprite = createSprite(windowWidth/2 + 100, windowHeight - windowHeight + 200, 0, 0);
  level3Sprite.addImage(level3Image);
  level3Sprite.visible = false;

  chat1Sprite = createSprite(windowWidth - windowWidth + 150, windowHeight - 100, 0, 0);
  chat1Sprite.addImage(chat1Image);
  chat1Sprite.scale = 0.15;
  chat1Sprite.visible = false;

  chat2Sprite = createSprite(windowWidth - windowWidth + 150, windowHeight - 100, 0, 0);
  chat2Sprite.addImage(chat2Image);
  chat2Sprite.scale = 0.15;
  chat2Sprite.visible = false;

  chatContinueSprite = createSprite(windowWidth - windowWidth + 300, windowHeight - 50, 0, 0);
  chatContinueSprite.addImage(chatContinueImage);
  chatContinueSprite.scale = 0.5;
  chatContinueSprite.visible = false;

  chatContinue2Sprite = createSprite(windowWidth - windowWidth + 300, windowHeight - 50, 0, 0);
  chatContinue2Sprite.addImage(chatContinue2Image);
  chatContinue2Sprite.scale = 0.5;
  chatContinue2Sprite.visible = false;

  exitSprite = createSprite(windowWidth - 25, windowHeight - windowHeight + 25, 0, 0);
  exitSprite.addImage(exitImage);
  exitSprite.visible = false;

  exitConfirmSprite = createSprite(windowWidth/2, windowHeight/2 - 150, 0, 0);
  exitConfirmSprite.addImage(exitConfirmImage);
  exitConfirmSprite.visible = false;

  exitWarnSprite = createSprite(windowWidth/2, windowHeight/2 - 300, 0, 0);
  exitWarnSprite.addImage(exitWarnImage);
  exitWarnSprite.scale = 0.75;
  exitWarnSprite.visible = false;

  exitCancelSprite = createSprite(windowWidth/2, windowHeight/2 - 100, 0, 0);
  exitCancelSprite.addImage(exitCancelImage);
  exitCancelSprite.visible = false;

  earthSprite = createSprite(windowWidth/2, windowHeight/2 - windowHeight, 0, 0);
  earthSprite.addImage(earthImage);
  earthSprite.visible = false;

  moonSprite = createSprite(windowWidth/2, windowHeight, 0, 0);
  moonSprite.addImage(moonImage);
  moonSprite.visible = false;

  rocketSprite = createSprite(windowWidth/2, windowHeight - 200, 10, 20);
  rocketSprite.addImage(rocketImage);
  rocketSprite.scale = 0.5;
  rocketSprite.visible = false;

  endSprite = createSprite(windowWidth/2, windowHeight - windowHeight + 100);
  endSprite.addImage(endImage);
  endSprite.visible = false;

  completeSprite = createSprite(windowWidth/2, windowHeight - windowHeight + 100);
  completeSprite.addImage(completeImage);
  completeSprite.visible = false;

  astroidGroup = new Group();
  starGroup = new Group();
  rocketGroup = new Group();
}

function draw(){
  background(0);

  if(gameState === 0){
    titleSprite.visible = true;
    level1Sprite.visible = true;
    level2Sprite.visible = true;
    level3Sprite.visible = true;

    chat1Sprite.visible = false;
    chat2Sprite.visible = false;
    chatContinueSprite.visible = false;
    chatContinue2Sprite.visible = false;

    exitSprite.visible = false;
    exitConfirmSprite.visible = false;
    exitWarnSprite.visible = false;
    exitCancelSprite.visible = false;

    rocketSprite.visible = false;
    earthSprite.visible = false;
    moonSprite.visible = false;

    endSprite.visible = false;
    completeSprite.visible = false;

    oxygen = 5;
    rocketDistance = 0;

    if(mousePressedOver(level1Sprite)){
      clickSound.play();
      console.log('[PhantomElixr Games] Starting Chat');
      gameState = 0.1;
    }

    if(mousePressedOver(level2Sprite)){
      clickSound.play();
      console.log('[PhantomElixr Games] Starting Level 2');
      gameState = 2;
    }

    if(mousePressedOver(level3Sprite)){
      clickSound.play();
      console.log('[PhantomElixr Games] Starting Level 3');
      gameState = 3;
    }
  }

  if(gameState === 0.1){
    titleSprite.visible = false;
    level1Sprite.visible = false;
    level2Sprite.visible = false;
    level3Sprite.visible = false;

    exitSprite.visible = false;
    exitConfirmSprite.visible = false;
    exitWarnSprite.visible = false;
    exitCancelSprite.visible = false;

    chat1Sprite.visible = true;
    chat2Sprite.visible = false;
    chatContinueSprite.visible = true;
    chatContinue2Sprite.visible = false;

    if(keyDown(69)){
      clickSound.play();
      gameState = 0.2;
    }
  }

  if(gameState === 0.2){
    titleSprite.visible = false;
    level1Sprite.visible = false;
    level2Sprite.visible = false;
    level3Sprite.visible = false;

    exitSprite.visible = false;
    exitConfirmSprite.visible = false;
    exitWarnSprite.visible = false;
    exitCancelSprite.visible = false;

    chat1Sprite.visible = false;
    chat2Sprite.visible = true;
    chatContinueSprite.visible = false;
    chatContinue2Sprite.visible = true;

    if(keyDown(70)){
      clickSound.play();
      console.log('[PhantomElixr Games] Starting Level 1')
      gameState = 1;
    }
  }


  if(gameState === 1){
    level1();
  }

  if(gameState === 2){
    level2();
  }

  if(gameState === 3){
    level3();
  }
  drawSprites();
}

function starSpawn(speed) {
  if(frameCount % speed === 0) {
    var starSprite = createSprite(random(windowWidth, windowWidth - windowWidth), windowHeight - windowHeight - 100, 0, 0);
    starSprite.velocityY = random(1,6);   
    starSprite.addImage(starImage); 
    starSprite.scale = 0.004;
    starSprite.lifetime = 500;
    starGroup.add(starSprite);
    
    if(rocketDistance > 10000){
      starSprite.velocityY = 0;
    }
  }
}

function astroidSpawn(speed) {
  if(frameCount % speed === 0) {
    var astroidSprite = createSprite(random(windowWidth, windowWidth - windowWidth), windowHeight - windowHeight - 100, 10, 10);
    astroidSprite.velocityY = random(6,12);   
    astroidSprite.addImage(astroidImage); 
    astroidSprite.scale = 0.02;
    astroidSprite.lifetime = 500;
    astroidGroup.add(astroidSprite);

    if(rocketDistance >= 10000){
      astroidSprite.velocityY = 0;
    }
  }
}