export function handleKeyCommands(player, SPEED, canSquash) {
    keyDown('right', () => {
        if(player.isFrozen) return;
        player.flipX(false);
        player.move(SPEED, 0);
    });

    keyDown('left', () => {
        if(player.isFrozen) return;
        player.flipX(true);
        if(toScreen(player.pos).x > 20){
            player.move(-SPEED, 0);
        }
    });

    keyPress('space', () => {
        if(player.isAlive && player.grounded()){
            player.jump();
            canSquash.value = true;
        }
    });
}