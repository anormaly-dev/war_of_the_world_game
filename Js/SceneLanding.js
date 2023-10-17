class SceneLanding extends Phaser.Scene {

    constructor() {
        super('SceneLanding');
    }

    init(data) {
        this.gameOver = data.gameOver;
    }


    preload() {
        console.log('preload scene Landing...');
        this.load.image('elvis-intro', 'assets/elvis-intro.png');
        this.load.image('vale-intro', 'assets/vale-intro.png');
        this.load.image('wallpaper', 'assets/dark.jpg');
        this.load.image('intro', 'assets/intro.png');
        this.load.audio("ding", ["assets/bensound-epic.mp3"]);
    }

    create() {
        // var speaks = [{
        //     "name": "Alice",
        //     "lang": "it-IT"
        // }]

        // const msg = new SpeechSynthesisUtterance();
        // msg.volume = 1;
        // msg.rate = 1;
        // msg.pitch = 1;
        // msg.text = "Dopo anni di guerre la specie umana e' quasi completamente scomparsa. Durante questo periodo di quasi totale assenza di vita umana intelligente, la terra ha potuto prendersi cura di se stessa e tornare al massimo del suo splendore. Gli umani rimanenti sono circa un milione e sono divisi in tre fazioni. Di queste tre solamente due hanno il potere, i Nelliani e i Regioniani, che sono due organizzazioni criminali. La terza ed ultima fazione, gli Alexiani, pure essendo in maggioranza non hanno un leader. Il tuo compito sara' di radunare abbastanza Alexiani per prendere il potere dalle altre due fazioni e tornare ad essere liberi, ma stai attento, i Regioniani sono furbi e i Nelliani sono imprevedibili!. Per superare il livello devi collezionare 1520 Alexiani. Sei pronto? Con quale eroe Alexiano vuoi iniziare la tua avventura? Elvis o Valentina?";
        // const voice = speaks[0];
        // speechSynthesis.speak(msg);


        var ding = this.sound.add("ding", {
            volume: 0.1, loop: true
        });
        ding.play();
        console.log("audio credit Bensound.com");

        console.log('create scene Landing...');
        this.add.sprite(400, 300, 'wallpaper')
        this.add.sprite(400, 477, 'intro')
        let spriteElvis = this.add.sprite(280, 200, 'elvis-intro').setInteractive();

        spriteElvis.on('pointerdown', function (pointer) {

            
            let sprite = this;

            //  //this.scene.start('SceneA');

            //  if(sprite.scene.gameOver){
            //     sprite.scene.scene.restart('SceneA', { personaggio: PERSONAGGIO_ELVIS , image: 'acryl-bladerunner.png' });     
            //  } else {

            //  }

            sprite.scene.scene.launch('SceneA', {
                personaggio: PERSONAGGIO_ELVIS,
                image: 'acryl-bladerunner.png'
            });

            speechSynthesis.cancel();

        });

        let spriteValentina = this.add.sprite(520, 200, 'vale-intro').setInteractive();
        
        spriteValentina.on('pointerdown', function (pointer) {
            // this.scene.scene.add('SceneA');

            this.scene.scene.launch('SceneA', {
                personaggio: PERSONAGGIO_VALENTINA,
                image: 'acryl-bladerunner.png'
            });
            speechSynthesis.cancel();
        });


    }

}