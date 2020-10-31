class Slingshot{
    constructor(bodyX, coordinate){

        var options = {
            bodyA: bodyX,
            pointB: coordinate
        }
        this.sling = Constraint.create(options)
        World.add(world, this.sling);
        this.coord = coordinate;
    }
    fly(){
        this.sling.bodyA = null
    }
    display(){
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position
            var pointB = this.coord;
            //var pointX = this.bodyX.position
            //var pointY = this.bodyY.position
            strokeWeight(6)
            //line(pointX.x, pointX.y, pointY.x, pointY.y)    
            line(pointA.x, pointA.y, pointB.x, pointB.y)    
        }
        
    }
}