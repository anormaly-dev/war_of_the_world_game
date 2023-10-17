class SceneB extends Phaser.Scene {

    constructor ()
    {
        super('SceneB');
    }

    init(data) {
        console.log('personaggio cliccato ',data.personaggio);
        this.personaggio = data.personaggio;
    }

 preload() {
    console.log('preload scene B...');
    this.load.image('mostro', 'assets/regione.png');
    this.load.image('skyB', 'assets/BackroundB.jpg');
    this.load.image('smallground', 'assets/smallgroundB.png');
    this.load.image('star', 'assets/alexFinal.png');
    this.load.image('prof', 'assets/proff.png');
    this.load.image('mainground', 'assets/platformMainB.png');
    this.load.image('brickx1', "assets/groundx1B.png")
    this.load.image('brickx2', "assets/groundx2B.png")

    let spriteAsset = "";
    switch(this.personaggio) {
        case PERSONAGGIO_ELVIS:
            spriteAsset = "elvis.png";
            break;
        case PERSONAGGIO_VALENTINA:
        default:
            spriteAsset = "valentina.png";
    }

    this.load.spritesheet('dude', 'assets/' + spriteAsset, {
        frameWidth: 48,
        frameHeight: 62
    });


    // if(this.personaggio == PERSONAGGIO_ELVIS){
    //     this.load.spritesheet('dude', 'assets/SpriteElvis.png', {
    //         frameWidth: 48,
    //         frameHeight: 72
    //     });
    // }
    // else{
    //     this.load.spritesheet('dude', 'assets/vale2.png', {
    //         frameWidth: 48,
    //         frameHeight: 72
    //     });
    // }
   
}

 create() {
    console.log('create scene A...');
    console.log('Scene A player', this.player);
    this.player = undefined;

    this.cursors = this.input.keyboard.createCursorKeys();
    let platforms = this.createLayout();
    this.createPlayer();
    this.createStars();
    this.createProf();
    this.createMostro();
    this.createScore();

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.collider(this.player, platforms);
    this.physics.add.overlap(this.player, this.stars, collectStar, null, this);
    this.physics.add.collider(this.player, this.prof, hitprof, null, this);
    this.physics.add.collider(this.player, this.mostro, hitEnemy, null, this);
    this.physics.add.collider(this.player, this.mostro2, hitEnemy, null, this);
    this.physics.add.collider(this.player, this.mostro3, hitEnemy, null, this);
    this.physics.add.collider(this.prof, platforms);
    this.physics.add.collider(this.stars, platforms);
    this.physics.add.collider(this.mostro, platforms);
    this.physics.add.collider(this.mostro2, platforms);
    this.physics.add.collider(this.mostro3, platforms);

    //this.cameras.follow(this.player);
    // this.cameras.main.height = 1500;
    // this.cameras.main.width = 1800;
    this.cameras.main.setBounds(0, 0, 1400, 1100);
    this.physics.world.setBounds(0, 0, 1400, 1100);
    this.cameras.main.startFollow(this.player, true, 0.09, 0.09);
    
}

 update() {

    if(this.player) {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
    
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
    
            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
    
            this.player.anims.play('turn');
        }
    
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    }
}



createProf(){
    this.prof = this.physics.add.group();
}


createStars(){
    this.stars = this.physics.add.group({
        key: 'star',
        repeat: 38,
        setXY: {
            x: 12,
            y: 0,
            stepX: 35
        }
    });

    this.stars.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    

   
}

createLayout(){

    this.add.image(400, 300, 'skyB');

    let platforms = this.physics.add.staticGroup();

    platforms.create(800, 568, 'brickx1').setScale(0.5).refreshBody();
    platforms.create(660, 1100, 'mainground').setScale(0.5).refreshBody();
    platforms.create(1300,1100, 'smallground').setScale(0.5).refreshBody();;
    platforms.create(200,980, 'smallground').setScale(0.5).refreshBody();;
    platforms.create(300,780, 'smallground').setScale(0.5).refreshBody();;
    platforms.create(1400,700, 'smallground').setScale(0.5).refreshBody();;
    platforms.create(-140,550, 'smallground').setScale(0.5).refreshBody();;
    platforms.create(900, 650, 'smallground').setScale(0.5).refreshBody();;
    platforms.create(470, 250, 'brickx1').setScale(0.5).refreshBody();;
    platforms.create(170, 320, 'brickx2').setScale(0.5).refreshBody();;
    platforms.create(1150, 220, 'brickx2').setScale(0.5).refreshBody();;
    platforms.create(750, 220, 'brickx2').setScale(0.5).refreshBody();;
    platforms.create(900, 320, 'brickx2').setScale(0.5).refreshBody();;
    platforms.create(450, 180, 'brickx2').setScale(0.5).refreshBody();;
    platforms.create(170, 320, 'brickx2').setScale(0.5).refreshBody();;
    platforms.create(750, 400, 'brickx1').setScale(0.5).refreshBody();;
    // platforms.create(1020, 520, 'brickx1').setScale(0.5).refreshBody();;
    // platforms.create(750, 520, 'brickx2').setScale(0.5).refreshBody();;
    // platforms.create(932, 800, 'brickx1').setScale(0.5).refreshBody();;
    // platforms.create(1300, 580, 'brickx2').setScale(0.5).refreshBody();;

    return platforms;
}

createPlayer(){
    let player = this.physics.add.sprite(50, 1000, 'dude').setScale(0.7).refreshBody();
    this.player = player;
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

 
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 0,
            end: 3
        }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{
            key: 'dude',
            frame: 4
        }],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 5,
            end: 8
        }),
        frameRate: 10,
        repeat: -1
    });
}

createScore(){
 //  The score
 this.score = 0;
 this.scoreText = this.add.text(16, 16, 'score: 0', {
     fontSize: '32px',
     fill: '#000'
 });
 this.scoreText.setScrollFactor(0);
}

createMostro(){
    this.mostro = this.physics.add.sprite(500, 40, 'mostro');
    this.mostro.setScale(1);
    this.mostro.setBounce(0.2);
    this.mostro.setCollideWorldBounds(true);
    
    this.tweens.timeline({

        targets: this.mostro,
        loop: 2120,

        tweens: [{
            x: 700,
            ease: 'Sine.easeInOut',
            duration: 2000,
            yoyo: true
        }]

        
    })

    this.mostro2 = this.physics.add.sprite(1100, 840, 'mostro');
    this.mostro2.setScale(1);
    this.mostro2.setBounce(0.2);
    this.mostro2.setCollideWorldBounds(true);
    
    this.tweens.timeline({

        targets: this.mostro2,
        loop: 2120,

        tweens: [{
            x: 700,
            ease: 'Sine.easeInOut',
            duration: 2000,
            yoyo: true
        }]

        
    })

    this.mostro3 = this.physics.add.sprite(10, 400, 'mostro');
    this.mostro3.setScale(1);
    this.mostro3.setBounce(0.2);
    this.mostro3.setCollideWorldBounds(true);
    
    this.tweens.timeline({

        targets: this.mostro3,
        loop: 2120,

        tweens: [{
            x: 200,
            ease: 'Sine.easeInOut',
            duration: 2000,
            yoyo: true
        }]

        
    })

    
}

 
}