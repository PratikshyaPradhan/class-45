class Game {
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      
  async start(){
    if(gameState === 0){
      console.log("HELLO");
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      playerA = createSprite(200,100,50,50);
      playerA.addImage("p1",outsiders);
      playerB = createSprite(300,100,50,50);
      playerB.addImage("p2",outsiders);
      playerC = createSprite(400,100,50,50);
      playerC.addImage("p3",outsiders);
      playerD = createSprite(500,100,50,50);
      playerD.addImage("p4",outsiders);
      playerE = createSprite(600,100,50,50);
      playerE.addImage("p5",outsiders);
      playerF = createSprite(700,100,50,50);
      playerF.addImage("p6",insiders);
      playerG = createSprite(800,100,50,50);
      playerG.addImage("p7",insiders);
    }
}
play(){
  form.hide();
   drawSprites();
}
}