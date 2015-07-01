window.onload = function()	{
	var announcements = document.getElementById("announcements");
	var comingUp = document.getElementById("comingUp");
	var live = document.getElementById("live");
	var springBreakCamp = document.getElementById("springBreakCamp");
	var reminders = document.getElementById("reminders");
	var volunteer = document.getElementById("volunteer");
	var springCups = document.getElementById("springCups");
	
	
	//Start: Section for selecting areas to edit
	function changeClass()	{
		this.className = "hovered";
	}
	
	function restoreClass()	{
		this.className = null;
	}
	
	announcements.onmouseover = changeClass;
	announcements.onmouseout = restoreClass;
	
	comingUp.onmouseover = changeClass;
	comingUp.onmouseout = restoreClass;
	
	live.onmouseover = changeClass;
	live.onmouseout = restoreClass;
	
	springBreakCamp.onmouseover = changeClass;
	springBreakCamp.onmouseout = restoreClass;
	
	reminders.onmouseover = changeClass;
	reminders.onmouseout = restoreClass;
	
	volunteer.onmouseover = changeClass;
	volunteer.onmouseout = restoreClass;
	
	springCups.onmouseover = changeClass;
	springCups.onmouseout = restoreClass;
	//End: Section for selecting areas to edit
	
	function showEditor()	{
		alert("<h1>Hello World!</h1>");
	}
	
	announcements.onclick = showEditor;
}