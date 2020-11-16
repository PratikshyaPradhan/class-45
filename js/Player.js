class Player {
    constructor(){
        this.index = null;
        this.name = null;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
 
      resetName(){
        var name1 = "players/player"+this.index;
        database.ref(name1).set({
          name:""
        })
      }
     
      update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name
        });
      }

       static getPlayerInfo(){
         var playerInfoRef = database.ref('players');
         playerInfoRef.on("value",(data)=>{
           allPlayers = data.val();
         })
       }
}