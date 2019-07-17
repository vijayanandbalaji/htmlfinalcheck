
			function validation()
			{
				var n1= document.forms["myform"]["title"].value;
				var p1= document.forms["myform"]["boxoffice"].value;
				var d1= document.forms["myform"]["dol"].value;
				var pattern= /^[a-zA-z]+$/ ;
				if(n1=="")
				{
					alert("Title is required");
					return true;
				}
				if(n1.length<2 || n1.length>100)
				{
					alert("Title should have 2 to 100 characters");
					return true;
				}
				if(p1=="")
				{
					alert("Box Office is required");
					return true;
				}
				if(p1.match(pattern))
				{
					alert("Box Office has to be a number");
					return true;
				}
				if(d1=="")
				{
					alert("Date of Launch is required");
					return true;
				}
				else
				{
					window.location.href="edit-movie-status.html";
				}
			}

		