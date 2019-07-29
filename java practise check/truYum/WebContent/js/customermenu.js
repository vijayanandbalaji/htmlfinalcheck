const products=[
{ pid:1,name:'Sandwich',delivery:'yes',price:'Rs.99.00',category:'Main course',active:'yes',dol:'15/03/2017'},

{ pid:2,name:'Burger',delivery:'No',price:'Rs.129.00',category:'Main course',active:'No',dol:'23/12/2017'},

{ pid:3,name:'Pizza',delivery:'No',price:'Rs.149.00',category:'Main course',active:'No',dol:'21/08/2017'},

{ pid:4,name:'French Fries',delivery:'No',price:'Rs.57.00',category:'Starters',active:'Yes',dol:'02/07/2017'},

{ pid:5,name:'Chocolate Brownie',delivery:'Yes',price:'Rs.32.00',category:'Dessert',active:'Yes',dol:'02/11/2017'}

];



var v1=document.querySelector("#access").value;


	const renderProducts=function(products)
	
	{
		
		if(v1==='admin' || v1 === 'customer' || v1==='cart')
		
		{
	
		let tabEl=document.querySelector("#prod-tab");

		let trE=document.createElement("tr");
		
		
		if(v1==='cart' || v1==='customer' || v1==='admin')
		{
		
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
		
		}
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
			
			
			if(v1==='cart')
			{
				
				let tdEl7=document.createElement("td");
			
			let editLink=document.createElement('a');

			editLink.setAttribute('id','link1');

			editLink.href="movie-list-delete.html";

			editLink.textContent="Delete";
			
			tdEl7.appendChild(editLink);

			trEl1.appendChild(tdEl7);
			}
			
			
			if(v1==='customer')
			{
				
				let tdEl7=document.createElement("td");
			
			let editLink=document.createElement('a');

			editLink.setAttribute('id','link1');

			editLink.href="menu-item-list-customer-notification.html";

			editLink.textContent="Add to Cart";
			
			tdEl7.appendChild(editLink);

			trEl1.appendChild(tdEl7);
			}
			
			
			
		})

		document.querySelector('#link1').addEventListener('click',function(){

			console.log(product);

		})

		}
	}


		renderProducts(products);
		

