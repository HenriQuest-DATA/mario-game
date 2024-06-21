export function mario(){
    return {
        id: 'mario',
        require: ['body', 'area', 'sprite', 'bump'],
        smallAnimation: 'Running',
        bigAnimation: 'RunningBig',
        flamingAnimation: 'Loop',
        smallStopFrame: 0,
        bigStopFrame: 8,
        flamingStopFrame: 17,
        smallJumpFrame: 5,
        bigJumpFrame: 13,
        flamingJumpFrame: 22,
        isBig: false,
        isFlaming: false,
        isAlive: true,
        update(){
            if(this.isFrozen) {
                this.standing();
                return;
            }
            if(!this.grounded()){
                this.jumping();
            } else {
                if(keyIsDown('left') || keyIsDown('right')){
                    this.running();
                } else {
                    this.standing();
                }
            }
        },
        flaming(){
            this.isFlaming = true;
            this.isBig = false;
            this.area.width = 24;
            this.area.height = 32;
        },
        big(){
            this.isBig = true;
            this.isFlaming = false;
            this.area.width = 24;
            this.area.height = 32;
        },
        small(){
            this.isBig = false;
            this.isFlaming = false;
            this.area.width = 16;
            this.area.height = 16;
        },
        standing(){
            if(this.isFlaming){
                this.frame = this.flamingStopFrame;
            } else if(this.isBig){
                this.frame = this.bigStopFrame;
            } else {
                this.frame = this.smallStopFrame;
            }
        },
        jumping(){
            if(this.isFlaming){
                this.frame = this.flamingJumpFrame;
            } else if(this.isBig){
                this.frame = this.bigJumpFrame;
            } else {
                this.frame = this.smallJumpFrame;
            }
        },
        running(){
            var animation;
            if(this.isFlaming){
                animation = this.flamingAnimation;
            } else if(this.isBig){
                animation = this.bigAnimation;
            } else {
                animation = this.smallAnimation;
            }
            if(this.curAnim() !== animation){
                this.play(animation);
            }
        },
        freeze(){
            this.isFrozen = true;
        },
        die(){
            this.unuse('body');
            this.isAlive = false;
            this.bump();
            this.freeze();
            this.use(lifespan(1, {fade: 0.5}));
        }
    }
}