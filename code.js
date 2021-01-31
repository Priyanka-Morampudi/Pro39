var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a10827ae-bf7e-459b-be24-2063517ad9d5","89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b","948032ca-676c-4ae7-b0c8-fb7ac37bec7c","d44d015c-0f5a-42d6-a705-13c534991470","62b639e0-262b-4def-aeae-9b21305fdd2e","27a6a3ea-51bb-455d-9790-dd4500e68cef","53186617-b397-4792-b0ee-a61374274332","82cd349d-0a71-49f3-9b66-f2ee881ae8d3","3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7","dc7efe7d-89e9-4c27-aa1e-07265e0d4b29","a7dac581-97e5-4de9-b678-6e530e67abba","ede3f580-fb2e-4abc-8fd6-e98ea7fd5723","3221dc49-6ce7-46fe-b63d-f08d173121c9","6eb220da-6bd8-4a5c-b1b0-93b76c2dfb9b","de8b2759-46bb-47ce-800f-1709e5ec9540"],"propsByKey":{"a10827ae-bf7e-459b-be24-2063517ad9d5":{"name":"ground1","sourceUrl":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/a10827ae-bf7e-459b-be24-2063517ad9d5.png","frameSize":{"x":1596,"y":26},"frameCount":1,"looping":true,"frameDelay":4,"version":"xlRcByEa5aILgUjHsUXWPPqLxp9qqVcf","loadedFromSource":true,"saved":true,"sourceSize":{"x":1596,"y":26},"rootRelativePath":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/a10827ae-bf7e-459b-be24-2063517ad9d5.png"},"89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b":{"name":"ground2","sourceUrl":null,"frameSize":{"x":2377,"y":12},"frameCount":1,"looping":true,"frameDelay":12,"version":"fvT_d7EbnZx9hQzB5254tkXs7A5HlW0o","loadedFromSource":true,"saved":true,"sourceSize":{"x":2377,"y":12},"rootRelativePath":"assets/89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b.png"},"948032ca-676c-4ae7-b0c8-fb7ac37bec7c":{"name":"cloud","sourceUrl":null,"frameSize":{"x":92,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"6n_b5Apee4_NG1VeSGFh6JKeOjd1Pkes","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":27},"rootRelativePath":"assets/948032ca-676c-4ae7-b0c8-fb7ac37bec7c.png"},"d44d015c-0f5a-42d6-a705-13c534991470":{"name":"obstacle1","sourceUrl":null,"frameSize":{"x":34,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"rHT8XJvRqz8TGGZmYGuu7gZ3ZyVDlnmi","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":70},"rootRelativePath":"assets/d44d015c-0f5a-42d6-a705-13c534991470.png"},"62b639e0-262b-4def-aeae-9b21305fdd2e":{"name":"obstacle2","sourceUrl":null,"frameSize":{"x":69,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"LPTbMSs75MHCCDB.55.5GJg3CPClpfWY","loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":70},"rootRelativePath":"assets/62b639e0-262b-4def-aeae-9b21305fdd2e.png"},"27a6a3ea-51bb-455d-9790-dd4500e68cef":{"name":"obstacle3","sourceUrl":null,"frameSize":{"x":102,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"WepFzffd..Qopdce3OFd_a8_BZWcSxrs","loadedFromSource":true,"saved":true,"sourceSize":{"x":102,"y":70},"rootRelativePath":"assets/27a6a3ea-51bb-455d-9790-dd4500e68cef.png"},"53186617-b397-4792-b0ee-a61374274332":{"name":"obstacle4","sourceUrl":null,"frameSize":{"x":50,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Q_oes9r0slBaHAYjankZhp6eXEbnHqTU","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/53186617-b397-4792-b0ee-a61374274332.png"},"82cd349d-0a71-49f3-9b66-f2ee881ae8d3":{"name":"obstacle5","sourceUrl":null,"frameSize":{"x":103,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"TU7LeV11OtsI5dUvsmv7IUfmUKUpN2H3","loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":100},"rootRelativePath":"assets/82cd349d-0a71-49f3-9b66-f2ee881ae8d3.png"},"3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7":{"name":"obstacle6","sourceUrl":null,"frameSize":{"x":150,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"vMMBg1WdZdG86B8Cj13g73CTrbydDN0G","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":100},"rootRelativePath":"assets/3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7.png"},"dc7efe7d-89e9-4c27-aa1e-07265e0d4b29":{"name":"gameOver","sourceUrl":null,"frameSize":{"x":381,"y":21},"frameCount":1,"looping":true,"frameDelay":12,"version":"7yV310xSxhpWaC_CsskDePqtsJ94qs7S","loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":21},"rootRelativePath":"assets/dc7efe7d-89e9-4c27-aa1e-07265e0d4b29.png"},"a7dac581-97e5-4de9-b678-6e530e67abba":{"name":"restart","sourceUrl":null,"frameSize":{"x":75,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"BJGVbfreU1BMEM2kbQYC67fY94h6dKB5","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":64},"rootRelativePath":"assets/a7dac581-97e5-4de9-b678-6e530e67abba.png"},"ede3f580-fb2e-4abc-8fd6-e98ea7fd5723":{"name":"continuous_grass_1","sourceUrl":"assets/api/v1/animation-library/gamelab/33k01iEf_qdIHwV2rQ3lCAQ4NtEvQopS/category_backgrounds/continuous_grass.png","frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"33k01iEf_qdIHwV2rQ3lCAQ4NtEvQopS","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/33k01iEf_qdIHwV2rQ3lCAQ4NtEvQopS/category_backgrounds/continuous_grass.png"},"3221dc49-6ce7-46fe-b63d-f08d173121c9":{"name":"bunny2_walk1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png","frameSize":{"x":152,"y":193},"frameCount":2,"looping":true,"frameDelay":2,"version":"Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu","categories":["animals","characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":193},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png"},"6eb220da-6bd8-4a5c-b1b0-93b76c2dfb9b":{"name":"ghost_standing_1","sourceUrl":"assets/api/v1/animation-library/gamelab/tCw6E6_fbRCkfa0k_Elc0Pp5kcH67lVu/category_characters/ghost_standing.png","frameSize":{"x":72,"y":158},"frameCount":7,"looping":true,"frameDelay":2,"version":"tCw6E6_fbRCkfa0k_Elc0Pp5kcH67lVu","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":504,"y":158},"rootRelativePath":"assets/api/v1/animation-library/gamelab/tCw6E6_fbRCkfa0k_Elc0Pp5kcH67lVu/category_characters/ghost_standing.png"},"de8b2759-46bb-47ce-800f-1709e5ec9540":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;

//create a trex sprite
var trex = createSprite(200,350,20,50);
trex.setAnimation("bunny2_walk1_1");

//set collision radius for the trex
trex.setCollider("circle",0,0,30);

//scale and position the trex
trex.scale = 0.3;
trex.x = 50;

//create a ground sprite
var ground = createSprite(200,380,400,20);
ground.setAnimation("ground1");


//invisible Ground to support Trex
var invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;

//create Obstacle and Cloud Groups
var ObstaclesGroup = createGroup();
var CloudsGroup = createGroup();

//place gameOver and restart icon on the screen
var gameOver = createSprite(200,200);
var restart = createSprite(200,340);
gameOver.setAnimation("textGameOver_1");

restart.setAnimation("restart");
restart.scale = 0.9;

gameOver.visible = false;
restart.visible = false;

//set text
textSize(18);
textFont("Georgia");
textStyle(BOLD);

//score
var count = 0;

function draw() {
  //set background to white
  background("lightgreen");
  //display score
  text("Score: "+ count, 250, 100);
  console.log(gameState);
  
  if(gameState === PLAY){
    //move the ground
    ground.velocityX = -(6 + 3*count/100);
    //scoring
    count=count+ Math.round(World.frameRate/60);
    
    if (count>0 && count%100 === 0){
      playSound("assets/checkPoint.mp3");
    }
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
     //jump when the space key is pressed
    if(keyDown("space") && trex.y >= 359){
      trex.velocityY = -12 ;
      playSound("assets/jump.mp3");
    }
  
    //add gravity
    trex.velocityY = trex.velocityY + 0.8;
    
    //spawn the clouds
    spawnClouds();
  
    //spawn obstacles
    spawnObstacles();
    
    //End the game when trex is touching the obstacle
    if(ObstaclesGroup.isTouching(trex)){
      playSound("assets/jump.mp3");
      gameState = END;
      playSound("assets/die.mp3");
    }
  }
  
  else if(gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    trex.velocityY = 0;
    ObstaclesGroup.setVelocityXEach(0);
    CloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
    trex.setAnimation("ghost_standing_1");
    
    //set lifetime of the game objects so that they are never destroyed
    ObstaclesGroup.setLifetimeEach(-1);
    CloudsGroup.setLifetimeEach(-1);
    
    
  }
  
  if(mousePressedOver(restart)) {
    reset();
  }
  
  //console.log(trex.y);
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  drawSprites();
}

function reset(){
  gameState=PLAY;
  gameOver.visible=false;
  restart.visible=false;
  ObstaclesGroup.destroyEach();
  CloudsGroup.destroyEach();
   trex.setAnimation("bunny2_walk1_1");
   count=0;
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - (6 + 3*count/100);
    
    //generate random obstacles
    var rand = randomNumber(1,6);
    obstacle.setAnimation("obstacle" + rand);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(400,320,40,10);
    cloud.y = randomNumber(280,320);
    cloud.setAnimation("cloud");
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    CloudsGroup.add(cloud);
  }
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
