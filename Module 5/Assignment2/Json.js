var data=({
	"questions":[
	{
	"q1":"Capital of telangana?",
	"option1":"Hyderabad",
	"option2":	"Bangalore",
	"hint1":"Starts with H",
	},
	{
	"q1":"Which city is called as pink city?",
	"option1":"Jaipur",
	"option2":	"Lucknow",
	"hint1":"Starts with J",
	},
	{
	"q1":"Is Diu a union teritory?",
	"option1":"Yes",
	"option2":	"No",
	"hint1":"think about daman",
	},
	{
	"q1":"City famous for idly?",
	"option1":"Chennai",
	"option2":	"Kerala",
	"hint1":"Starts with C",
	},
	]
})
var i = 0;
function display(i) {
	document.getElementById("welcome").innerHTML = "Welcome to Quiz!!"
	document.getElementById("q1").innerHTML = data.questions[i].q1;
    document.getElementById("option1").value=data.questions[i].option1;
    document.getElementById("option2").value=data.questions[i].option2;
	document.getElementById('hint1').innerHTML = data.questions[i].hint1;

}

function next(){
	display(++i);
}

function prev(){
	display(--i);
}



