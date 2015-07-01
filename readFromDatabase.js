// read from database
if (typeof(Storage)!== "undefined"){
	localStorage.setItem("fall_2015",['\tAAS 210-a\tMusic & Culture/African Diaspora\t\t\t\n', 'Arbino, Daniel B.\n', '17/17\tOpen\t\n', 'MWF 11:30AM - 12:30 PM; MAIN Campus, Young Hall , Classroom\n', '3.0\t08/31/2015\t12/11/2015\n', '\tAES 110-a\tAerospace Studies-I\t\t\t\n', 'Staff\n', '0/30\tOpen\t\n', '0:00 - 0:00 AM; MAIN Campus, No Description\n', '1.0\t08/31/2015\t12/11/2015\n', '\tAES 130-a\tAFROTC Leadership Seminar\trequired\t\t\n', 'Staff\n', '0/30\tOpen\t\n', '0:00 - 0:00 AM; MAIN Campus, No Description\n', '0.0\t08/31/2015\t12/11/2015\n', '\tAES 210-a\tAerospace Studies-II\t\t\t\n', 'Staff\n', '0/30\tOpen\t\n', '0:00 - 0:00 AM; MAIN Campus, No Description\n', '1.0\t08/31/2015\t12/11/2015\n', '\tAES 310-a\tAerospace Studies-III\t\t\t\n', 'Staff\n', '0/30\tOpen\t\n', '0:00 - 0:00 AM; MAIN Campus, No Description\n', '1.0\t08/31/2015\t12/11/2015\n', '\tAES 410-a\tAerospace Studies-IV\t\t\t\n', 'Staff\n', '0/30\tOpen\t\n', '0:00 - 0:00 AM; MAIN Campus, No Description\n', '1.0\t08/31/2015\t12/11/2015\n', '\tAMS 110-a\tIntroduction to the Army\t\t\t\n', 'Staff\n', '2/30\tOpen\t\n', 'T 7:30 - 9:00 PM; MAIN Campus, Young Hall , Classroom\n', '1.0\t08/31/2015\t12/11/2015\n', '\tAMS 210-a\tAdvanced Leadership-I\t\t\t\n', 'Staff\n', '3/30\tOpen\t\n', 'T 7:30 - 9:00 PM; MAIN Campus, Young Hall , Classroom\n', '1.0\t08/31/2015\t12/11/2015\n', '\tAMS 310-a\tLeadership & Management-I\t\t\t\n', 'Staff\n', '0/30\tOpen\t\n', '0:00 - 0:00 AM; MAIN Campus, No Description\n', '1.0\t08/31/2015\t12/11/2015\n', '\tAMS 410-a\tLeadership & Management-II\t\t\t\n', 'Staff\n', '0/30\tOpen\t\n', '0:00 - 0:00 AM; MAIN Campus, No Description\n', '1.0\t08/31/2015\t12/11/2015\n', '\tANT 110-a\tIntro to Cultural Anthropology\t\t\t\n', 'Cutright, Robyn E.\n', '19/20\tOpen\t\n', 'MWF 10:20 - 11:20 AM; MAIN Campus, Crounse Academic Center , Tech classroom w/ tables\n', '3.0\t08/31/2015\t12/11/2015\n', '\tANT 110-b\tIntro to Cultural Anthropology\t\t\t\n', 'Passariello, Phyllis\n', '20/20\tClosed\t\n', 'TR 8:00 - 9:30 AM; MAIN Campus, Crounse Academic Center , Tech classroom w/ tables\n', '3.0\t08/31/2015\t12/11/2015\n', '\tANT 110-c\tIntro to Cultural Anthropology\t\t\t\n', 'Passariello, Phyllis\n', '19/20\tWaitlist(2)\t\n', 'TR 9:40 - 11:10 AM; MAIN Campus, Crounse Academic Center , Tech classroom w/ tables\n', '3.0\t08/31/2015\t12/11/2015\n', '\tANT 120-b\tHuman Biological&CulturalOrigins\t\t\t\n', 'Nyerges, A. Endre\n', '11/30\tOpen\t\n', 'MWF 12:40 - 1:40 PM; MAIN Campus, Crounse Academic Center , Tech classroom\n', '3.0\t08/31/2015\t12/11/2015\n', '\tANT 304-a\tHistory of Anthropology\t\t\t\n', 'Nyerges, A. Endre\n', '8/30\tOpen\t\n', 'MWF 3:00 - 4:00 PM; MAIN Campus, Crounse Academic Center , Tech seminar classroom\n', '3.0\t08/31/2015\t12/11/2015\n', '\tANT 305-a\tResearch Methods\t\t\t\n', 'Wiles, Kaelyn E.\n', 'Nicolas, Eilbaum\n', '1/15\tOpen\t\n', 'TR 9:40 - 11:10 AM; MAIN Campus, Young Hall , Classroom\n', '3.0\t08/31/2015\t12/11/2015\n', '\tANT 340-a\tIntro to Folklore\t\t\t\n', 'Passariello, Phyllis\n', '30/30\tClosed\t\n', 'TR 12:40 - 2:10 PM; MAIN Campus, Crounse Academic Center , Tech classroom w/ tables\n', '3.0\t08/31/2015\t12/11/2015\n', '\tANT 382-a\tAn Archaeologist Looks at Death\t\t\t\n', 'Cutright, Robyn E.\n', '6/30\tOpen\t\n', 'MWF 1:50 - 2:50 PM; MAIN Campus, Crounse Academic Center , Tech seminar classroom\n', '3.0\t08/31/2015\t12/11/2015\n', '\tANT 451-a\tAncient Maya Culture\t\t\t\n', 'Dove, Stephen C.\n', '9/18\tOpen\t\n', '0:00 - 0:00 AM; MEXO Campus, Mexico Campus\n', '3.0\t08/31/2015\t12/11/2015\n', '\tANT 500-a\tSenior Seminar\t\t\t\n', 'Weston, William J.\n', '2/15\tOpen\t\n', 'R 7:00 - 10:00 PM; MAIN Campus, Crounse Academic Center , Tech seminar\n']);
	document.getElementById("f").innerHTML += "Local Storage Works.<br><br>";
	var courseList = localStorage.getItem("fall_2015").split(",");
	document.getElementById("f").innerHTML += courseList.length+"<br>";
	var commaRemoved = "";
	for (var i = 0; i < 100; i++){
		commaRemoved = commaRemoved.concat(courseList[i]);
		//document.getElementById("f").innerHTML += commaRemoved;
	}
	var tableRemovedList = commaRemoved.split("\t");
	for (var i = 0; i< 100; i++){
		document.getElementById("f").innerHTML += tableRemovedList[i]+"<br>"
		
	}
}
else{
	document.getElementById("f").innerHTML += "Switch to another broswer. Your broswer does not support Canvas";
}
		