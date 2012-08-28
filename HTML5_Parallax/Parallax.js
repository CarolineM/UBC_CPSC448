function parallaxOffset(focalDepth, layer0Depth, layer1Depth, layer2Depth)
{
	this.focalDepth = focalDepth;
	this.layer0Depth = layer0Depth;
	this.layer1Depth = layer1Depth;
	this.layer2Depth = layer2Depth;

	this.calculate_PerLayerTargetXY = function(focalTargetX, focalTargetY, sceneryView0, sceneryView1, sceneryView2)
	{
		var layer0X;
		var	layer0Y;
		var	layer1X;
		var	layer1Y;
		var	layer2X;
		var	layer2Y;
		var	angleX = Math.atan(dX0/this.focalDepth);
		var	angleY = Math.atan(dY0/this.focalDepth);
		var	dX0 = focalTargetX - sceneryView0.x;
		var	dY0 = focalTargetY - sceneryView0.y;
		var	dX1 = Math.tan(angleX)*Math.abs(this.focalDepth - this.layer1Depth);
		var	dY1 = Math.tan(angleY)*Math.abs(this.focalDepth - this.layer1Depth);
		var	dX2 = Math.tan(angleX)*Math.abs(this.focalDepth - this.layer2Depth);
		var	dY2 = Math.tan(angleY)*Math.abs(this.focalDepth - this.layer2Depth);

		layer0X = sceneryView0.x - dX0;
		layer0Y = sceneryView0.y + dY0;
		
		if (this.focalDepth < this.layer1Depth)
		{
			layer1X = sceneryView1.x + dX1;
			layer1Y = sceneryView1.y - dY1;
			layer2X = sceneryView2.x - dX2;
			layer2Y = sceneryView2.y + dY2;
		}
		if (this.focalDepth > this.layer1Depth)
		{
			layer1X = sceneryView1.x - dX1;
			layer1Y = sceneryView1.y + dY1;
			layer2X = sceneryView2.x + dX2;
			layer2Y = sceneryView2.y - dY2;
		}

		return {layer0X: layer0X, layer0Y: layer0Y, 
				layer1X: layer1X, layer1Y: layer1Y, 
				layer2X: layer2X, layer2Y: layer2Y};
	};
};


