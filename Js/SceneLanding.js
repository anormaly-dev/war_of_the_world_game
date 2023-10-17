class SceneLanding extends Phaser.Scene {

    constructor() {
        super('SceneLanding');
    }

    init(data) {
        this.gameOver = data.gameOver;
    }


    preload() {
        console.log('preload scene Landing...');
        this.load.image('male-intro', 'assets/male-intro.png');
        this.load.image('female-intro', 'assets/female-intro.png');
        this.load.image('wallpaper', 'assets/dark.jpg');
        this.load.image('intro', 'assets/intro.png');
        this.load.audio("ding", ["assets/bensound-epic.mp3"]);
    }

    create() {


        var ding = this.sound.add("ding", {
            volume: 0.1, loop: true
        });
        ding.play();
        console.log("audio credit Bensound.com");

        console.log('create scene Landing...');
        this.add.sprite(400, 300, 'wallpaper')
        this.add.sprite(400, 477, 'intro')
        let spriteElvis = this.add.sprite(280, 200, 'male-intro').setInteractive();

        spriteElvis.on('pointerdown', function (pointer) {

            
            let sprite = this;

            sprite.scene.scene.launch('SceneA', {
                personaggio: PLAYER_MALE,
                image: 'acryl-bladerunner.png'
            });

            speechSynthesis.cancel();

        });

        let spriteValentina = this.add.sprite(520, 200, 'female-intro').setInteractive();
        
        spriteValentina.on('pointerdown', function (pointer) {

            this.scene.scene.launch('SceneA', {
                personaggio: PLAYER_GIRL,
                image: 'acryl-bladerunner.png'
            });
            speechSynthesis.cancel();
        });


    }

}