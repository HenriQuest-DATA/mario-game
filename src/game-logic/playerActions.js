import { killed } from '../game-logic/killed.js';

export function playerActions(
    player,
    SPEED,
    canSquash,
    level,
    levelNumber,
    LEVELS
) {
    player.action(() => {
        var currCam = camPos();
    
        const mapWidth = LEVELS[levelNumber][0].length;
    
        const mapHeight = LEVELS[levelNumber].length * 16;
        const camY = (mapHeight - height() / 2) - 16;
    
        camPos(vec2(currCam.x, camY));
    
        if(player.pos.x < currCam.x && player.pos.x > width() / 2) {
            camPos(player.pos.x, camY);
        } else if(
            (player.pos.x > currCam.x) && 
            (player.pos.x > (width() / 2)) && 
            (player.pos.x < ((mapWidth*16) - (width() / 2) - 6))
        ){
            camPos(player.pos.x, camY);
        }
    
        if(player.isAlive && player.grounded()){
            canSquash.value = false;
        }
    
        if(player.pos.y > height() + 16){
            killed(player);
        }
    });

    player.collides('badGuy', (b) => {
        if(!b.isAlive) return;
        if(!player.isAlive) return;
        if(canSquash.value) {
            b.squash();
        } else {
            if(player.isFlaming){
                player.big();
            } else if(player.isBig){
                player.small();
            } else {
                killed(player);
            }
        }
    });

    player.collides('koopa', (k) => {
        if(!k.isAlive) return;
        if(!player.isAlive) return;
        if(canSquash.value) {
            k.koopaHidding();
        } else {
            if(player.isFlaming){
                player.big();
            } else if(player.isBig){
                player.small();
            } else {
                killed(player);
            }
        }
    });

    player.collides('piranha', (p) => {
        if(!player.isAlive) return;
        if(player.isFlaming){
            player.big();
        } else if(player.isBig){
            player.small();
        } else {
            killed(player);
        }
    });

    player.collides('flower', (f) => {
        destroy(f);
        player.flaming();
    });

    player.collides('bigMushy', (m) => {
        destroy(m);
        player.big();
    });

    player.collides('castle', (castle, side) => {
        player.freeze();
        add([
            text('Excelente!', {size: 24}),
            pos(toWorld(vec2(width() / 2, height() / 2))),
            color(255, 255, 255),
            origin('center'),
            layer('ui'),
        ])
        wait(3, () => {
            let nextLevel = levelNumber + 1;
            if(nextLevel < LEVELS.length){
                go('game', nextLevel);
            } else {
                go('start');
            }
        });
    });

    player.on('headbutt', (obj) => {
        if(obj.is('questionBox')){
            if(obj.is('coinBox')){
                let coin = level.spawn('c', obj.gridPos.sub(0, 1));
                coin.bump();
            }
            else if(obj.is('mushyBox')){
                if(player.isBig || player.isFlaming){
                    level.spawn('f', obj.gridPos.sub(0, 1));
                } else {
                    level.spawn('M', obj.gridPos.sub(0, 1));
                }
            }
            var pos = obj.gridPos;
            destroy(obj);
            var box = level.spawn('!', pos);
            box.bump();
        }
    });
}