import { bump } from '../game-logic/bump.js';
import { enemy } from '../game-logic/enemy.js';
import { mario } from '../game-logic/mario.js';
import { patrol } from '../game-logic/patrol.js';

export function getLevelConfigs(vec2) {
    return {
        width: 16,
        height: 16,
        pos: vec2(0, 0),
        '=': () => [
            sprite('ground'),
            area(),
            solid(),
            origin('bot'),
            'ground'
        ],
        '-': () => [
            sprite('brick'),
            area(),
            solid(),
            origin('bot'),
            'brick'
        ],
        'O': () => [
            sprite('tile'),
            area(),
            solid(),
            origin('bot'),
            'tile'
        ],
        'H': () => [
            sprite('castle'),
            area({
                width: 1,
                height: 240
            }),
            origin('bot'),
            'castle'
        ],
        '?': () => [
            sprite('questionBox'),
            area(),
            solid(),
            origin('bot'),
            'questionBox',
            'coinBox'
        ],
        'b': () => [
            sprite('questionBox'),
            area(),
            solid(),
            origin('bot'),
            'questionBox',
            'mushyBox'
        ],
        '!': () => [
            sprite('emptyBox'),
            area(),
            solid(),
            bump(),
            origin('bot'),
            'emptyBox'
        ],
        'c': () => [
            sprite('coin'),
            area(),
            solid(),
            bump(64, 0),
            cleanup(),
            lifespan(0.4, {fade: 0.01}),
            origin('bot'),
            'coin'
        ],
        'f': () => [
            sprite('flower'),
            area(),
            solid(),
            cleanup(),
            origin('bot'),
            'flower'
        ],
        'M': () => [
            sprite('bigMushy'),
            area(),
            solid(),
            patrol(10000),
            body(),
            cleanup(),
            origin('bot'),
            'bigMushy'
        ],
        '|': () => [
            sprite('pipeBottom'),
            area(),
            solid(),
            origin('bot'),
            'pipe'
        ],
        '_': () => [
            sprite('pipeTop'),
            area(),
            solid(),
            origin('bot'),
            'pipe'
        ],
        'E': () => [
            sprite('enemies', {anim: 'Walking'}),
            area({
                width: 16,
                height: 16
            }),
            solid(),
            body(),
            enemy(),
            patrol(50),
            origin('bot'),
            'badGuy'
        ],
        'V': () => [
            sprite('enemies', {anim: 'Piranha'}),
            area({
                width: 16,
                height: 16
            }),
            body(),
            origin('bot'),
            'piranha'
        ],
        'K': () => [
            sprite('enemies', {anim: 'Walk'}),
            area({
                width: 16,
                height: 16
            }),
            solid(),
            body(),
            enemy(),
            patrol(50),
            origin('bot'),
            'koopa'
        ],
        'p': () => [
            sprite('mario', {frame: 0}),
            area({
                width: 16,
                height: 16
            }),
            body(),
            mario(),
            bump(150, 8, false),
            origin('bot'),
            'player'
        ],
    };
};