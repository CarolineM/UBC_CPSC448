function sceneryView (x, y, tweeningDuration) 
{
	// (x,y) correspond to the topleft, image-relative 
	// coordinates of the current view
	this.x = x;
	this.y = y;

	// (vX, vY) correspond to the current x and y component
	// velocities
	this.vX;
	this.vY;

	// Corresponds to the start position of the current tween
	this.initialX;
	this.initialY;

	// Corresponds to the total change in X, Y needed for the current tween
	this.changeInX;
	this.changeInY;


	// The total number of animation frames for the tween, 1-indexed.
	this.totalTweeningFrames = tweeningDuration;

	// The number of the current tweening frame, 1-indexed.
	this.currentFrameNumber = 1;

	this.getNextPosition_LinearTween = function (targetX, targetY, animationRequest)
	{
		// If we're in the first frame of the tween, set the initial (x,y)
		//  and calculate the 
		if (this.currentFrameNumber == 1)
		{
			this.initialX = this.x;
			this.initialY = this.y;

			this.changeInX = targetX - this.initialX;
			this.changeInY = targetY - this.initialY;
		}

		this.x = this.changeInX * this.currentFrameNumber / this.totalTweeningFrames + this.initialX;
		this.y = this.changeInY * this.currentFrameNumber / this.totalTweeningFrames + this.initialY;

		this.currentFrameNumber++;

		if (this.currentFrameNumber > this.totalTweeningFrames)
		{
			window.cancelRequestAnimationFrame(animationRequest);
			this.currentFrameNumber = 1;
		}

		return {updatedX: this.x, updatedY: this.y};
	};

	this.getNextPosition_QuadraticTween = function (targetX, targetY, animationRequest)
	{
		if (this.currentFrameNumber == 1)
		{
			this.initialX = this.x;
			this.initialY = this.y;

			this.changeInX = targetX - this.initialX;
			this.changeInY = targetY - this.initialY;
		}

		this.x = this.changeInX * this.currentFrameNumber / this.totalTweeningFrames + this.initialX;
		this.y = this.changeInY * this.currentFrameNumber / this.totalTweeningFrames + this.initialY;

		this.currentFrameNumber++;

		if (this.currentFrameNumber > this.totalTweeningFrames)
		{
			window.cancelRequestAnimationFrame(animationRequest);
			this.currentFrameNumber = 1;
		}

		return {updatedX: this.x, updatedY: this.y};
	};


};





