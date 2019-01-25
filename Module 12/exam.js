var data=({
	"userid":[
	{
	"nam":"abcd",
	"password":"abcd",
	"comments": [],
	},
	]
})

function myFunction() {
  var name = document.getElementById("name").value;
  var pass = document.getElementById("pass").value;
  var comment = document.getElementById("comment").value;
  submitOK = "true";

  if (name == '') {
	    alert("Enter name");
	    submitOK = "false";
	    return;
  }

  if (name!= data.userid[0].nam) {
    alert("You have entered wrong name");
    submitOK = "false";
    return;
  }
  if (pass == '') {
	    alert("Enter password");
	    submitOK = "false";
	    return;
  }


  if (pass != data.userid[0].password) {
    alert("You entered wrong password");
    submitOK = "false";
    return;
  }

  if (submitOK == "false") {
  	// document.getElementById("name").innerHTML = "";
   document.getElementById("feedback").innerHTML = "wrong"
  }
  else {
  	// document.getElementById("name").innerHTML = name;
  	document.getElementById("feedback").innerHTML = comment;
  }
}

