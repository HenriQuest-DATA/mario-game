export const lvl2 = [
    "                                                                                             ",
    "                                                                                             ",
    "                                                                                             ",
    "                                       b                                                     ",
    "                                                                                             ",
    "                                   -?-                                                       ",
    "                                                                                             ",
    "      -?-b-                  -?-                                                             ",
    "                                                                                             ",
    "                                                                                             ",
    "                                                                                             ",
    "                                                                                             ",
    "       _                                            _                                        ",
    "       |                                            |          E    E            H           ",
    "================     ========================================================================",
    "================     ========================================================================",
]

export function addBgLvl2() {
    add([
        sprite('cloud'),
        pos(20, 50),
        layer('bg'),
    ]);

    add([
        sprite('hill'),
        pos(32, 208),
        layer('bg'),
        origin('bot'),
    ])

    add([
        sprite('shrubbery'),
        pos(32, 208),
        layer('bg'),
        origin('bot'),
    ])
}