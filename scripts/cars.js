var current = 0;

function move(dir){
	if(dir == 1 && current == 0){
        document.getElementById("maindesk").style.objectPosition = "left";
        current = 1;
	}
	if(dir == 2 && current == 0){
        document.getElementById("maindesk").style.objectPosition = "right";
        current = 2;
	}
    if(dir == 1 && current == 2)
    {
        document.getElementById("maindesk").style.objectPosition = "initial";
        current = 0;		
    }
    if(dir == 2 && current == 1)
    {
        document.getElementById("maindesk").style.objectPosition = "initial";
        current = 0;		
    }
    
    switch(current)
    {
        case 0:
        {
            document.getElementById("cartype").innerHTML = "Model 3";
        } break;
        case 1:
        {
            document.getElementById("cartype").innerHTML = "Model S";
        } break;
        case 2:
        {
            document.getElementById("cartype").innerHTML = "Model X";
        } break;
    }
}

function load()
{
    document.getElementById("accountdiv").addEventListener("click", function() {
        window.open("useraccount.html", "_self");
    });

	document.getElementById("leftanchor").addEventListener("click", function() {
		move(1);
	});

	document.getElementById("rightanchor").addEventListener("click", function() {
		move(2);
    });
}

document.addEventListener("DOMContentLoaded", load);