import { addBgLvl1 } from '/lvl1.js';
import { addBgLvl2 } from '/lvl2.js';
import { addBgLvl3 } from '/lvl3.js';
import { addBgLvl4 } from '/lvl4.js';
import { addBgLvl5 } from '/lvl5.js';

const levelBgFunctions = {
    1: addBgLvl1,
    2: addBgLvl2,
    3: addBgLvl3,
    4: addBgLvl4,
    5: addBgLvl5,
};

export function getLevelBg(level) {
    return levelBgFunctions[level] || (() => {});
}