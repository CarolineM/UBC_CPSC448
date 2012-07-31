
/*
 * Given the RGB values of a single pixel, this function returns 1 if our 
 * pixel falls within the hard-coded colour range.
 */
 var redUpperLimit = 255;
 var redLowerLimit = 225;
 var greenUpperLimit = 230;
 var greenLowerLimit = 175;
 var blueUpperLimit = 120;
 var blueLowerLimit = 65;
function inColourRange(red, green, blue)
{
	if ( between(redUpperLimit, redLowerLimit, red) )
	{
		if ( between(greenUpperLimit, greenLowerLimit, green) )
		{
			if (between(blueUpperLimit, blueLowerLimit, blue) )
			{
				return 1;
			}
			return 0;
		}
		return 0;
	}
	return 0;
}

var redStepSize = Math.ceil(Math.max(redUpperLimit - redLowerLimit, greenUpperLimit - greenLowerLimit, blueUpperLimit - blueLowerLimit)/(redUpperLimit - redLowerLimit));
var greenStepSize = Math.ceil(Math.max(redUpperLimit - redLowerLimit, greenUpperLimit - greenLowerLimit, blueUpperLimit - blueLowerLimit)/(greenUpperLimit - greenLowerLimit));
var blueStepSize = Math.ceil(Math.max(redUpperLimit - redLowerLimit, greenUpperLimit - greenLowerLimit, blueUpperLimit - blueLowerLimit)/(blueUpperLimit - blueLowerLimit));
function getNextColour(directionArray, pixelIndex, initialRed, initialGreen, initialBlue)
{
	var result = [];
	
	if ( directionArray[pixelIndex] == 1)
	{
		if ((initialRed > (redUpperLimit - redStepSize)) || (initialGreen > (greenUpperLimit - greenStepSize)) || (initialBlue > (blueUpperLimit - blueStepSize)))
		{
			directionArray[pixelIndex] = 0;
			result[0] = initialRed - redStepSize;
			result[1] = initialGreen - greenStepSize;
			result[2] = initialBlue - blueStepSize;
		}
		else
		{
			result[0] = initialRed + redStepSize;
			result[1] = initialGreen + greenStepSize;
			result[2] = initialBlue + blueStepSize;
		}
	}
	else if ( directionArray[pixelIndex] == 0)
	{
		if ((initialRed < (redLowerLimit + redStepSize)) || (initialGreen < (greenLowerLimit + greenStepSize)) || (initialBlue < (blueLowerLimit + blueStepSize)))
		{
			directionArray[pixelIndex] = 1;
			result[0] = initialRed + redStepSize;
			result[1] = initialGreen + greenStepSize;
			result[2] = initialBlue + blueStepSize;
		}
		else
		{
			result[0] = initialRed - redStepSize;
			result[1] = initialGreen - greenStepSize;
			result[2] = initialBlue - blueStepSize;
		}
	}
	return result;
}


/*
 * Checks to see if value falls between first and last.
 */
function between(first, last, value)
{
	return (first < last ? value >= first && value <= last : value >= last && value <= first);
}