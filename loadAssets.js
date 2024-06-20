export function loadAssets() {
    loadRoot('/assets/sprites/');
    loadAseprite('mario', 'Mario.png', 'Mario.json');
    loadAseprite('enemies', 'enemies.png', 'enemies.json');
    loadSprite('bigMushy', 'bigMushy.png');
    loadSprite('brick', 'brick.png');
    loadSprite('castle', 'castle.png');
    loadSprite('cloud', 'cloud.png');
    loadSprite('coin', 'coin.png');
    loadSprite('emptyBox', 'emptyBox.png');
    loadSprite('flower', 'flower.png');
    loadSprite('ground', 'ground.png');
    loadSprite('hill', 'hill.png');
    loadSprite('items', 'items.png');
    loadSprite('pipe', 'pipe.png');
    loadSprite('pipeBottom', 'pipeBottom.png');
    loadSprite('pipeTop', 'pipeTop.png');
    loadSprite('questionBox', 'questionBox.png');
    loadSprite('shrubbery', 'shrubbery.png');
    loadSprite('tile', 'tile.png');

    loadRoot('/assets/sounds/');
    loadSound('abovegroundBgm', 'abovegroundBgm.ogg');
    loadSound('undergroundBgm', 'undergroundBgm.ogg');
    loadSound('breakBlock', 'breakBlock.wav');
    loadSound('bump', 'bump.wav');
    loadSound('coin', 'coin.wav');
    loadSound('fireBall', 'fireBall.wav');
    loadSound('flagPole', 'flagPole.wav');
    loadSound('itemAppear', 'itemAppear.wav');
    loadSound('jumpSmall', 'jumpSmall.wav');
    loadSound('jumpSuper', 'jumpSuper.wav');
    loadSound('kick', 'kick.wav');
    loadSound('marioDie', 'marioDie.wav');
    loadSound('pipe', 'pipe.wav');
    loadSound('powerUp', 'jumpSuper.wav');
    loadSound('stageClear', 'stageClear.wav');
    loadSound('stomp', 'stomp.wav');
}