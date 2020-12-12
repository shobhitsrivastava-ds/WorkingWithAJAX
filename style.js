console.log("Workign with AjAX");

let fetchbtn = document.getElementById('fetch');
let backupbtn = document.getElementById('backup');

//fetchbtn.addEventListener('click', buttonclick);
backupbtn.addEventListener('click', buttonclick);;

function buttonclick()
{
	console.log("You have clicked the fetch button!!");
	// Instantiate an xhr object
	const xhr= new XMLHttpRequest();
	// Open the object

	console.log("Opening the object...");

	xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

	//xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
	//xhr.getResponseHeader('Content-type', 'application/json');
	//xhr.onprogress= function()
	//{
	//	console.log("On progress.....");
	//}
	xhr.onload= function()
	{
		if(this.status== 200)
		{
			let obj= JSON.parse(this.responseText);
			let list= document.getElementById("list");
			str= "";
			for (key in obj)
			{		
				str += `<li>${obj[key].employee_name} </li>`;
			} 
			list.innerHTML= str;
		}
		else
		{
			console.log("[ERROR] Some error occured!!");
		}
	}
	// send the request
	

	//params= {"name":"test","salary":"123","age":"23"};	
	//xhr.send(params);
	xhr.send()
}