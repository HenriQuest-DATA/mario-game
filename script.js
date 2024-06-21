import { handleKeyCommands } from './src/commands/keyCommands.js';
import { getLevelConfigs } from './src/configs/levelConfigs.js';
import { loadAssets } from './src/configs/loadAssets.js';
import { playerActions } from './src/game-logic/playerActions.js';
import { MAPS } from './src/levels/MAPS.js';
import { getLevelBg } from './src/levels/backgrounds.js';
import { canSquash } from './src/states/canSquash.js';

kaboom({
    background: [146, 144, 255],
    fullscreen: true,
    scale: 2.5
})

loadAssets();

const LEVELS = MAPS;

const levelConf = getLevelConfigs(vec2);

scene('start', () => {
    add([
        text('Pressione ENTER', {size: 24}),
        pos(vec2(width() / 2, height() / 2)),
        origin('center'),
        color(255, 255, 255),
    ]);

    keyRelease('enter', () => {
        go('game');
    });
});

go('start');

scene('game', (levelNumber = 0) => {
    layers(['bg', 'game', 'ul', 'ui'], 'game');

    const level = addLevel(LEVELS[levelNumber], levelConf);

    getLevelBg(levelNumber + 1)();

    add([
        text('Level ' + (levelNumber + 1), {size: 24}),
        pos(vec2(width() / 2, height() / 2)),
        color(255, 255, 255),
        origin('center'),
        layer('ui'),
        lifespan(1, {fade: 0.5}),
    ])

    const player = level.spawn('p', 1, 10);
    const SPEED = 120;

    handleKeyCommands(player, SPEED, canSquash);

    playerActions(player, SPEED, canSquash, level, levelNumber, LEVELS);
});