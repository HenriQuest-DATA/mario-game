export function killed(player) {
    if(!player.isAlive) return;
    player.die();
    add([
        text('Você morreu!', {size: 24}),
        pos(toWorld(vec2(width() / 2, height() / 2))),
        color(255, 255, 255),
        origin('center'),
        layer('ui'),
    ]);
    wait(3, () => {
        go('start', 0);
    });
}