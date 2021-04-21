function level3(){
    titleSprite.visible = false;
    level1Sprite.visible = false;
    level2Sprite.visible = false;
    level3Sprite.visible = false;

    chat1Sprite.visible = false;
    chat2Sprite.visible = false;
    chatContinueSprite.visible = false;
    chatContinue2Sprite.visible = false;

    exitSprite.visible = true;

    rocketSprite.visible = true;
    moonSprite.visible = true;

    fill('cyan');
    textSize(25);
    text('Oxygen Level: '+oxygen, displayHeight - displayHeight + 25, displayWidth - displayWidth + 25);

    rocketGroup.add(rocketSprite);
    rocketSprite.setCollider("rectangle", 0, 0, 200, 400);

    if(rocketGroup.isTouching(astroidGroup)){
        explodeSound.play();
      astroidGroup.destroyEach();
      oxygen = oxygen - 1;
    }

    if(oxygen === 0){
      endSprite.visible = true;
      astroidGroup.destroyEach();
      starGroup.destroyEach();
      rocketGroup.destroyEach();
      if(mousePressedOver(endSprite)){
        gameState = 0;
        astroidGroup.destroyEach();
        starGroup.destroyEach();
        clickSound.play();
      }
    }

    starSpawn(10);
    astroidSpawn(30);
    
    moonSprite.velocityY = 6;
    moonSprite.lifetime = 10;

    if(keyDown(RIGHT_ARROW)){
      if(rocketSprite.x < displayWidth){
        rocketSprite.x = rocketSprite.x + 5;
      }
    }

    if(keyDown(LEFT_ARROW)){
      if(rocketSprite.x < displayWidth){
        rocketSprite.x = rocketSprite.x - 5;
      }
    }

    if(frameCount % 1 === 0){
      rocketDistance = rocketDistance + 10;
      if(rocketDistance >= 30000){
        completeSprite.visible = true;
        earthSprite.visible = true;
        if(mousePressedOver(completeSprite)){
          gameState = 0;
          astroidGroup.destroyEach();
          starGroup.destroyEach();
          clickSound.play();
        }
        if(earthSprite.y < displayHeight/2){
          earthSprite.y = earthSprite.y + 12;
        }
        if(rocketSprite.y > displayHeight/2){
          rocketSprite.y = rocketSprite.y - 6;
        }
      }
    }

    if(mousePressedOver(exitSprite)){
      exitConfirmSprite.visible = true;
      exitWarnSprite.visible = true;
      exitCancelSprite.visible = true;
      clickSound.play();
    }

    if(keyDown(27)){
      exitConfirmSprite.visible = false;
      exitWarnSprite.visible = false;
      exitCancelSprite.visible = false;
      clickSound.play();
    }
    
    if(keyDown(67)){
      exitConfirmSprite.visible = false;
      exitWarnSprite.visible = false;
      exitCancelSprite.visible = false;
      clickSound.play();

      astroidGroup.destroyEach();
      starGroup.destroyEach();
      
      gameState = 0;
    }
}