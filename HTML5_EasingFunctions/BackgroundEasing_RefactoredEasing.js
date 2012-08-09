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
	this.totalChangeInX;
	this.totalChangeInY;


	// The total number of animation frames for the tween, 1-indexed.
	this.totalTweeningFrames = tweeningDuration;

	// The number of the current tweening frame, 1-indexed.
	this.currentFrameNumber = 0;

	this.getNextPosition_LinearTween = function (targetX, targetY, animationRequest)
	{
		// If we're in the first frame of the tween, set the initial (x,y)
		//  and calculate the 
		if (this.currentFrameNumber == 1)
		{
			this.initialX = this.x;
			this.initialY = this.y;

			this.totalChangeInX = targetX - this.initialX;
			this.totalChangeInY = targetY - this.initialY;
		}

		this.x = this.totalChangeInX * this.currentFrameNumber / this.totalTweeningFrames + this.initialX;
		this.y = this.totalChangeInY * this.currentFrameNumber / this.totalTweeningFrames + this.initialY;

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
		if (this.currentFrameNumber == 0)
		{
			this.initialX = this.x;
			this.initialY = this.y;

			this.totalChangeInX = targetX - this.initialX;
			this.totalChangeInY = targetY - this.initialY;
		}

		this.x = Math.easeInOutQuad( this.currentFrameNumber, this.initialX, this.totalChangeInX, this.totalTweeningFrames);
		this.y = Math.easeInOutQuad( this.currentFrameNumber, this.initialY, this.totalChangeInY, this.totalTweeningFrames);

		this.currentFrameNumber++;

		if (this.currentFrameNumber > this.totalTweeningFrames)
		{
			window.cancelRequestAnimationFrame(animationRequest);
			this.currentFrameNumber = 0;
		}

		return {updatedX: this.x, updatedY: this.y};
	};
};

Math.easeInOutQuad = function ( time, begin, change, duration)
{
	var fractionOfHalfTweenCompleted = time / (duration / 2);

	// If we're in the first half of the tween, use quadratic ease-in
	if (fractionOfHalfTweenCompleted < 1)
		return ((change / 2) * fractionOfHalfTweenCompleted * fractionOfHalfTweenCompleted + begin);
	else
		return ((-change / 2) * ((--fractionOfHalfTweenCompleted) * (fractionOfHalfTweenCompleted - 2) - 1) + begin);
};






