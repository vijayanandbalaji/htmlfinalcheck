const products=[
{ pid:1,name:'Sandwich',delivery:'yes',price:'Rs.99.00',category:'Main course',active:'yes',dol:'15/03/2017'},

{ pid:2,name:'Burger',delivery:'No',price:'Rs.129.00',category:'Main course',active:'No',dol:'23/12/2017'},

{ pid:3,name:'Pizza',delivery:'No',price:'Rs.149.00',category:'Main course',active:'No',dol:'21/08/2017'},

{ pid:4,name:'French Fries',delivery:'No',price:'Rs.57.00',category:'Starters',active:'Yes',dol:'02/07/2017'},

{ pid:5,name:'Chocolate Brownie',delivery:'Yes',price:'Rs.32.00',category:'Dessert',active:'Yes',dol:'02/11/2017'}

];




	const renderProducts=function(products)
	
	{
	
		let tabEl=document.querySelector("#prod-tab");

		let trE=document.createElement("tr");
		
		let th1=document.createElement("th");
		th1.textContent="Name";
		trE.appendChild(th1);
		
		
		let th2=document.createElement("th");
		th2.textContent="price";
		trE.appendChild(th2);
		
		
		let th3=document.createElement("th");
		th3.textContent="Active";
		trE.appendChild(th3);
		
		let th4=document.createElement("th");
		th4.textContent="Date of Launch";
		trE.appendChild(th4);
		
		
		let th5=document.createElement("th");
		th5.textContent="Category";
		trE.appendChild(th5);
		
		
		let th6=document.createElement("th");
		th6.textContent="Free Delivery";
		trE.appendChild(th6);
		
		let th7=document.createElement("th");
		th7.textContent="Action";
		trE.appendChild(th7);
		
		
		tabEl.appendChild(trE);
		
		
		
		products.forEach(function(product){

			let trEl1=document.createElement("tr");
			

			let tdEl1=document.createElement("td");

			tdEl1.textContent=product.name;
	
			trEl1.appendChild(tdEl1);
			
			

			let tdEl2=document.createElement("td");
	
			tdEl2.textContent=product.price;

			trEl1.appendChild(tdEl2);
			
			
			
			

	
			let tdEl3=document.createElement("td");

			tdEl3.textContent=product.active;

			trEl1.appendChild(tdEl3);
			
			
			
			let tdEl4=document.createElement("td");

			tdEl4.textContent=product.dol;

			trEl1.appendChild(tdEl4);
	
			
			let tdEl5=document.createElement("td");

			tdEl5.textContent=product.category;

			trEl1.appendChild(tdEl5);
			
			
			
			let tdEl6=document.createElement("td");

			tdEl6.textContent=product.delivery;

			trEl1.appendChild(tdEl6);
			
			
			
			
			

			tabEl.appendChild(trEl1);
			

			let tdEl7=document.createElement("td");
			
			

			
			let editLink=document.createElement('a');

			editLink.setAttribute('id','link1');

			editLink.href="edit-menu-item.html?"+"name="+product.name+"&price="+product.price+"&active="+product.active+"&dol="+product.dol+"&category="+product.category+"&delivery="+product.delivery;

			editLink.textContent="Edit"
	
			tdEl7.appendChild(editLink);

			trEl1.appendChild(tdEl7);
			
	
		})

		document.querySelector('#link1').addEventListener('click',function(){

			console.log(product);

		})

	}


		renderProducts(products);
		
		
		
		var v=document.querySelector("#access").value;
		
		if(v ==='e')
		{
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

}

