function getScoreLevel(score) {
	if (score>=90 && score<100)
		return "S";
	else if (score>=80 && score<90)
		return "A";
	else if (score>=70 && score<80)
		return "B";
	else if (score>=60 && score<70)
		return "C";
	else if (score>=0 && score<60)
		return "D";
	else
		throw new Error("not a correct score");
}
