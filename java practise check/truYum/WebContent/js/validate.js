function validation()
{
var n1= document.forms["myform"]["name"].value;
var p1= document.forms["myform"]["price"].value;
var d1= document.forms["myform"]["dol"].value;
var pattern= /^[a-zA-z]+$/ ;
if(n1=="")
{
	alert("name should be required");
	return true;

}
if(n1.length<1 || n1.length>65)
{
	alert("name lenght should be between 2 to 65");
	return true;
}
if(p1=="")
{
	alert("price should be required");
	return true;
}
if(p1.match(pattern))
{
	alert("price field doesn't accept alphabet");
	return true;
}
if(d1=="")
{
	alert("date should be required");
	return true;
}
else
{
	window.location.href="practise.html";
}
}
