var getQueryString = function ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};

var name = getQueryString("name");
document.querySelector("#name").value = name

var price = getQueryString("price");
document.querySelector("#price").value = price

var dol = getQueryString("dol");
document.querySelector("#dol").value = dol


var active = getQueryString("active");
if(active==="Yes")
	document.querySelector("#Yes").checked = active
else
	document.querySelector("#No").checked = active

var delivery = getQueryString("delivery");

if(delivery==="Yes")
	document.querySelector("#delivery").checked = true
else
	document.querySelector("#delivery").checked = false

var category = getQueryString("category");
document.querySelector("#category").value = category
