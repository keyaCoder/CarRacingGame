class Form{
    constructor(){
        this.title = createElement("h1");
        this.input = createInput("name");
        this.button = createButton("click me");
        this.greeting = createElement("h1")
        this.reset = createButton("reset")
    }

     hide(){
         this.title.hide();
         this.input.hide();
         this.button.hide();
         this.greeting.hide();
     }

     display(){
        this.title.html("car racing game");
        this.title.position(displayWidth/2 + 370, displayHeight/4);

        this.input.position(displayWidth/2 + 380, displayHeight/3 + 150);
        this.input.size(200, 50);

        this.button.position(displayWidth/2 + 410, displayHeight - 100);
        this.button.size(150, 30);

        this.reset.position(displayWidth + 200, 0 + 130);
        this.reset.size(300, 30);

        this.button.mousePressed(
            ()=>{
                this.input.hide();
                this.button.hide();
                player.name = this.input.value();
                playerCount++;
                player.index = playerCount;
                player.update();
                player.updateCount(playerCount);

                this.greeting.html("Hello "+ player.name + "!")
                this.greeting.position(displayWidth - 240, displayHeight - 300);
                
            }
        );

        this.reset.mousePressed(
            ()=>{
                game.updateState(0);
                player.updateCount(0);
                Player.updateCarsAtEnd(0);
                database.ref("players").remove();
            }
        )
    }
}