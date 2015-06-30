//JavaScript Objects are Mutable
// not adding semi-columns to method declearation and function function declearation
//http://www.nczonline.net/blog/2012/05/08/working-with-files-in-javascript-part-1/


function course(Subject,Code){
    this.Subject = Subject.toLowerCase();
    this.Code = Code;
    this.Name ="";
    this.Instructor = "";
    this.Days = "";
    this.StartTime = new Date();
    this.EndTime = new Date();
    this.Credit = 0;
    this.Location = "";
    this.Description = "";
    this.Link = "";
//most getters and setters emitted
    this.setLink = function(newLink){// empty space matters!!!
	this.Link = "www.google.com/search?q="+newLink+"%20site%3Awww.ratemyprofessors.com";
    }
    this.getLink = function(){
	return this.Link;
    }
//print
    this.toString = function(){
	var pr = this.Subject +" "+ this.Code +" ";
	return pr;
    }
// methods
	this.display = function(){
		var startCell = ((this.StartTime.getHours()+5) % 13)+1;
		var timeSpan = this.EndTime.getUTCMilliseconds()-this.StartTime.getUTCMilliseconds();///// does not work 
		if(this.Days.search("M")>=0){
			$("s02").innerHTML += '#row'+startCell+'cell2'+'{ background-color:'+'#0000E6;}';
		}
		if(this.Days.search("T")>=0){
			$("s02").innerHTML += '#row'+startCell+'cell3{ background-color:'+'#0000E6;}';
		}
		if(this.Days.search("W")>=0){
			$("s02").innerHTML += '#row'+startCell+'cell4{ background-color:'+'#0000E6;}';
		}
		if(this.Days.search("R")>=0){
			$("s02").innerHTML += '#row'+startCell+'cell5{ background-color:'+'#0000E6;}';
		}
		if(this.Days.search("F")>=0){
			$("s02").innerHTML += '#row'+startCell+'cell6{ background-color:'+'#0000E6;}';
		}
	}
   this.search = function(){
       //var output = "";
       var f = new File("fall_2014.txt","r");
       var stringgg = f.getAsText();
       document.write(stringgg);
       
  //     var reader = new FileReader(f);
    
       
   //reader.onload = function(){
//	   console.log("success");
  //     };
//       reader.readAsText("fall_2014.txt");

   };
}
function canvas(){// in paragraph grid create a table of 16 rows and 7 colomns
	//console.log('get in canvas');
	var x = '<table id ="t01" >';
	console.log('before the for loop');
	for (var i = 1; i< 17; i++){
		//console.log('get in the i for loop');
		x += '<tr ' + 'id="row' + i + '" > ';
		//console.log(x);
		for (var j = 1; j < 7; j++){
			console.log("get in the j for loop");
			x += '<td' + ' id="row' + i + 'cell'+ j + '" > '+" test "+'</td> '; 
		}
		x += '</tr> ';
	}
	x += "</table>";
	document.getElementById("grid").innerHTML = x ;
	
}
// label can have different modes
function label(){
	document.getElementById('row1cell2').innerHTML = "Monday";
	document.getElementById('row1cell3').innerHTML = "Tuesday";
	document.getElementById('row1cell4').innerHTML = "Wednesday";
	document.getElementById('row1cell5').innerHTML = "Thursday";
	document.getElementById('row1cell6').innerHTML = "Friday";
	
	
}


function changeStyle(){

	document.getElementById("s01").innerHTML +="#row1cell2{ background-color:#F6ACBD;}";
	document.getElementById("s01").innerHTML +="#row1cell1 {text-align: left;}";

}

function main(){
	
    var c1 = new course("Che",135); 
	c1.Name = "Accelerated General Chemistry";
	c1.Instructor = "Leonard Thomas Demoranville";
	c1.Days = "MWF";
	c1.StartTime.setHours(1);
	c1.StartTime.setMinutes(50);
	c1.EndTime.setHours(2);
	c1.EndTime.setMinutes(50);
	c1.Credit = 4.0;
	c1.Location = "Olin Hall, Classroom";
	c1.Description = "Open";
	c1.setLink("Leonard Demoranville");
    $("demo").innerHTML = c1.toString();
	canvas();
	label();	
	c1.display();
	if(typeof(Storage)!== "undefined"){
		localStorage.setItem("Fall2015","I want to take linear algebra");
		$("row1cell5").innerHTML = localStorage.getItem("Fall2015");
	}
	else{
		$("row1cell5").innerHTML = localStorage.getItem("bad browser");
	}
}
