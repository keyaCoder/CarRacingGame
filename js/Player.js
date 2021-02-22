class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
        this.rank = null;
    }

    getCount(){
        var ref = database.ref("playerCount");
        ref.on("value", function(data){
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref("/").update({
            playerCount : count
        });
    }

    getCarsAtEnd(){
        var ref = database.ref("CarsAtEnd");
        ref.on("value", (data)=>{
            this.rank = data.val();
        });
    }

        static updateCarsAtEnd(rank){
        database.ref("/").update({
            CarsAtEnd : rank
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name : this.name, 
            distance : this.distance
        });
    }
    
   static getPlayerInfo(){
       var ref = database.ref("players");
       ref.on("value", (data)=>{
           allPlayers = data.val();
       });
   }
}