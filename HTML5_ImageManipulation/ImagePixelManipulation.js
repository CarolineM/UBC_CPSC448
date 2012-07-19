function draw(image, context) {
	context.drawImage(image, 0, 0);
	context.rotate(Math.PI / 21);
}
		
		
function onMouseClick(e) {
		
}

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

/*
 * Checks to see if value falls between first and last.
 */
function between(first, last, value)
{
	return (first < last ? value >= first && value <= last : value >= last && value <= first);
}