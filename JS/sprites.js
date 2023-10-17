class Sprite{
    constructor({position, dimensions}){
        this.position = position
        this.width = dimensions.width
        this.height = dimensions.height
    }
    draw() {
        ctx.fillStyle = "White"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const player = new Sprite({
    position: {
        x: 0, 
        y:0
    },
    dimensions: {
        with: 50, 
        height: 100
    }
}) 