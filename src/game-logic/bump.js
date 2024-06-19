export function bump(offset = 8, speed = 2, stopAtOrigin = true){
    return {
        id: 'bump',
        require: ['pos'],
        bumpOffset: offset,
        speed: speed,
        bumped: false,
        originPos: 0,
        direction: -1,
        update(){
            if(this.bumped){
                this.pos.y = this.pos.y + this.direction * this.speed;
                if(this.pos.y < this.originPos - this.bumpOffset){
                    this.direction = 1;
                }
                if(stopAtOrigin && this.pos.y >= this.originPos){
                    this.bumped = false;
                    this.pos.y = this.originPos;
                    this.direction = -1;
                }
            }
        },
        bump(){
            this.bumped = true;
            this.originPos = this.pos.y;
        },
    }
};