import { patrol } from "./patrol.js";

export function enemy(){
    return {
        id: 'enemy',
        require: ['pos', 'area', 'sprite', 'patrol'],
        isAlive: true,
        update(){},
        squash(){
            this.isAlive = false;
            this.unuse('patrol');
            this.stop();
            this.frame = 2;
            this.area.width = 16;
            this.area.height = 8;
            this.use(lifespan(0.5, {fade: 0.1}));
        },
        koopaHidding(){
            this.isAlive = false;
            this.unuse('patrol');
            this.stop();
            this.frame = 5;
        
            setTimeout(() => {
                this.isAlive = true;
                this.use(patrol(50));
                this.use(sprite('enemies', {anim: 'Walk'}));
            }, 3000);
        },
    }
}