var cyclingPalette = [];

function colour(red, green, blue)
{
	this.red = red;
	this.green = green;
	this.blue = blue;
}

cyclingPalette[0] = new colour(252, 244, 171);
cyclingPalette[1] = new colour(252, 244, 186);
cyclingPalette[2] = new colour(252, 228, 90);
cyclingPalette[3] = new colour(252, 244, 196);
cyclingPalette[4] = new colour(252, 228, 102);
cyclingPalette[5] = new colour(252, 244, 204);
cyclingPalette[6] = new colour(244, 212, 81);
cyclingPalette[7] = new colour(252, 220, 84);
cyclingPalette[8] = new colour(252, 236, 180);
cyclingPalette[9] = new colour(236, 196, 75);
cyclingPalette[10] = new colour(252, 212, 84);
cyclingPalette[11] = new colour(252, 220, 116);
cyclingPalette[12] = new colour(252, 232, 168);
cyclingPalette[13] = new colour(244, 228, 178);
cyclingPalette[14] = new colour(244, 204, 84);
cyclingPalette[15] = new colour(252, 212, 92);
cyclingPalette[16] = new colour(244, 204, 92);
cyclingPalette[17] = new colour(236, 196, 89);
cyclingPalette[18] = new colour(252, 212, 100);
cyclingPalette[19] = new colour(252, 220, 124);
cyclingPalette[20] = new colour(252, 236, 188);
cyclingPalette[21] = new colour(248, 200, 75);
cyclingPalette[22] = new colour(252, 204, 84);
cyclingPalette[23] = new colour(244, 204, 100);
cyclingPalette[24] = new colour(252, 212, 108);
cyclingPalette[25] = new colour(252, 212, 116);
cyclingPalette[26] = new colour(252, 218, 132);
cyclingPalette[27] = new colour(234, 219, 183);
cyclingPalette[28] = new colour(244, 196, 84);
cyclingPalette[29] = new colour(252, 204, 92);
cyclingPalette[30] = new colour(244, 196, 92);
cyclingPalette[31] = new colour(252, 204, 100);
cyclingPalette[32] = new colour(252, 212, 124);
cyclingPalette[33] = new colour(252, 217, 140);
cyclingPalette[34] = new colour(241, 210, 143);
cyclingPalette[35] = new colour(234, 214, 169);
cyclingPalette[36] = new colour(236, 176, 60);
cyclingPalette[37] = new colour(236, 183, 74);
cyclingPalette[38] = new colour(252, 196, 84);
cyclingPalette[39] = new colour(244, 196, 100);
cyclingPalette[40] = new colour(252, 204, 108);
cyclingPalette[41] = new colour(252, 218, 151);
cyclingPalette[42] = new colour(239, 212, 155);
cyclingPalette[43] = new colour(245, 185, 74);
cyclingPalette[44] = new colour(244, 188, 84);
cyclingPalette[45] = new colour(252, 196, 92);
cyclingPalette[46] = new colour(234, 182, 89);
cyclingPalette[47] = new colour(244, 196, 108);
cyclingPalette[48] = new colour(248, 201, 119);
cyclingPalette[49] = new colour(233, 171, 73);
cyclingPalette[50] = new colour(252, 188, 84);
cyclingPalette[51] = new colour(244, 188, 92);
cyclingPalette[52] = new colour(252, 196, 100);
cyclingPalette[53] = new colour(244, 188, 100);
cyclingPalette[54] = new colour(252, 196, 108);
cyclingPalette[55] = new colour(218, 181, 119);
cyclingPalette[56] = new colour(232, 201, 152);
cyclingPalette[57] = new colour(244, 180, 84);
cyclingPalette[58] = new colour(252, 188, 92);
cyclingPalette[59] = new colour(244, 188, 108);
cyclingPalette[60] = new colour(234, 183, 104);
cyclingPalette[61] = new colour(233, 194, 137);
cyclingPalette[62] = new colour(224, 188, 132);
cyclingPalette[63] = new colour(244, 220, 184);
cyclingPalette[64] = new colour(245, 172, 74);
cyclingPalette[65] = new colour(252, 180, 81);
cyclingPalette[66] = new colour(244, 180, 92);
cyclingPalette[67] = new colour(252, 188, 100);
cyclingPalette[68] = new colour(216, 169, 104);
cyclingPalette[69] = new colour(232, 185, 119);
cyclingPalette[70] = new colour(252, 180, 92);
cyclingPalette[71] = new colour(233, 169, 89);
cyclingPalette[72] = new colour(244, 180, 100);
cyclingPalette[73] = new colour(252, 188, 108);
cyclingPalette[74] = new colour(246, 203, 150);
cyclingPalette[75] = new colour(236, 204, 165);
cyclingPalette[76] = new colour(244, 171, 89);
cyclingPalette[77] = new colour(252, 180, 100);
cyclingPalette[78] = new colour(244, 180, 108);
cyclingPalette[79] = new colour(246, 186, 120);
cyclingPalette[80] = new colour(219, 181, 138);
cyclingPalette[81] = new colour(245, 172, 101);
cyclingPalette[82] = new colour(252, 180, 108);
cyclingPalette[83] = new colour(233, 170, 103);
cyclingPalette[84] = new colour(230, 171, 120);
cyclingPalette[85] = new colour(245, 153, 106);

function inCyclingPalette(red, green, blue)
{
	for (var l = 0; l < cyclingPalette.length; l++)
	{
		var currentColour = cyclingPalette[l];
		if (red == currentColour.red && green == currentColour.green && blue == currentColour.blue)
			return l;
	}
	return -1;
}

function activePixel(dataIndex, currentCyclingDirection, currentPaletteIndex)
{
	this.dataIndex = dataIndex;
	this.currentCyclingDirection = currentCyclingDirection;
	this.currentPaletteIndex = currentPaletteIndex;
}

function cyclePixel(activePixel)
{
	// case for going "forwards" in the cyclingPalette array
	if (activePixel.currentCyclingDirection == 1)
	{
		if (activePixel.currentPaletteIndex == cyclingPalette.length - 1)
		{
			activePixel.currentCyclingDirection = 0;
			activePixel.currentPaletteIndex--;
			return activePixel;
		}
		else
		{
			activePixel.currentPaletteIndex++;
			return activePixel;
		}
	}
	if (activePixel.currentCyclingDirection == 0)
	{
		if (activePixel.currentPaletteIndex == 0)
		{
			activePixel.currentCyclingDirection = 1;
			activePixel.currentPaletteIndex++;
			return activePixel;
		}
		else
		{
			activePixel.currentPaletteIndex--;
			return activePixel;
		}
	}
	return activePixel;
}
