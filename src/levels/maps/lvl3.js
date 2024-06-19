export const lvl3 = [
    "                                                                                              ",
    "                                                                                              ",
    "                                                                                              ",
    "                                                                                              ",
    "                                      -?-                                                     ",
    "                                                                                              ",
    "                                                                                              ",
    "      -?-b-                    O               O                                              ",
    "                              OO               OO                                             ",
    "                             OOO               OOO                                            ",
    "                            OOOO       _       OOOO                                           ",
    "                           OOOOO       |       OOOOO                                          ",
    "                          OOOOOO       |       OOOOOO                                         ",
    "       E                 OOOOOOO       |       OOOOOOO          E    E                H       ",
    "================     =========================================================================",
    "================     =========================================================================",
]

export function addBgLvl3() {
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