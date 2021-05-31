/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas')

const ctx = canvas.getContext('2d')

const canvasWidth = 500
const canvasHeight = 500
const retinaRatio = 2

canvas.width = canvasWidth
canvas.height = canvasHeight
ctx.scale(retinaRatio, retinaRatio)
canvas.style.width = `${canvasWidth / retinaRatio}px`
canvas.style.height = `${canvasHeight / retinaRatio}px`

function example1() {
  ctx.fillRect(25, 25, 100, 100)
  ctx.clearRect(45, 45, 60, 60)
  ctx.strokeRect(50, 50, 50, 50)
}

function drawRedTriangle() {
  ctx.beginPath()
  ctx.fillStyle = '#ff0000'
  ctx.moveTo(75, 50)
  ctx.lineTo(100, 75)
  ctx.lineTo(100, 25)
  ctx.fill()
}

function drawSmileyFace() {
  ctx.beginPath()
  /**
   * Outer circle
   * x, y of arc() is the center of a circle
   */
  ctx.arc(75, 75, 50, 0, -Math.PI * 2, true)
  ctx.moveTo(110, 75)
  ctx.arc(75, 75, 35, 0, Math.PI, false) // Mouth (clockwise)
  ctx.moveTo(65, 65)
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true)
  ctx.moveTo(95, 65)
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true)
  ctx.stroke()
}

function drawLines() {
  ctx.beginPath()
  ctx.moveTo(25, 25)
  ctx.lineTo(105, 25)
  ctx.lineTo(25, 105)
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(125, 125)
  ctx.lineTo(125, 45)
  ctx.lineTo(45, 125)
  ctx.closePath()
  ctx.stroke()
}

function drawArcs() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath()
      const x = 25 + j * 50 // x coordinate
      const y = 25 + i * 50 // y coordinate
      const radius = 20 // Arc radius
      const startAngle = 0 // Starting point on circle
      const endAngle = Math.PI + (Math.PI * j) / 2 // End point on circle
      const counterclockwise = i % 2 !== 0 // clockwise or counterclockwise

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise)

      if (i > 1) {
        ctx.fill()
      } else {
        ctx.stroke()
      }
    }
  }
}

function drawSpeechBalloon() {
  ctx.beginPath()
  ctx.moveTo(75, 25)
  ctx.quadraticCurveTo(25, 25, 25, 62.5)
  ctx.quadraticCurveTo(25, 100, 50, 100)
  ctx.quadraticCurveTo(50, 120, 30, 125)
  ctx.quadraticCurveTo(60, 120, 65, 100)
  ctx.quadraticCurveTo(125, 100, 125, 62.5)
  ctx.quadraticCurveTo(125, 25, 75, 25)
  ctx.stroke()
}

function drawHeart() {
  ctx.beginPath()
  ctx.moveTo(75, 40)
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25)
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120)
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5)
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25)
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40)
  ctx.fillStyle = '#ff0000'
  ctx.fill()
}

drawHeart()
