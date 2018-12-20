const canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
// context.rect(100,100,300,300)
// context.stroke()

// context.moveTo(100,100)
// context.lineTo(400,400)
// context.lineTo(100,400)
// context.lineTo(400,100)
// context.lineTo(100,100)
// context.stroke()


// context.beginPath()
// context.arc(100,75,50,0,1.5* Math.PI)
// context.fillStyle='#0044ff'
// context.fill()
// context.strokeStyle = '#ff0'
// context.lineWidth = 10
// context.stroke()


function Ball(x,y,r){
    this.x = x
    this.y = y
    this.sr = 0
    this.er = Math.PI * 2
    this.r = r
    this.xDirection = 1
    this.yDirection = 1
}

// Ball.prototype.drawBall = function(){
//     context.beginPath()
//     context.arc(this.x, this.y, this.r, this.sr, this.er)
//     context.fillStyle = "#0044ff"
//     context.fill()
// }



Ball.prototype.updateBallPosition = function(){
    if(this.x >= 450){
        this.xDirection = -this.xDirection
    }else if(this.x <= 50){
        this.xDirection = -this.xDirection
    }
    if(this.y >= 450){
        this.yDirection = -this.yDirection
    }else if(this.y <= 50){
        this.yDirection = -this.yDirection
    }
    this.x += 5 * this.xDirection
    this.y += 5 * this.yDirection
}

function drawBalls(){
    context.clearRect(0,0,500,500)
    bouncyBalls.forEach((ball)=>{
        context.beginPath()
        context.arc(ball.x, ball.y, ball.r, ball.sr, ball.er)
        context.fillStyle = "#0044ff"
        context.fill()
    })
    
}

aBall = new Ball(100,100,50)
anotherBall = new Ball(400,400,100)
thirdBall = new Ball(90,200,40)

let bouncyBalls = [aBall,anotherBall,thirdBall]

bouncyBalls.forEach((currBall)=>{
    setInterval(()=>{
        currBall.updateBallPosition()
    },24)
})
setInterval(drawBalls,33)