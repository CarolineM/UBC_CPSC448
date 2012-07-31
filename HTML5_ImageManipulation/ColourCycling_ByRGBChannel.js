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

function incrementRGBCounters()
{
	cycleDistanceCounterRed++;
	//cycleDistanceCounterGreen++;
	//cycleDistanceCounterBlue++;
}

var cycleDistanceCounterRed = 0;
var cycleDistanceCounterGreen = 0;
var cycleDistanceCounterBlue = 0;
/*
 * Returns 1 if we're cycling "forwards" (incrementing colour values), 
 * 0 if we're cycling "backwards".
 */
function getCycleDirectionRed()
{
	var difference = redUpperLimit - redLowerLimit;
	if (cycleDistanceCounterRed <= difference)
	{
		return 1;
	}
	if (cycleDistanceCounterRed <= 2*difference)
	{
		if (cycleDistanceCounterRed == 2*difference)
			cycleDistanceCounterRed = 0;
			
		return 0;
	}
}

function getCycleDirectionGreen()
{
	var difference = greenUpperLimit - greenLowerLimit;
	if (cycleDistanceCounterGreen <= difference)
	{
		return 1;
	}
	if (cycleDistanceCounterGreen <= 2*difference)
	{
		if (cycleDistanceCounterGreen == 2*difference)
			cycleDistanceCounterGreen = 0;
			
		return 0;
	}
}

function getCycleDirectionBlue()
{
	var difference = blueUpperLimit - blueLowerLimit;
	if (cycleDistanceCounterBlue <= difference)
	{
		return 1;
	}
	if (cycleDistanceCounterBlue <= 2*difference)
	{
		if (cycleDistanceCounterBlue == 2*difference)
			cycleDistanceCounterBlue = 0;
			
		return 0;
	}
}

function cycleRedChannel(redValue)
{
	if ( (redValue < redUpperLimit) && getCycleDirectionRed())
		return redValue + 1;
	else if ( (redValue > redLowerLimit) && !getCycleDirectionRed())
		return redValue - 1;
		
	return redLowerLimit + 29;
}

function cycleGreenChannel(greenValue)
{
	if ( (greenValue < greenUpperLimit) && getCycleDirectionGreen())
		return greenValue + 1;
	else if ( (greenValue > greenLowerLimit) && !getCycleDirectionGreen())
		return greenValue - 1;
		
	return greenLowerLimit + 29;
}

function cycleBlueChannel(blueValue)
{
	if ( (blueValue < blueUpperLimit) && getCycleDirectionBlue())
		return blueValue + 1;
	else if ( (blueValue > blueLowerLimit) && !getCycleDirectionBlue())
		return blueValue - 1;
		
	return blueLowerLimit + 29;
}


/*
 * Checks to see if value falls between first and last.
 */
function between(first, last, value)
{
	return (first < last ? value >= first && value <= last : value >= last && value <= first);
}