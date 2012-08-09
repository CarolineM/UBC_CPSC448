function sceneryView (x, y) 
{
	// (x,y) correspond to the topleft, image-relative 
	// coordinates of the current view
	this.x = x;
	this.y = y;

	// (vX, vY) correspond to the current x and y component
	// velocities
	this.vX;
	this.vY;

	// Between 0 and 1;
	this.easingConstant = 0.02;

	// keep acceleration between -0.1 and 0.1
	this.aX = 0;
	this.aY = 0;

	this.updateView = function (targetX, targetY) 
	{
		var diffX = targetX - this.x,
			diffY = targetY - this.y,
			isOnTarget,
			distance = Math.sqrt(diffX * diffX + diffY * diffY);

		this.vX = diffX * this.easingConstant;
		this.vY = diffY * this.easingConstant;


		this.x += this.vX;
		this.y += this.vY;

		if (distance <= 5)
			isOnTarget = true;
		else
			isOnTarget = false;

		return {updatedX: this.x, 
				updatedY: this.y,
				areWeThereYet: isOnTarget};
	};
};





