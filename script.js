/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas')

const ctx = canvas.getContext('2d')

const canvasWidth = 300
const canvasHeight = 600
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

drawArcs()
