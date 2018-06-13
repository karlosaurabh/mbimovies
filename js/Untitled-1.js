$(document).ready(()=>{
	//$('#fetchData').click(() => {
		
		getAllData();
//	});	  

$("#search-title").click(()=>{
	//alert('well come')
	let getValue = $("#search1").val();
	
	if(getValue == 'null' || getValue == ''){
		$('#search1').focus().css("border","2px solid red");
		alert("Please Enter the title")
	}
	else{
		getAllData();
	}
})
		   });// ready function close here


let getAllData = ()=>{
console.log('Making Request');

$.ajax({
type:'Get',
dataType: 'json',
async : true,
url: 'http://www.omdbapi.com/?i=tt3896198&apikey=c0687617',

success: (data)=>{
	//alert(data.Poster)
		console.log(data);

		/* ======================= SEARCH PORTIO START FROM HERE ==============*/
			$('.showDetails').hide();
			let getValue = $("#search1").val();
			if(getValue == data.Title){
				$('.showDetails').show();
				//let as1 = data.person;
				$('#posterImg').html('<img src="' + data.Poster +'"  class="img-fluid img-responsive"/>');
				$('#movieTitle').append(data.Title);
				$('#movieId').append(data.imdbID);
				$('#movieYear').append(data.Year);
			}
			else{
				alert("Sorry you can't access this")
			}
		/* ======================= SEARCH PORTIO START FROM HERE ==============*/










		

},//success function end from here

error: (data) =>{
	alert(err.responseJSON.error.message);
}
});
}

