const PLAYER_MALE = "max";
const PLAYER_GIRL = "iris";


var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
    scene: [SceneLanding, SceneA, SceneB] 
};
var game = new Phaser.Game(config);
