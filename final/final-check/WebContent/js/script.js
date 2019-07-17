const movies=[
{ pid:1,title:'Avatar',boxoffice:'$2,787,965,087',active:'Yes',dol:'15/03/2017',genre:'Science Fiction',teaser:'Yes'},

{ pid:2,title:'The Avengers',boxoffice:'$1,518,812,988',active:'Yes',dol:'23/12/2017',genre:'Superhero',teaser:'No'},

{pid:3,title:'Titanic',boxoffice:'$2,187,463,944',active:'Yes',dol:'21/08/2017',genre:'Romance',teaser:'No'},

{ pid:4,title:'Jurassic World',boxoffice:'$1,671,713,208',active:'No',dol:'02/07/2017',genre:'Science Fiction',teaser:'Yes'},

{pid:5,title:'Avengers:End Game',boxoffice:'$2,750,760,348',active:'Yes',dol:'02/11/2022',genre:'Superhero',teaser:'Yes'}

];

var d=new Date('June 17, 2000');



var v1=document.querySelector("#access").value;



	
		const m=function(movies)
		{
			if(v1==='admin' || v1 === 'cus' || v1==='fav')
			{
				
				let tabEl=document.querySelector("#m1");
		
				let trE=document.createElement("tr");
		
				if(v1==='fav' || v1==='cus' || v1==='admin')
				{
			
					let th1=document.createElement("th");
					th1.textContent="Title";
					trE.appendChild(th1);
		
		
					let th2=document.createElement("th");
					th2.textContent="Box Office";
					trE.appendChild(th2);
		
					if(v1==='admin')
					{
						let th3=document.createElement("th");
						th3.textContent="Active";
						trE.appendChild(th3);
		
						let th4=document.createElement("th");
						th4.textContent="Date of Launch";
						trE.appendChild(th4);
					}
		
					let th5=document.createElement("th");
					th5.textContent="Genre";
					trE.appendChild(th5);
				}
		
		
				let th6=document.createElement("th");
				th6.textContent="Has Teaser";
				trE.appendChild(th6);
				
				
				let th7=document.createElement("th");
				th7.textContent="Action";
				trE.appendChild(th7);
		
		
				tabEl.appendChild(trE);
			
		
				movies.forEach(function(movie)
				{

				let trEl1=document.createElement("tr");
			

				let tdEl1=document.createElement("td");
	
				tdEl1.textContent=movie.title;
		
				trEl1.appendChild(tdEl1);
			
			

				let tdEl2=document.createElement("td");
		
				tdEl2.textContent=movie.boxoffice;

				trEl1.appendChild(tdEl2);
			
			
			
				if(v1==='admin')
				{
	
				let tdEl3=document.createElement("td");

				tdEl3.textContent=movie.active;

				trEl1.appendChild(tdEl3);
				
			
			
			
				let tdEl4=document.createElement("td");

				tdEl4.textContent=movie.dol;

				trEl1.appendChild(tdEl4);
				}
	
			
				let tdEl5=document.createElement("td");

				tdEl5.textContent=movie.genre;

				trEl1.appendChild(tdEl5);
			
			
			
				let tdEl6=document.createElement("td");
	
				tdEl6.textContent=movie.teaser;

				trEl1.appendChild(tdEl6);
			
			
			
			
			

				tabEl.appendChild(trEl1);
			

				
			
			
				if(v1==='admin')
				{
					
					let tdEl7=document.createElement("td");
			
				let editLink=document.createElement('a');

				editLink.setAttribute('id','link1');

				editLink.href="edit-movie.html?"+"title="+movie.title+"&boxoffice="+movie.boxoffice+"&active="+movie.active+"&dol="+movie.dol+"&genre="+movie.genre+"&teaser="+movie.teaser;

				editLink.textContent="Edit";
				
				tdEl7.appendChild(editLink);

				trEl1.appendChild(tdEl7);
				
				}
				
				if(v1==='cus')
				{
					
					let tdEl7=document.createElement("td");
				
				let editLink=document.createElement('a');

				editLink.setAttribute('id','link1');

				editLink.href="movie-list-customer-notification.html";

				editLink.textContent="Add to Favourite";
				
				tdEl7.appendChild(editLink);

				trEl1.appendChild(tdEl7);
				}
				
				if(v1==='fav')
				{
					
					let tdEl7=document.createElement("td");
				
				let editLink=document.createElement('a');

				editLink.setAttribute('id','link1');

				editLink.href="favorites-notification.html";

				editLink.textContent="Delete";
				
				tdEl7.appendChild(editLink);

				trEl1.appendChild(tdEl7);
				}
	
				
			
	
			})

			document.querySelector('#link1').addEventListener('click',function()
			{

				console.log(movie);
			})

		}
	}


		m(movies);
		

		
		if(v1==='edit')
		{
			var getQueryString = function ( field, url )
			{
				var href = url ? url : window.location.href;
				var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
				var string = reg.exec(href);
				return string ? string[1] : null;
			};

				var title = getQueryString("title");
				document.querySelector("#title").value = title

				var boxoffice = getQueryString("boxoffice");
				document.querySelector("#boxoffice").value = boxoffice

				var dol = getQueryString("dol");
				document.querySelector("#dol").value = dol
document.write(d);
					

				var active = getQueryString("active");
				if(active==="Yes")
					document.querySelector("#Yes").checked = active

				else
					document.querySelector("#No").checked = active

				var teaser = getQueryString("teaser");
				if(teaser==="Yes")
					document.querySelector("#teaser").checked = true

				else
					document.querySelector("#teaser").checked = false
	
				var genre = getQueryString("genre");
				document.querySelector("#genre").value = genre

		}
		
		
		
		
		
		
