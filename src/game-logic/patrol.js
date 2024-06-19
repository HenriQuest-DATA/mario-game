export function patrol(distance = 100, speed = 50, dir = 1) {
    return {
        id: 'patrol',
        require: ['pos', 'area'],
        startingPos: vec2(0, 0),
        shouldChangeDirection: false,
        add(){
            this.startingPos = this.pos;
            this.on('collide', (obj, side) => {
                if(side === 'right' || side === 'left'){
                    this.shouldChangeDirection = true;
                }
            });
        },
        update(){
            if(this.shouldChangeDirection || Math.abs(this.pos.x - this.startingPos.x) >= distance){
                dir = -dir;
                this.flipX(dir === 1);
                this.shouldChangeDirection = false;
            }
            this.move(speed * dir, 0);
        }
    }
}