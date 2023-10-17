var level = 1;

function collectStar(player, star) {
    star.disableBody(true, true);

    //  Add and update the score
    console.log(this.score);

    this.score += 10;
    this.scoreText.setText('Score: ' + this.score);
    
    
    if (this.score >= 1520) {

        switch (level) {
            case 1:
                level++;
                this.scene.remove("SceneA");
                this.scene.stop("SceneA");
                this.scene.start("SceneB");
                
                
                break;
            case 2:
                window.location.reload(false);
                break;
    
        }
    }

    if (this.stars.countActive(true) === 0) {

        //  A new batch of stars to collect
        this.stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var prof = this.prof.create(x, 16, 'prof');
        prof.setBounce(1);
        prof.setCollideWorldBounds(true);
        prof.setVelocity(Phaser.Math.Between(-200, 200), 20);
        prof.allowGravity = false;


    }
}


function hitprof(player, prof) {
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    this.gameOver = true;

    this.scene.stop();

    window.location.reload(false);

}

function hitEnemy(player, mostro) {

    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    this.gameOver = true;

    this.scene.stop();

    window.location.reload(false);
}