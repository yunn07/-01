let ctx;
function setup() {
	//基礎設定
	createCanvas(800, 500);
	background(100);
	ctx = canvas.getContext('2d');
	ctx.lineWidth = 50;
	ctx.lineCap = 'round'
	//------
	gradientLine(ctx, 60, 60, 300, 380, '#9a8c98', '#4a4e69')
	gradientLine(ctx, 720, 120, 80, 300, '#98c1d9', '#3d5a80')
	gradientLine(ctx, 520, 70, 500, 440, '#ddbea9', '#6b705c')
}


// 以下函數主要畫從(x1,y1)~(x2,y2)間，顏色為c1到c2的變化

function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}