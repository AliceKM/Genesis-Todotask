setInterval(show, 1000);
function show() {
let  date = new Date();
	let current_date = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+ date.getDate();
	let current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	let date_time = 'Date:  '+current_date+' '+current_time;	
	document.getElementById("show").innerHTML = date_time;
}