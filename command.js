//define the table search as an object, which can implement both functions and properties
var command = {};
var time = 80;

var enlargeVal=new Array();
enlargeVal[0]='60%';enlargeVal[1]='50%';enlargeVal[2]='40%';enlargeVal[3]='30%';enlargeVal[4]='20%';enlargeVal[5]='10%';enlargeVal[6]='0%';
var decreaser=enlargeVal.length-1;
var increaserLeft=0;
//initialize the search, setup the current object
command.init = function () {
}


command.quit = function () {
    setTimeout(function () {
        var ww = window.open(window.location, '_self');
        ww.close();
    }, 1000);
}


command.enlargeValD=function(id){
this.repaint(id);
	
	decreaser=decreaser-1;
	if (decreaser<0){
	this.toggleVisibility(id);alert("your dead");decreaser=enlargeVal.length-1;}

this.stretchImage(id); 
this.repaint(id);
}

command.delargeValD=function(id){
this.repaint(id);
	
		decreaser=decreaser+1;
	if (decreaser>enlargeVal.length){
	this.toggleVisibility(id);alert("he is gone");decreaser=0;}

this.stretchImage(id); 
this.repaint(id);
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

command.batSpam = function (id, t, minus)
{
	timer = setInterval(function(){intTimer()},t);
	
	function intTimer()
	{
		if(time == 0)
		{
			clearInterval(timer);


		}
			
		else
		{				
			time = time-1;
		
						decreaser=decreaser-1;
						if (decreaser<0){
						    var e = document.getElementById(id);
							e.style.display = ((e.style.display != 'none') ? 'none' : 'block');;decreaser=enlargeVal.length-1;}

													var e = document.getElementById(id);
								f=enlargeVal[decreaser];
								e.style.width=f;
								e.style.height=f;
			if (decreaser<0){increaserLeft=0;}
			increaserLeft+=minus*1;
			var f=20*increaserLeft;
			$("#"+id).css("left",f*minus+"px");
		}
	}
	
	
}	

command.moveImageToPlayer = function (id, minus) {
if (decreaser<0){increaserLeft=0;}
increaserLeft+=minus*1;
    var f=20*increaserLeft;


	$("#"+id).css("left",f*minus+"px");
	this.repaint(id);
	}


