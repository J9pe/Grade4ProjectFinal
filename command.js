//define the table search as an object, which can implement both functions and properties
var command = {};
var time2=50;
var enlargeVal=new Array();
enlargeVal[0]='60%';enlargeVal[1]='50%';enlargeVal[2]='40%';enlargeVal[3]='30%';enlargeVal[4]='20%';enlargeVal[5]='10%';enlargeVal[6]='0%';
var decreaser=enlargeVal.length-1;
var decreaserForBat=enlargeVal.length-1;

var increaserLeft=0;
var increaserForBatLeft=0;
//initialize the search, setup the current object
command.init = function () {
}


command.quit = function () {
    setTimeout(function () {
        var ww = window.open(window.location, '_self');
        ww.close();
    }, 1000);
}


command.changeValD=function(id,minus){
//when minus is positive 1, it is shrinking the image
//when minus is negative 1, it is enlarging the image
var e = document.getElementById(id);
(e.style.display = 'none') ;
(e.style.display = 'block');
	
	decreaser=decreaser+minus;
	if (decreaser<0)
	{

		e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
		alert("you lose");
		decreaser=enlargeVal.length-1;
		increaserLeft=0;
	}
	else if (decreaser>enlargeVal.length)
	{

		e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
		alert("he is gone");
		decreaser=0;
	}
	f=enlargeVal[decreaser];
	e.style.width=f;
	e.style.height=f;

	(e.style.display = 'none') ;
	(e.style.display = 'block');
}


command.repaint=function(id){
var e = document.getElementById(id);
(e.style.display = 'none') ;
(e.style.display = 'block');
}

command.toggleVisibility = function (id) {
this.repaint(id);
    var e = document.getElementById(id);
    e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
	
this.repaint(id);
}
command.stretchImage = function (id) {
    var e = document.getElementById(id);
    f=enlargeVal[decreaser];
    e.style.width=f;
    e.style.height=f;}


command.batSpam = function(id,minus,time)
{
	decreaserForBat=decreaserForBat-1;
	
	if (decreaserForBat<0)
	{
		var e = document.getElementById(id);
		$('#bat').attr('src','batFly2.jpg');
		decreaserForBat=enlargeVal.length-1;
	}
	else{$('#bat').attr('src','batFly.bmp');}
	var e = document.getElementById(id);
	f=enlargeVal[decreaserForBat];
	e.style.width=f;
	e.style.height=f;
	
	increaserForBatLeft+=minus*1;
	var f=10*increaserForBatLeft;
	$("#"+id).css("left",f*minus+"px");
}

command.moveImageToPlayer = function (id, minus) {
if (decreaser<0){increaserLeft=0;}
increaserLeft+=minus*1;
    var f=10*increaserLeft;

	var e = document.getElementById(id);
	$("#"+id).css("left",f*minus+"px");
	if (e.style.left>50){	minus=minus*(-1);}
	this.repaint(id);
	}
	
command.clearTimer=function()
{
time2=50;
}

command.throwAction=function(id)
{
				random();
				if (time2>=50)
				{command.timing('countdown',1000,50);
				alert("troll");}
}
command.timing = function (id, t2)
{
	timer2 = setInterval(function(){intTimer2()},t2);
	
	function intTimer2()
	{
		if(time2 == 0)
		{
			clearInterval(timer2);
			alert("gg");
		}
			
		else
		{				
			time2 = time2-1;
			$('#'+id).text(time2);
			command.repaint(id);
		}
	}
	
	
}	

command.timingForBat = function (id, t, time)
{
	var oTime=time;
	timer = setInterval(function(){intTimer()},t);
	var a=false;
	function intTimer()
	{
		if(time == 0)
		{	a=true;
			$("#"+id).css("left",600);
			$('#bat').attr('src','batSleep.jpg');
			document.getElementById('aim').disabled = false;	
			clearInterval(timer);
			
		}
	
		else if (!a)
		{	
			
			time = time-1;
			var minus=1;
			if (oTime>(time*(2))){minus=minus*-1;};	
			command.batSpam(id,minus,time);
		}
	}
	
	
}	

